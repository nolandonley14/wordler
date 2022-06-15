import React, { useContext, useEffect } from "react";
import { AppContext } from "../../Context/appContext";
import './board.css';

function Letter({ letterPos, attemptVal }) {
  const {
    dailyBoard,
    lettersState,
    currAttempt,
    correctWord,
    setCorrectLetters,
    setAlmostLetters,
    setDisabledLetters,
  } = useContext(AppContext);


  const letter = dailyBoard[attemptVal][letterPos];
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost = (!correct && letter !== "" && correctWord.toUpperCase().includes(letter));
  const letterState = (currAttempt.attempt > attemptVal && (correct ? "correct" : almost ? "almost" : "error"));

  const letState = (currAttempt.attempt > attemptVal && (lettersState[attemptVal] ? lettersState[attemptVal][letterPos].type : ""));

  useEffect(() => {

    if (correct && !almost) {
      setCorrectLetters((prev) => [...prev, letter]);
    } else if (almost && !correct) {
      setAlmostLetters((prev) => [...prev, letter]);
    } else if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  return (
    <div className="letter" id={letState.toString()}>
      {letter}
    </div>
  );
}

export default Letter;
