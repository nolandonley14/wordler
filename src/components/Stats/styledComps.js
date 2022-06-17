import styled from 'styled-components';

export const BG = styled.div`
  position: fixed;
  width: 100%;
  height:100%;
  background: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Stats = styled.div`
  width: 28rem;
  height: 36em;
  background-color: ${(p) => p.theme.colorBackground};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const StatsTitle = styled.div`
  font-size: 2rem;
  color: ${(p) => p.theme.colorText};
`;

export const StatsRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px;
`;

export const StatsItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
`;

export const StatItemValue = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: bold;
  color: ${(p) => p.theme.colorText};
`;

export const StatItemName = styled.h4`
  margin: 0;
  padding: 0;
  font-weight: normal;
  color: ${(p) => p.theme.colorText};
`;

export const Visuals = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const GuessView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 1rem;
  width: 75%;
`;

export const GuessRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const GuessTop = styled.h1`
  border-bottom: ${(p) => `1px solid ${p.theme.colorText}`};
  padding-bottom: 0.5rem;
  font-size: 16px;
  margin: 0;
  color: ${(p) => p.theme.colorText};
`;

export const GuessBottom = styled.h1`
  border-top: ${(p) => `1px solid ${p.theme.colorText}`};
  padding-top: 0.5rem;
  font-size: 16px;
  margin: 0;
  color: ${(p) => p.theme.colorText};
`;

export const Chart = styled.div`
  width: 50%;
`;
