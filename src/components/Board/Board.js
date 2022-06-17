import React, { useContext } from "react";
import { AppContext } from "../../Context/appContext";
import Letter from "./Letter";
import './board.css';
import { BoardComp, Row } from './styledComps';

function Board() {
  return (
    <BoardComp>
      {" "}
      <Row>
        <Letter letterPos={0} attemptVal={0} />
        <Letter letterPos={1} attemptVal={0} />
        <Letter letterPos={2} attemptVal={0} />
        <Letter letterPos={3} attemptVal={0} />
        <Letter letterPos={4} attemptVal={0} />
        <Letter letterPos={5} attemptVal={0} />
      </Row>
      <Row>
        <Letter letterPos={0} attemptVal={1} />
        <Letter letterPos={1} attemptVal={1} />
        <Letter letterPos={2} attemptVal={1} />
        <Letter letterPos={3} attemptVal={1} />
        <Letter letterPos={4} attemptVal={1} />
        <Letter letterPos={5} attemptVal={1} />
      </Row>
      <Row>
        <Letter letterPos={0} attemptVal={2} />
        <Letter letterPos={1} attemptVal={2} />
        <Letter letterPos={2} attemptVal={2} />
        <Letter letterPos={3} attemptVal={2} />
        <Letter letterPos={4} attemptVal={2} />
        <Letter letterPos={5} attemptVal={2} />
      </Row>
      <Row>
        <Letter letterPos={0} attemptVal={3} />
        <Letter letterPos={1} attemptVal={3} />
        <Letter letterPos={2} attemptVal={3} />
        <Letter letterPos={3} attemptVal={3} />
        <Letter letterPos={4} attemptVal={3} />
        <Letter letterPos={5} attemptVal={3} />
      </Row>
      <Row>
        <Letter letterPos={0} attemptVal={4} />
        <Letter letterPos={1} attemptVal={4} />
        <Letter letterPos={2} attemptVal={4} />
        <Letter letterPos={3} attemptVal={4} />
        <Letter letterPos={4} attemptVal={4} />
        <Letter letterPos={5} attemptVal={4} />
      </Row>
      <Row>
        <Letter letterPos={0} attemptVal={5} />
        <Letter letterPos={1} attemptVal={5} />
        <Letter letterPos={2} attemptVal={5} />
        <Letter letterPos={3} attemptVal={5} />
        <Letter letterPos={4} attemptVal={5} />
        <Letter letterPos={5} attemptVal={5} />
      </Row>
    </BoardComp>
  );
}

export default Board;
