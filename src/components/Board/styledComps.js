import styled from 'styled-components';

export const BoardComp = styled.div`
  width: 420px;
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
  width: 64px;
  height: 64px;
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
  width: 64px;
  height: 64px;
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
  width: 64px;
  height: 64px;
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
  width: 64px;
  height: 64px;
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