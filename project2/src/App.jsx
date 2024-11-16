// Components
import UserDatails from './components/UserDatails'
// Styles
import './App.css'

function App() {

  const pessoas = [
    {id: 1, name: "Luanda Gomes Freitas", age: 17, job: "Web Developer - Fulltec LTDA"},
    {id: 2, name: "Ana Clara", age: 25, job: "Frentista - Posto Santo Augostinho"},
    {id: 3, name: "Marcos Almeida Souza", age: 30, job: "Gerente - Luizinho Motos"},
    {id: 4, name: "Túlio Becker Alonso", age: 18, job: "Designer Gráfico - WillTecnology"},
  ]

  return (
    <div>
      <h1>Validador de Habilitação</h1>
      {pessoas.map((info) => (
        <UserDatails 
        key={info.id} 
        name={info.name} 
        age={info.age}
        job={info.job}/>
        ))}
    </div>
  )
}

export default App
