import "./ColorTitle.css"

import { useTitleColorContext } from "../hooks/useTitleColorContext"

const ColorTitle = () => {
  // 5 - contexto mais complexo
  const { color, dispatch } = useTitleColorContext();

  // 6 - alterando contexto complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  }

  return (
    <div>
      <h1 style={{ color: color }}>Color Title</h1>
      {/* 6 - alterando contexto complexo */}
      <div className="btnColor">
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
        <button onClick={() => setTitleColor("GREEN")}>Verde</button>
        <button onClick={() => setTitleColor("PURPLE")}>Roxo</button>
        <button onClick={() => setTitleColor("ORANGE")}>Laranja</button>
        <button onClick={() => setTitleColor("TEAL")}>Verde-Água</button>
        <button onClick={() => setTitleColor("GRAY")}>Cinza</button>
        <button onClick={() => setTitleColor("YELLOW")}>Amarelo</button>
        <button onClick={() => setTitleColor("PINK")}>Rosa</button>
      </div>
    </div>
  )
}

export default ColorTitle;