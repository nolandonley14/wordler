import React, { useContext } from "react";
import { AppContext } from "../../Context/appContext";
import PracticeLetter from "./PracticeLetter";
import './board.css';

function PracticeBoard() {
  return (
    <div className="board">
      {" "}
      <div className="row">
        <PracticeLetter letterPos={0} attemptVal={0} />
        <PracticeLetter letterPos={1} attemptVal={0} />
        <PracticeLetter letterPos={2} attemptVal={0} />
        <PracticeLetter letterPos={3} attemptVal={0} />
        <PracticeLetter letterPos={4} attemptVal={0} />
        <PracticeLetter letterPos={5} attemptVal={0} />
      </div>
      <div className="row">
        <PracticeLetter letterPos={0} attemptVal={1} />
        <PracticeLetter letterPos={1} attemptVal={1} />
        <PracticeLetter letterPos={2} attemptVal={1} />
        <PracticeLetter letterPos={3} attemptVal={1} />
        <PracticeLetter letterPos={4} attemptVal={1} />
        <PracticeLetter letterPos={5} attemptVal={1} />
      </div>
      <div className="row">
        <PracticeLetter letterPos={0} attemptVal={2} />
        <PracticeLetter letterPos={1} attemptVal={2} />
        <PracticeLetter letterPos={2} attemptVal={2} />
        <PracticeLetter letterPos={3} attemptVal={2} />
        <PracticeLetter letterPos={4} attemptVal={2} />
        <PracticeLetter letterPos={5} attemptVal={2} />
      </div>
      <div className="row">
        <PracticeLetter letterPos={0} attemptVal={3} />
        <PracticeLetter letterPos={1} attemptVal={3} />
        <PracticeLetter letterPos={2} attemptVal={3} />
        <PracticeLetter letterPos={3} attemptVal={3} />
        <PracticeLetter letterPos={4} attemptVal={3} />
        <PracticeLetter letterPos={5} attemptVal={3} />
      </div>
      <div className="row">
        <PracticeLetter letterPos={0} attemptVal={4} />
        <PracticeLetter letterPos={1} attemptVal={4} />
        <PracticeLetter letterPos={2} attemptVal={4} />
        <PracticeLetter letterPos={3} attemptVal={4} />
        <PracticeLetter letterPos={4} attemptVal={4} />
        <PracticeLetter letterPos={5} attemptVal={4} />
      </div>
      <div className="row">
        <PracticeLetter letterPos={0} attemptVal={5} />
        <PracticeLetter letterPos={1} attemptVal={5} />
        <PracticeLetter letterPos={2} attemptVal={5} />
        <PracticeLetter letterPos={3} attemptVal={5} />
        <PracticeLetter letterPos={4} attemptVal={5} />
        <PracticeLetter letterPos={5} attemptVal={5} />
      </div>
    </div>
  );
}

export default PracticeBoard;
