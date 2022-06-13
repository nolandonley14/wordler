import './App.css';
import Board from "./components/Board/Board";
import PracticeBoard from "./components/Board/PracticeBoard";
import Keyboard from './components/Keyboard/Keyboard';
import PracticeKeyboard from './components/Keyboard/PracticeKeyboard';
import GameOver from './components/GameOver/GameOver';
import PracticeGameOver from './components/GameOver/PracticeGameOver';
import Navbar from './components/Navbar/Navbar';
import { DataProvider } from './Context/appContext';
import { useState, useEffect } from 'react';

const useLocalStorage = (storageKey, fallbackState) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
    console.log(value, storageKey);
  }, [value, storageKey]);

  return [value, setValue];
};

function App() {
  //localStorage.clear();
  const [gameMode, setGameMode] = useLocalStorage("gameMode", "daily");

    return (
      <div className="App">
          <DataProvider>
            <Navbar mode={gameMode} modeHandler={setGameMode} />
            <div className="game">
              {gameMode === "daily" ? (<Board />) : (<PracticeBoard />)}
              {gameMode === "daily" ? (<GameOver />) : (<PracticeGameOver />)}
              {gameMode === "daily" ? (<Keyboard />) : (<PracticeKeyboard />)}
            </div>
          </DataProvider>
      </div>
    );
  }

export default App;
