import React, { useContext, useEffect } from "react";
import { AppContext } from "../../Context/appContext";
import './board.css';
import {LetterComp, DisabledLetter, CorrectLetter, AlmostLetter} from './styledComps';

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

  if (letState.toString() == "disabled") {
    return <DisabledLetter>{letter}</DisabledLetter>;
  } else if (letState.toString() == "correct") {
    return <CorrectLetter>{letter}</CorrectLetter>;
  } else if (letState.toString() == "almost") {
    return <AlmostLetter>{letter}</AlmostLetter>;
  } else {
    return <LetterComp>{letter}</LetterComp>;
  }
}

export default Letter;
