import React, { useContext } from "react";
import { AppContext } from "../../Context/appContext";
import './keyboard.css';

function PracticeKey({ keyVal, bigKey, disabled, correct, almost }) {
  const { gameOverPractice, onSelectLetterPractice, onDeletePractice, onEnterPractice } =
    useContext(AppContext);

  const selectLetter = () => {
    if (gameOverPractice.gameOver) return;
    if (keyVal === "ENTER") {
      onEnterPractice();
    } else if (keyVal === "DELETE") {
      onDeletePractice();
    } else {
      onSelectLetterPractice(keyVal);
    }
  };

  return (
    <div
      className="key"
      id={bigKey ? "big" : disabled ? "disabled" : correct ? "correct" : almost ? "almost" : ""}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
}

export default PracticeKey;
