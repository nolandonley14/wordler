import React, { useState, createContext, useEffect } from 'react';
import { boardDefault, generateWordSet, getDailyWord, getRandomWord } from '../data/words.js';

export const AppContext = createContext();

const useLocalStorage = (storageKey, fallbackState) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};

export const DataProvider = props => {

  const [notWordModal, setNotWordModal] = useState(false);
  const [hardModeError, setHardModeError] = useState({val: false, reason: null});

  const [numGuesses, setNumGuesses] = useState(6);
  const [wordList, setWordList] = useState(new Set());
  const [hardMode, setHardMode] = useLocalStorage("hardMode", false);
  const [showStats, setShowStats] = useLocalStorage("showStats", false);
  const [stats, setStats] = useLocalStorage("stats", {played: 0, wins: 0, winPer: 0, curStreak: 0, maxStreak: 0,
    guesses: [0, 0, 0, 0, 0, 0], lastGuess: 2});

  const [dailyBoard, setDailyBoard] = useLocalStorage("dailyBoard", boardDefault);
  const [currAttempt, setCurrAttempt] = useLocalStorage("currAttempt", {attempt: 0, letter: 0});
  const [correctWord, setCorrectWord] = useLocalStorage("correctWord", "");
  const [disabledLetters, setDisabledLetters] = useLocalStorage("disabledLetters", []);
  const [lettersState, setLettersState] = useLocalStorage("lettersState", []);
  const [correctLetters, setCorrectLetters] = useLocalStorage("correctLetters", []);
  const [almostLetters, setAlmostLetters] = useLocalStorage("almostLetters", []);
  const [gameOver, setGameOver] = useLocalStorage("gameOver", {gameOver: false, guessedWord: false});

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordList(words);
    });
    getDailyWord().then((word) => {
      if (word !== correctWord) {
        resetState();
      }
      setCorrectWord(word);
    })
  }, []);

  const resetState = () => {
    const statsPersist = stats;
    localStorage.clear()
    setStats(statsPersist);
    setDailyBoard(boardDefault);
    setCurrAttempt({attempt: 0, letter: 0});
    setDisabledLetters([]);
    setLettersState([]);
    setCorrectLetters([]);
    setAlmostLetters([]);
    setGameOver({gameOver: false, guessedWord: false});
  }

  const updateLetterState = () => {
    const lettersMap = {};
    const newLettersState = [];
    for (var i = 0; i < 6; i++) {
      const letter = correctWord[i].toUpperCase();
      if (!Object.keys(lettersMap).includes(letter)){
        lettersMap[letter] = 1;
      } else {
        lettersMap[letter] += 1;
      }
    }
    for (var i = 0; i < 6; i++) {
      const letter = dailyBoard[currAttempt.attempt][i];
      const correct = correctWord.toUpperCase()[i] === letter;
      if (correct) {
        lettersMap[letter] -= 1;
      }
    }
    for (var i = 0; i < 6; i++) {
      const letter = dailyBoard[currAttempt.attempt][i];
      const correct = correctWord.toUpperCase()[i] === letter;
      const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter) && lettersMap[letter] > 0;
      if (correct || almost) {
        lettersMap[letter] -= 1;
      }
      const type = correct ? "correct" : almost ? "almost" : "disabled";
      const lettersObj = {"letter": letter, "type": type};
      newLettersState.push(lettersObj);
    }
    setLettersState((prev) => [...prev, newLettersState])
  }

  const checkWord = () => {
    if (!hardMode) {
      return "";
    }
    var retVal = "";
    var currWord = "";
    for (let i = 0; i < 6; i++) {
      currWord += dailyBoard[currAttempt.attempt][i];
    }
    // disabledLetters.forEach((dL) => {
    //   if (currWord.includes(dL)) {
    //     retVal = false;
    //     return;
    //   }
    // })
    almostLetters.forEach((aL) => {
      if (!currWord.includes(aL)) {
        retVal = aL;
        return;
      }
    })
    correctLetters.forEach((cL) => {
      if (correctWord.indexOf(cL) != currWord.indexOf(cL)) {
        retVal = cL;
        return;
      }
    })
    return retVal;
  }

  const onEnter = () => {
      let currWord = "";
      if (currAttempt.letter !== 6) return;
      for (let i = 0; i < 6; i++) {
        currWord += dailyBoard[currAttempt.attempt][i];
      }
      if (wordList.has(currWord.toLowerCase())) {
        var letter = checkWord();
        if (letter != "") {
          setHardModeError({val: true, reason: letter});
          setTimeout(() => {
            setHardModeError({val: false, reason: null});
          }, 2000);
          return;
        } else {
          setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
          updateLetterState();
        }
      } else {
        setNotWordModal(true);
        setTimeout(() => {
          setNotWordModal(false);
        }, 2000);
        return;
      }
      if (currWord.toLowerCase() === correctWord) {
        var newStats = stats;
        newStats.played += 1;
        newStats.wins += 1;
        newStats.curStreak += 1;
        if (newStats.curStreak > newStats.maxStreak) {
          newStats.maxStreak += 1;
        }
        newStats.guesses[currAttempt.attempt] += 1;
        newStats.lastGuess = currAttempt.attempt+1;
        setStats(newStats);
        setGameOver({ gameOver: true, guessedWord: true });
        setShowStats(true);
        return;
      }
      if (currAttempt.attempt === 5) {
        var newStats = stats;
        newStats.played += 1;
        newStats.curStreak = 0;
        newStats.lastGuess = null;
        setStats(newStats);
        setGameOver({ gameOver: true, guessedWord: false });
        setShowStats(true);
        return;
      }
    };

  const onDelete = () => {
    if (currAttempt.letter === 0) return;
    const newBoard = [...dailyBoard];
    newBoard[currAttempt.attempt][currAttempt.letter - 1] = "";
    setDailyBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letter: currAttempt.letter - 1 });
  };

  const onSelectLetter = (key) => {
    if (currAttempt.letter > 5) return;
    const newBoard = [...dailyBoard];
    newBoard[currAttempt.attempt][currAttempt.letter] = key;
    setDailyBoard(newBoard);
    setCurrAttempt({
      attempt: currAttempt.attempt,
      letter: currAttempt.letter + 1,
    });
  };

  return (
    <AppContext.Provider value={{
      notWordModal,
      hardModeError,
      numGuesses,
      setNumGuesses,
      wordList,
      setWordList,
      hardMode,
      setHardMode,
      dailyBoard,
      setDailyBoard,
      currAttempt,
      setCurrAttempt,
      correctWord,
      onSelectLetter,
      onDelete,
      onEnter,
      lettersState,
      setDisabledLetters,
      disabledLetters,
      setCorrectLetters,
      correctLetters,
      setAlmostLetters,
      almostLetters,
      gameOver,
      stats,
      setStats,
      showStats,
      setShowStats
    }}>
      {props.children}
    </AppContext.Provider>
  );
};
