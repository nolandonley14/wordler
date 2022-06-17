import './App.css';
import Board from "./components/Board/Board";
import Keyboard from './components/Keyboard/Keyboard';
import GameOver from './components/GameOver/GameOver';
import Navbar from './components/Navbar/Navbar';
import StatsModal from './components/Stats/StatsModal';
import { DataProvider } from './Context/appContext';
import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { dark, light } from './theme/themes.js';
import { AppDiv, Game } from './styledComps';

const useLocalStorage = (storageKey, fallbackState) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};

function App() {
    localStorage.clear();
    const [gameMode, setGameMode] = useLocalStorage("gameMode", "daily");
    const [theme, setTheme] = useLocalStorage("theme", "dark");

    return (
      <ThemeProvider theme={theme == "dark" ? dark : light}>
        <AppDiv>
          <DataProvider>
            <StatsModal />
            <Navbar curTheme={theme} changeTheme={setTheme}/>
              <Game>
                <Board />
                <Keyboard />
              </Game>
          </DataProvider>
        </AppDiv>
      </ThemeProvider>
    );
  }

export default App;
