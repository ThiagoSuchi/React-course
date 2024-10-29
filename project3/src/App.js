// Componentes
import ManageData from './components/ManageData';
import { ConditionalRender } from './components/ConditionalRender';

// Styles
import './App.css';

// Imagem importada do assets
import Riu from "./assets/StreetFt.jpg"
import ListRender from './components/ListRender';


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
        <ListRender/>
        <ConditionalRender/>
    </div>
  );
}

export default App;
