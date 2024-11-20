import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from "react";
import Title from './components/Title';

function App() {
  const n = 12;
  const [name] = useState("Isabelle")
  const redName = true

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      <p>Esse é o parágrafo do pai!</p>
      {/* CSS do componente */}
      <MyComponent/>
      {/* Inline CSS */}
      <p style={{color: "blue", padding: "25px", border: "2px solid red"}}>
        Este elemento foi estilizado de forma inline
      </p>
      {/* Inline css dinâmico */}
      <h2 style={n > 10 ? {color: "green"} : {color: "grey"}}>Css dinâmico</h2>
      <h2 style={n < 10 ? {color: "green"} : {color: "grey"}}>Css dinâmico</h2>
      <p style={
        name === "Isabelle" 
          ? {color: "white", backgroundColor: "grey"}
          : null
        }>
     {name}</p>
     {/* Classe dinâmica */}
     <h2 className={ redName ? "red-title" : "title"}>Este é um h2 para testar classe dinâmica</h2>
     <h2 className={!redName ? "red-title" : "title"}>Este é um h2 para testar classe dinâmica</h2>
     {/* Css module */}
     <Title/>
    </div>
  );
}

export default App;
