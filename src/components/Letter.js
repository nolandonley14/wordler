import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Letter({ letterPos, attemptVal }) {
  const { board, setDisabledLetters, lettersState, currAttempt, correctWord, setCorrectLetters, setAlmostLetters } =
    useContext(AppContext);
  const letter = board[attemptVal][letterPos];
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  const letState = currAttempt.attempt > attemptVal && (lettersState[attemptVal] ? lettersState[attemptVal][letterPos].type : "");

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
