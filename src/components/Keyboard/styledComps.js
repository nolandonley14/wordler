import styled from 'styled-components';

export const KeyboardComp = styled.div`
  max-width: 700px;
  width: 80vw;
  height: 200px;
  margin-top: 60px;
`;

export const Line = styled.div`
  flex: 33%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 3px 0;
`;

export const KeyComp = styled.div`
  min-width: 35px;
  max-width: 100px;
  width: 4vw;
  max-height: 70px;
  min-height: 50px;
  height: 5vw;
  margin: 2px;
  border-radius: 4px;
  display: grid;
  place-items: center;
  font-size: 20px;
  background-color: ${(p) => p.theme.colorRegular};
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
`;

export const CorrectKey = styled.div`
  min-width: 35px;
  max-width: 100px;
  width: 4vw;
  max-height: 70px;
  min-height: 50px;
  height: 5vw;
  margin: 2px;
  border-radius: 4px;
  display: grid;
  place-items: center;
  font-size: 20px;
  background-color: ${(p) => p.theme.colorCorrect};
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
`;

export const AlmostKey = styled.div`
  min-width: 35px;
  max-width: 100px;
  width: 4vw;
  max-height: 70px;
  min-height: 50px;
  height: 5vw;
  margin: 2px;
  border-radius: 4px;
  display: grid;
  place-items: center;
  font-size: 20px;
  background-color: ${(p) => p.theme.colorAlmost};
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
`;

export const DisabledKey = styled.div`
  min-width: 35px;
  max-width: 100px;
  width: 4vw;
  max-height: 70px;
  min-height: 50px;
  height: 5vw;
  margin: 2px;
  border-radius: 4px;
  display: grid;
  place-items: center;
  font-size: 20px;
  background-color: ${(p) => p.theme.colorWrong};
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
`;

export const BigKey = styled.div`
  max-width: 100px;
  width: 7vw;
  min-width: 60px;
  max-height: 70px;
  min-height: 50px;
  height: 5vw;
  margin: 2px;
  border-radius: 4px;
  display: grid;
  place-items: center;
  font-size: 20px;
  background-color: ${(p) => p.theme.colorRegular};
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
`;
