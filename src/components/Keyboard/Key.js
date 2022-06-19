import React, { useContext } from "react";
import { AppContext } from "../../Context/appContext";
import { KeyComp, BigKey, DisabledKey, AlmostKey, CorrectKey } from './styledComps';

function Key({ keyVal, bigKey, disabled, correct, almost }) {
  const { gameOver, onSelectLetter, onDelete, onEnter } =
    useContext(AppContext);

  const selectLetter = () => {
    if (gameOver.gameOver) return;
    if (keyVal === "↵") {
      onEnter();
    } else if (keyVal === "⌫") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };

  if (bigKey) {
    return (
      <BigKey
        id={bigKey ? "big" : disabled ? "disabled" : correct ? "correct" : almost ? "almost" : ""}
        onClick={selectLetter}
      >
        {keyVal}
      </BigKey>
    );
  } else {
    if (disabled) {
      return <DisabledKey onClick={selectLetter}>{keyVal}</DisabledKey>
    } else if (correct) {
      return <CorrectKey onClick={selectLetter}>{keyVal}</CorrectKey>
    } else if (almost) {
      return <AlmostKey onClick={selectLetter}>{keyVal}</AlmostKey>
    } else {
      return <KeyComp onClick={selectLetter}>{keyVal}</KeyComp>
    }
  }

}

export default Key;
