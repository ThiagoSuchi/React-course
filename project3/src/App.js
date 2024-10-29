// Componentes
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import { ConditionalRender } from './components/ConditionalRender';
import { ShowUserName } from './components/ShowUserName';

// Styles
import './App.css';

// Imagem importada do assets
import Riu from "./assets/StreetFt.jpg"

// useState
import { useState } from 'react';
import { CarsDetails } from './components/CarsDetails';


function App() {
  const [Name] = useState('Maria')

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
        {/* Props */}
        <ShowUserName name={Name}/>
        {/* Destructuring */}
        <CarsDetails brand="Fiat" km={27.000}/>
    </div>
  );
}

export default App;
