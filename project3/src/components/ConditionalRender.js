import { useState } from "react"

 export function ConditionalRender() {
    const [x] = useState(false)

    return (
    <div>
        <h1>Isso será exibido?</h1>
        {/* Esse é a condicional mais simples do React! */}
        {x && <p>Se x for true, sim!</p>}
        {/* Agora o x se tornou false, devido ao ! */}
        {!x && <p>Agora o x é falso!</p>}
    </div>
  )
}

