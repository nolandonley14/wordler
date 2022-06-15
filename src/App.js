import './App.css';
import Board from "./components/Board/Board";
import Keyboard from './components/Keyboard/Keyboard';
import GameOver from './components/GameOver/GameOver';
import Navbar from './components/Navbar/Navbar';
import StatsModal from './components/Stats/StatsModal';
import { DataProvider } from './Context/appContext';
import { useState, useEffect } from 'react';

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

    return (
      <div className="App">
          <DataProvider>
            <StatsModal />
            <Navbar />
              <div className="game">
                <Board />
                <GameOver />
                <Keyboard />
              </div>
          </DataProvider>
      </div>
    );
  }

export default App;
