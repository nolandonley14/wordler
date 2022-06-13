import React, { useContext } from "react";
import { AppContext } from "../../Context/appContext";
import { boardDefault } from '../../data/words.js';

const PracticeGameOver = () => {
  const {
    practiceBoard,
    setPracticeBoard,
    currPracticeAttempt,
    gameOverPractice,
    correctPracticeWord,
    resetPractice,
  } = useContext(AppContext);

  const resetGame = () => {
    setPracticeBoard(practiceBoard => boardDefault);
    resetPractice();
  }

  if (gameOverPractice.gameOver) {
    return (
      <div className="gameOver">
        <h3>
          {gameOverPractice.guessedWord
              ? "You Correctly Guessed the Viordle"
              : "You Failed to Guess the Word"
          }
        </h3>
        <h1>Correct Word: {correctPracticeWord.toUpperCase()}</h1>
        {gameOverPractice.guessedWord && (
          <h3>You guessed in {currPracticeAttempt.attempt} attempts</h3>
        )}
        <button onClick={resetGame}>New Practice Game</button>
      </div>
    );
  } else {
    return null;
  }


}

export default PracticeGameOver;
