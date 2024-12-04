// CSS
import './App.css';

// React hooks
import { useCallback, useEffect, useState } from 'react';

// Data
import { wordsList } from './data/words';

// Componentes
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList);

  // Starts the secret word game
  const startGame = () => {
    setGameStage(stages[1].name);
  };

  // Process the latter input
  const verifyLatter = () => {
    setGameStage(stages[2].name);
  };

  // Game-over, restart process
  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && <Game verifyLatter={verifyLatter}/>}
      {gameStage === 'end' && <GameOver retry={retry}/>}
    </div>
  );
}

export default App;
