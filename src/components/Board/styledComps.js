import styled from 'styled-components';

export const BoardComp = styled.div`
  width: 390px;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  flex: 33%;
  display: flex;
  flex-direction: row;
`;

export const LetterComp = styled.div`
  flex: 33%;
  width: 59px;
  height: 59px;
  border: ${(p) => `1px solid ${p.theme.colorWrong}`};
  margin: 3px;
  display: grid;
  place-items: center;
  font-size: 30px;
  font-weight: bolder;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
`;

export const CorrectLetter = styled.div`
  flex: 33%;
  width: 59px;
  height: 59px;
  border: ${(p) => `1px solid ${p.theme.colorWrong}`};
  margin: 3px;
  display: grid;
  place-items: center;
  font-size: 30px;
  font-weight: bolder;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  background-color: ${(p) => p.theme.colorCorrect};
`;

export const AlmostLetter = styled.div`
  flex: 33%;
  width: 59px;
  height: 59px;
  border: ${(p) => `1px solid ${p.theme.colorWrong}`};
  margin: 3px;
  display: grid;
  place-items: center;
  font-size: 30px;
  font-weight: bolder;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  background-color: ${(p) => p.theme.colorAlmost};
`;

export const DisabledLetter = styled.div`
  flex: 33%;
  width: 59px;
  height: 59px;
  border: ${(p) => `1px solid ${p.theme.colorWrong}`};
  margin: 3px;
  display: grid;
  place-items: center;
  font-size: 30px;
  font-weight: bolder;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  background-color: ${(p) => p.theme.colorWrong};
`;

export const NotWordModal = styled.div`
  background-color: ${(p) => p.theme.colorText};
  color: ${(p) => p.theme.colorBackground};
  padding: 10px;
  border-radius: 10px;
  font-size: 16px;
  margin-top:20px;
`;

export const HardModeErrorModal = styled.div`
  background-color: ${(p) => p.theme.colorText};
  color: ${(p) => p.theme.colorBackground};
  padding: 10px;
  border-radius: 10px;
  font-size: 16px;
  margin-top:20px;
`;
