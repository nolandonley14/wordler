import './App.css';
import Board from "./components/Board";
import Keyboard from './components/Keyboard';
import GameOver from './components/GameOver';
import { GuessContainer } from './components/GuessContainer';
import { useState, useEffect, createContext } from 'react';
import { boardDefault, generateWordSet } from './data/words.js';

export const AppContext = createContext();

function App() {
  const [numGuesses, setNumGuesses] = useState(6);
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({attempt: 0, letter: 0});
  const [wordList, setWordList] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [lettersState, setLettersState] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [almostLetters, setAlmostLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordList(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
  }, []);

  const updateLetterState = () => {
    const lettersMap = {};
    const newLettersState = [];
    for (var i = 0; i < 6; i++) {
      const letter = correctWord[i].toUpperCase();
      //const letter = board[currAttempt.attempt][i];
      if (!Object.keys(lettersMap).includes(letter)){
        lettersMap[letter] = 1;
      } else {
        lettersMap[letter] += 1;
      }
    }
    for (var i = 0; i < 6; i++) {
      const letter = board[currAttempt.attempt][i];
      const correct = correctWord.toUpperCase()[i] === letter;
      if (correct) {
        lettersMap[letter] -= 1;
      }
    }
    for (var i = 0; i < 6; i++) {
      const letter = board[currAttempt.attempt][i];
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

  const onEnter = () => {
      if (currAttempt.letter !== 6) return;

      let currWord = "";
      for (let i = 0; i < 6; i++) {
        currWord += board[currAttempt.attempt][i];
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

    const onDelete = () => {
      if (currAttempt.letter === 0) return;
      const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letter - 1] = "";
      setBoard(newBoard);
      setCurrAttempt({ ...currAttempt, letter: currAttempt.letter - 1 });
    };

    const onSelectLetter = (key) => {
      if (currAttempt.letter > 5) return;
      const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letter] = key;
      setBoard(newBoard);
      setCurrAttempt({
        attempt: currAttempt.attempt,
        letter: currAttempt.letter + 1,
      });
    };

    return (
      <div className="App">
        <nav>
          <h1>Wordler</h1>
        </nav>
          <AppContext.Provider
            value={{
              board,
              setBoard,
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
            }}
          >
            <div className="game">
              <Board />
              {gameOver.gameOver ? <GameOver /> : <Keyboard />}
            </div>
          </AppContext.Provider>
      </div>
    );
  }

export default App;
