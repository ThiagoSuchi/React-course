// Componentes
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import { ConditionalRender } from './components/ConditionalRender';
import { ShowUserName } from './components/ShowUserName';
import Fragments from './components/Fragments';
import Container from './components/Container';

// Styles
import './App.css';

// Imagem importada do assets
import Riu from "./assets/StreetFt.jpg"

// useState
import { useState } from 'react';
import { CarsDetails } from './components/CarsDetails';
import ExecutarFunction from './components/ExecutarFunction';
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';



function App() {
  const [Name] = useState('Maria'); 

  const cars = [
    {id: 1, brand: 'Ferrari', color: 'Vermelho', newCar: true, km: 0},
    {id: 2, brand: 'Porsche 911', color: 'Preto', newCar: true, km: 0},
    {id: 3, brand: 'Audi r8', color: 'Branco', newCar: true, km: 0},
    {id: 4, brand: 'Bugatti', color: 'Vermelho vinho', newCar: false, km: 20000},
    {id: 5, brand: 'Mustang GT Performance', color: 'Azul algarve', newCar: false, km: 55000},
  ]
  
  function showMessage() {
    console.log('Evento componente pai!');
  }

  const [message, setMessage] = useState("")
  
  const handleMessage = (msg) => {
    setMessage(msg);
  }

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
        {/* Destructuring em props*/}
        <CarsDetails brand="Fiat" km={27000} newCar={false}/>
        {/* Reaproveitando componente */}
        <CarsDetails brand="Ford" color="Azul" km={0} newCar={true}/>
        <CarsDetails brand="Chevrolet" color="Branco" km={10800} newCar={false}/>
        {/* Renderização de lista em componente */}
        {cars.map((car) => (
          <CarsDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
        ))}
        {/* Fragments */}
        <Fragments propFragment="Teste"/>
        {/* Children */}
        <Container myValue="My testing">
            <h1>Este é o conteúdo</h1>
        </Container>
        <Container myValue="My testing 2">
            <h5>Esse é o teste dois</h5>
        </Container>
        {/* Function como prop */}
        <ExecutarFunction myMessage={showMessage}/>
        {/* State lift */}
        <Message msg={message}/>
        <ChangeMessage handleMessage={handleMessage}/>
    </div>
  );
}

export default App;
