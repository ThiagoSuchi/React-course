// Componentes
import CarDetails from './components/CarDetails.js';
// Styles
import './App.css';

function App() {
  const carros = [
    { id: 1, brand: "Ferrari", color: "Vermelho", age: 2019, km: 10000 },
    { id: 2, brand: "Porsche 911", color: "Preto", age: 2023, km: 28000 },
    { id: 3, brand: "Audi r8", color: "Branco", age: 2023, km: 42690 },
    { id: 4, brand: "Bugatti", color: "Vermelho vinho", age: 2020, km: 20000,},
  ];

  return (
    <div className="App">
      <h1>Tab <span>Cars</span></h1>
      {carros.map((car) => (
        <CarDetails 
            key={car.id} 
            brand={car.brand} 
            color={car.color}
            age={car.age}
            km={car.km}
        />
      ))}
    </div>
  );
};

export default App;
