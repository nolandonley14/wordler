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

  const [numGuesses, setNumGuesses] = useState(6);
  const [wordList, setWordList] = useState(new Set());
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const [hardMode, setHardMode] = useLocalStorage("hardMode", false);
  const [highContrast, setHighContrast] = useLocalStorage("highContrast", false);

  const [dailyBoard, setDailyBoard] = useLocalStorage("dailyBoard", boardDefault);
  const [currAttempt, setCurrAttempt] = useLocalStorage("currAttempt", {attempt: 0, letter: 0});
  const [correctWord, setCorrectWord] = useLocalStorage("correctWord", "");
  const [disabledLetters, setDisabledLetters] = useLocalStorage("disabledLetters", []);
  const [lettersState, setLettersState] = useLocalStorage("lettersState", []);
  const [correctLetters, setCorrectLetters] = useLocalStorage("correctLetters", []);
  const [almostLetters, setAlmostLetters] = useLocalStorage("almostLetters", []);
  const [gameOver, setGameOver] = useLocalStorage("gameOver", {gameOver: false, guessedWord: false});

  const [practiceBoard, setPracticeBoard] = useLocalStorage("practiceBoard", boardDefault);
  const [currPracticeAttempt, setCurrPracticeAttempt] = useLocalStorage("currPracticeAttempt", {attempt: 0, letter: 0});
  const [correctPracticeWord, setCorrectPracticeWord] = useLocalStorage("correctPracticeWord", "");
  const [disabledPracticeLetters, setDisabledPracticeLetters] = useLocalStorage("disabledPracticeLetters", []);
  const [lettersPracticeState, setLettersPracticeState] = useLocalStorage("lettersPracticeState", []);
  const [correctPracticeLetters, setCorrectPracticeLetters] = useLocalStorage("correctPracticeLetters", []);
  const [almostPracticeLetters, setAlmostPracticeLetters] = useLocalStorage("almostPracticeLetters", []);
  const [gameOverPractice, setGameOverPractice] = useLocalStorage("gameOverPractice", {gameOver: false, guessedWord: false});

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordList(words);
    });
    if (correctWord == "") {
      getDailyWord().then((word) => {
        setCorrectWord(word);
      })
    }
    if (correctPracticeWord == "") {
      getRandomWord().then((word) => {
        setCorrectPracticeWord(word);
      })
    }
  }, []);

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

  const updateLetterPracticeState = () => {
    const lettersMap = {};
    const newLettersState = [];
    for (var i = 0; i < 6; i++) {
      const letter = correctPracticeWord[i].toUpperCase();
      if (!Object.keys(lettersMap).includes(letter)){
        lettersMap[letter] = 1;
      } else {
        lettersMap[letter] += 1;
      }
    }
    for (var i = 0; i < 6; i++) {
      const letter = practiceBoard[currPracticeAttempt.attempt][i];
      const correct = correctPracticeWord.toUpperCase()[i] === letter;
      if (correct) {
        lettersMap[letter] -= 1;
      }
    }
    for (var i = 0; i < 6; i++) {
      const letter = practiceBoard[currPracticeAttempt.attempt][i];
      const correct = correctPracticeWord.toUpperCase()[i] === letter;
      const almost = !correct && letter !== "" && correctPracticeWord.toUpperCase().includes(letter) && lettersMap[letter] > 0;
      if (correct || almost) {
        lettersMap[letter] -= 1;
      }
      const type = correct ? "correct" : almost ? "almost" : "disabled";
      const lettersObj = {"letter": letter, "type": type};
      newLettersState.push(lettersObj);
    }
    setLettersPracticeState((prev) => [...prev, newLettersState])
  }

  const onEnterPractice = () => {
    let currWord = "";

    if (currPracticeAttempt.letter !== 6) return;

    for (let i = 0; i < 6; i++) {
      currWord += practiceBoard[currPracticeAttempt.attempt][i];
    }
    if (wordList.has(currWord.toLowerCase())) {
      setCurrPracticeAttempt({ attempt: currPracticeAttempt.attempt + 1, letter: 0 });
      updateLetterPracticeState();
    } else {
      alert("Word not found");
      return;
    }

    if (currWord.toLowerCase() === correctPracticeWord) {
      setGameOverPractice({ gameOver: true, guessedWord: true });
      return;
    }

    if (currPracticeAttempt.attempt === numGuesses-1) {
      setGameOverPractice({ gameOver: true, guessedWord: false });
      return;
    }
  }

  const onEnter = () => {
      let currWord = "";
      if (currAttempt.letter !== 6) return;

      for (let i = 0; i < 6; i++) {
        currWord += dailyBoard[currAttempt.attempt][i];
      }
      if (wordList.has(currWord.toLowerCase())) {
        setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
        updateLetterState();
      } else {
        alert("Word not found");
        return;
      }

      if (currWord.toLowerCase() === correctWord) {
        setGameOver({ gameOver: true, guessedWord: true });
        return;
      }

      if (currAttempt.attempt === numGuesses-1) {
        setGameOver({ gameOver: true, guessedWord: false });
        return;
      }
    };

    useEffect(() => {
      console.log(practiceBoard);
    }, [practiceBoard])

    const resetPractice = () => {
      getRandomWord().then((word) => {
        setCorrectPracticeWord(word);
      })
      setCurrPracticeAttempt({attempt: 0, letter: 0});
      setDisabledPracticeLetters([]);
      setLettersPracticeState([]);
      setCorrectPracticeLetters([]);
      setAlmostPracticeLetters([]);
      setGameOverPractice({gameOver: false, guessedWord: false});
      const newBoard = [...practiceBoard];
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
          newBoard[i][j] = "";
        }
      }
      setPracticeBoard(newBoard);
    }

    const onDeletePractice = () => {
      if (currPracticeAttempt.letter === 0) return;
      const newBoard = [...practiceBoard];
      newBoard[currPracticeAttempt.attempt][currPracticeAttempt.letter - 1] = "";
      setPracticeBoard(newBoard);
      setCurrPracticeAttempt({ ...currPracticeAttempt, letter: currPracticeAttempt.letter - 1 });
    };

    const onDelete = () => {
      if (currAttempt.letter === 0) return;
      const newBoard = [...dailyBoard];
      newBoard[currAttempt.attempt][currAttempt.letter - 1] = "";
      setDailyBoard(newBoard);
      setCurrAttempt({ ...currAttempt, letter: currAttempt.letter - 1 });
    };

    const onSelectLetterPractice = (key) => {
      if (currPracticeAttempt.letter > 5) return;
      const newBoard = [...practiceBoard];
      newBoard[currPracticeAttempt.attempt][currPracticeAttempt.letter] = key;
      setPracticeBoard(practiceBoard);
      setCurrPracticeAttempt({
        attempt: currPracticeAttempt.attempt,
        letter: currPracticeAttempt.letter + 1,
      });
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
      numGuesses,
      setNumGuesses,
      wordList,
      setWordList,
      dailyBoard,
      setDailyBoard,
      currAttempt,
      setCurrAttempt,
      correctWord,
      onSelectLetter,
      onSelectLetterPractice,
      onDelete,
      onDeletePractice,
      onEnter,
      onEnterPractice,
      lettersState,
      setDisabledLetters,
      disabledLetters,
      setCorrectLetters,
      correctLetters,
      setAlmostLetters,
      almostLetters,
      gameOver,
      theme,
      setTheme,
      hardMode,
      setHardMode,
      highContrast,
      setHighContrast,
      practiceBoard,
      setPracticeBoard,
      currPracticeAttempt,
      setCurrPracticeAttempt,
      correctPracticeWord,
      setCorrectPracticeWord,
      correctPracticeLetters,
      setCorrectPracticeLetters,
      almostPracticeLetters,
      setAlmostPracticeLetters,
      disabledPracticeLetters,
      setDisabledPracticeLetters,
      lettersPracticeState,
      setLettersPracticeState,
      gameOverPractice,
      setGameOverPractice,
      resetPractice,
    }}>
      {props.children}
    </AppContext.Provider>
  );
};
