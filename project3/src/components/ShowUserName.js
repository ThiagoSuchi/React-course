// As props (abreviação de "properties") são um mecanismo que permite passar dados de um componente pai para um componente filho. Elas são fundamentais para a construção de componentes reutilizáveis e a gestão do estado em aplicações React.
export const ShowUserName = (props) => {
  return (
    <div>
        <h3>O nome sorteado é: {props.name} </h3>
    </div>
  )
}

// OBS: O componente filho não pode alterar as props que recebe do componente pai em React. As props são imutáveis e devem ser tratadas como dados de entrada que influenciam o comportamento e a aparência do componente, mas que não podem ser modificados diretamente por ele.

