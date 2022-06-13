import React, { useCallback, useEffect, useContext } from "react";
import PracticeKey from "./PracticeKey";
import { AppContext } from "../../Context/appContext";
import './keyboard.css';

function PracticeKeyboard() {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const {
    disabledPracticeLetters,
    correctPracticeLetters,
    almostPracticeLetters,
    currPracticeAttempt,
    gameOverPractice,
    onSelectLetterPractice,
    onEnterPractice,
    onDeletePractice,
  } = useContext(AppContext);

  const handleKeyboardPractice = useCallback(
    (event) => {
      if (gameOverPractice.gameOver) return;
      if (event.key === "Enter") {
        onEnterPractice();
      } else if (event.key === "Backspace") {
        onDeletePractice();
      } else {
        keys1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetterPractice(key);
          }
        });
        keys2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetterPractice(key);
          }
        });
        keys3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetterPractice(key);
          }
        });
      }
    },
    [currPracticeAttempt]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardPractice);

    return () => {
      document.removeEventListener("keydown", handleKeyboardPractice);
    };
  }, [handleKeyboardPractice]);

  if (gameOverPractice.gameOver) {
    return null;
  } else {
    return (
      <div className="keyboard" onKeyDown={handleKeyboardPractice}>
        <div className="line1">
          {keys1.map((key, index) => {
            return <PracticeKey
              key={key}
              keyVal={key}
              disabled={disabledPracticeLetters.includes(key)}
              correct={correctPracticeLetters.includes(key)}
              almost={almostPracticeLetters.includes(key)}
            />;
          })}
        </div>
        <div className="line2">
          {keys2.map((key, index) => {
            return <PracticeKey
              key={key}
              keyVal={key}
              disabled={disabledPracticeLetters.includes(key)}
              correct={correctPracticeLetters.includes(key)}
              almost={almostPracticeLetters.includes(key)}
            />;
          })}
        </div>
        <div className="line3">
          <PracticeKey keyVal={"↵"} bigKey />
          {keys3.map((key) => {
            return <PracticeKey
              key={key}
              keyVal={key}
              disabled={disabledPracticeLetters.includes(key)}
              correct={correctPracticeLetters.includes(key)}
              almost={almostPracticeLetters.includes(key)}
            />;
          })}
          <PracticeKey keyVal={"⌫"} bigKey />
        </div>
      </div>
    );
  }
}

export default PracticeKeyboard;
