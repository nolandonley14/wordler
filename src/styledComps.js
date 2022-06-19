import styled from 'styled-components';

export const AppDiv = styled.div`
  text-align: center;
  background-color: ${(p) => p.theme.colorBackground};
  width: 100vw;
  height: 100vh;
  color: ${(p) => p.theme.colorText};
`;

export const Game = styled.div`
  width: 100vw;
  height: calc(100vh - 170px);
  display: flex;
  align-items: center;
  flex-direction: column;
`;
