import React, { useContext, useEffect } from "react";
import { AppContext } from "../../Context/appContext";
import './board.css';

function PracticeLetter({ letterPos, attemptVal }) {
  const {
    gameType,
    practiceBoard,
    lettersPracticeState,
    currPracticeAttempt,
    correctPracticeWord,
    setCorrectPracticeLetters,
    setAlmostPracticeLetters,
    setDisabledPracticeLetters,
  } = useContext(AppContext);


  const letter = practiceBoard[attemptVal][letterPos];
  const correct = correctPracticeWord.toUpperCase()[letterPos] === letter;
  const almost = (!correct && letter !== "" && correctPracticeWord.toUpperCase().includes(letter));
  const letterState = (currPracticeAttempt.attempt > attemptVal && (correct ? "correct" : almost ? "almost" : "error"));

  const letState = (currPracticeAttempt.attempt > attemptVal && (lettersPracticeState[attemptVal] ? lettersPracticeState[attemptVal][letterPos].type : ""));

  useEffect(() => {

    if (correct && !almost) {
      setCorrectPracticeLetters((prev) => [...prev, letter]);
    } else if (almost && !correct) {
      setAlmostPracticeLetters((prev) => [...prev, letter]);
    } else if (letter !== "" && !correct && !almost) {
      setDisabledPracticeLetters((prev) => [...prev, letter]);
    }
  }, [currPracticeAttempt.attempt]);

  return (
    <div className="letter" id={letState.toString()}>
      {letter}
    </div>
  );
}

export default PracticeLetter;
