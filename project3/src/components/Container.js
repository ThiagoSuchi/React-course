import React from 'react'

const Container = ({ children, myValue }) => {
  return (
    <div>
        <h1>Este é o título do Container</h1>
        {children}
        <p>Descrição: {myValue}</p>
    </div>
  )
}
/* 
children é uma propriedade especial que permite passar conteúdo (como elementos JSX, 
texto ou outros componentes) de um componente pai para um componente filho. 
*/

export default Container