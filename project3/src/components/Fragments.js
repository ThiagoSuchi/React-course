import React from 'react'
/*  
    Fragment é um componente especial que permite agrupar múltiplos elementos JSX sem adicionar 
nenhum elemento extra ao DOM. Ele é útil quando você quer retornar mais de um elemento a partir 
de um componente, mas não quer introduzir uma <div> ou outro contêiner que afetaria a estrutura 
ou o estilo da página.
*/
const Fragments = ({propFragment}) => {
  return (
    <>
        <h2>Primeiro título</h2>
        <h3>Segundo título</h3>
        <h4>{propFragment}</h4>
    </>
  )
}

export default Fragments