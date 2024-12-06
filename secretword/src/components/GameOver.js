import "./GameOver.css";

const GameOver = ({ retry }) => {
  return (
    <div>
      <h1>Game Over</h1>
      <h3>Você ultilizou todas as tentativas!</h3>
      <button onClick={retry}>Jogar novamente</button>
    </div>
  )
}

export default GameOver