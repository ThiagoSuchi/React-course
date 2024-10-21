// Componentes
import ManageData from './components/ManageData';
import './App.css';
// Imagem importada do assets
import Riu from "./assets/StreetFt.jpg"


function App() {
  return (
    <div className="App">
        <h1>Realizando desafio!</h1>
        <p>Dado pelo curso, afim de testar se aprendi a baixar e configurar todo o react</p>
        
        {/* Adicionando imagem do public */}
        <div>
          <img src="/Agnuz.jpg" alt="agnuz-img" />
        </div>
        {/* Imagem em assets */}
        <div>
          <img src={Riu} alt="StretFighter" />
        </div>
        <ManageData/>
    </div>
  );
}

export default App;
