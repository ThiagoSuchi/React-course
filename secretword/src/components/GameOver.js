import "./GameOver.css";

const GameOver = ({ retry, score }) => {
  return (
    <div>
      <h1>Fim de Jogo!</h1>
      <h3>Você ultilizou todas as tentativas</h3>
      <p>A sua pontuação foi: <span>{score}</span></p>
      <button onClick={retry}>Jogar novamente</button>
    </div>
  )
}

export default GameOver