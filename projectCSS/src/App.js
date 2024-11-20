import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      <p>Esse é o parágrafo do pai!</p>
      {/* CSS do componente */}
      <MyComponent/>
      {/* Inline CSS */}
      <p style={{color: "blue", padding: "25px", border: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>
    </div>
  );
}

export default App;
