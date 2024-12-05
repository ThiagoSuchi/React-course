import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Bora jogar? ⬇️Clique no botão abaixo⬇️</p>
      <button onClick={startGame}>Iniciar</button>
    </div>
  );
};

export default StartScreen;
