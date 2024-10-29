import { useState } from "react"

 export function ConditionalRender() {
    const [x] = useState(true)

    const [nome, setName] = useState("Matheus")

    return (
    <div>
        <h1>Isso será exibido?</h1>

        {/* Esse é a condicional mais simples do React! */}
        {x && <p>Se x for true, sim!</p>}
        
        {/* Agora o x se tornou false, devido ao ! */}
        {!x && <p>Agora o x é falso!</p>}

        {/* Condição ternário */}
        <h1>Condição ternário</h1>
        {nome === "João" ? (
            <div>
                <p>Seja bem-vindo João</p>
            </div>
        ) : (
            <div>
                <p>Ops! parece que você não é o João, acesso negado!</p>
            </div>
        )}
        {/* Re-rederizando componente com button */}
        <button onClick={() => setName('João')}>Clique aqui!</button>
    </div>
  )
}

