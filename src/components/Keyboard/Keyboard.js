import React, { useCallback, useEffect, useContext } from "react";
import Key from "./Key";
import { AppContext } from "../../Context/appContext";
import {KeyboardComp, Line} from './styledComps';

function Keyboard() {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const {
    disabledLetters,
    correctLetters,
    almostLetters,
    currAttempt,
    gameOver,
    onSelectLetter,
    onEnter,
    onDelete,
  } = useContext(AppContext);

  const handleKeyboard = useCallback(
    (event) => {
      if (gameOver.gameOver) return;
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else {
        keys1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
      }
    },
    [currAttempt]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <KeyboardComp onKeyDown={handleKeyboard}>
      <Line>
        {keys1.map((key, index) => {
          return <Key
            key={key}
            keyVal={key}
            disabled={disabledLetters.includes(key)}
            correct={correctLetters.includes(key)}
            almost={almostLetters.includes(key)}
          />;
        })}
      </Line>
      <Line>
        {keys2.map((key, index) => {
          return <Key
            key={key}
            keyVal={key}
            disabled={disabledLetters.includes(key)}
            correct={correctLetters.includes(key)}
            almost={almostLetters.includes(key)}
          />;
        })}
      </Line>
      <Line>
        <Key keyVal={"???"} bigKey />
        {keys3.map((key) => {
          return <Key
            key={key}
            keyVal={key}
            disabled={disabledLetters.includes(key)}
            correct={correctLetters.includes(key)}
            almost={almostLetters.includes(key)}
          />;
        })}
        <Key keyVal={"???"} bigKey />
      </Line>
    </KeyboardComp>
  );
}

export default Keyboard;
