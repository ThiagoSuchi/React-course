// Destructuring (ou desestruturação) em props é uma técnica em JavaScript, especialmente no contexto do React, que permite extrair valores de objetos e arrays de forma mais concisa e legível. 

import { useState } from "react"

export const CarsDetails = ({brand, km, color = "Preto", newCar}) => {
// Ao invés de acessar as props através do objeto props, você pode desestruturar as propriedades desejadas diretamente nos parâmetros da função do componente.
  const [kmCarro] =  useState(km) 

  return (
    <div>
        <h1>Detalhes do carro</h1>
        <ul>
            <li>Marca: {brand} </li>
            <li>KM: {km}</li>
            <li>Color: {color}</li>
        </ul>
        {kmCarro > 0 ? (
            <p>Descrição: O carro é usado, {km}km rodados</p>
          ) : (
            <p>Descrição: O carro é novo, 0km!</p>
          )}
    </div>
  )
}

// OBS - Se uma prop não for passada, você pode fornecer um valor padrão ao desestruturar:
/* 
Exemplo:

const Greeting = ({ name = "Visitante" }) => {
    return <h1>Olá, {name}!</h1>;
};

*/
  
