import React, { useContext } from "react";
import { AppContext } from "../../Context/appContext";
import Letter from "./Letter";
import './board.css';
import { BoardComp, Row, NotWordModal, HardModeErrorModal } from './styledComps';

function Board() {
  const {
    notWordModal,
    hardModeError
  } = useContext(AppContext);
  return (
    <>
    {notWordModal && (
      <NotWordModal>
        Word not in list
      </NotWordModal>
    )}
    {hardModeError.val && (
      <HardModeErrorModal>
        Invalid Guess for Hard Mode: {hardModeError.reason}
      </HardModeErrorModal>
    )}
    <BoardComp style={{"paddingTop": notWordModal || hardModeError.val ? "20px" : "50px"}}>
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
    </>
  );
}

export default Board;
