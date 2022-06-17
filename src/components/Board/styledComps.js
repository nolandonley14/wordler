import styled from 'styled-components';

export const Board = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  flex: 33%;
  display: flex;
  flex-direction: row;
  margin: 5px;
`;

export const LetterComp = styled.div`
  flex: 33%;
  height: 100%;
  border: ${(p) => `1px solid ${p.theme.colorWrong}`};
  margin: 5px;
  display: grid;
  place-items: center;
  font-size: 30px;
  font-weight: bolder;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
`;

export const CorrectLetter = styled.div`
  flex: 33%;
  height: 100%;
  border: ${(p) => `1px solid ${p.theme.colorWrong}`};
  margin: 5px;
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
  height: 100%;
  border: ${(p) => `1px solid ${p.theme.colorWrong}`};
  margin: 5px;
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
  height: 100%;
  border: ${(p) => `1px solid ${p.theme.colorWrong}`};
  margin: 5px;
  display: grid;
  place-items: center;
  font-size: 30px;
  font-weight: bolder;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  background-color: ${(p) => p.theme.colorWrong};
`;
