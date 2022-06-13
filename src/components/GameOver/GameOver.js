import React, { useContext } from "react";
import { AppContext } from "../../Context/appContext";

const GameOver = () => {
  const {
    gameType,
    currAttempt,
    gameOver,
    correctWord,
  } = useContext(AppContext);

  if (gameOver.gameOver) {
    return (
      <div className="gameOver">
        <h3>
          {gameOver.guessedWord
            ? "You Correctly Guessed the Viordle"
            : "You Failed to Guess the Word"}
        </h3>
        <h1>Correct Word: {correctWord.toUpperCase()}</h1>
        {gameOver.guessedWord && (
          <h3>You guessed in {currAttempt.attempt} attempts</h3>
        )}
      </div>
    );
  } else {
    return null;
  }


}

export default GameOver;
