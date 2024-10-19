import { MyComponents } from "./MyComponents";

// Outro comentario no escopo global
const FirstComponent = () => {
// Outro comentário
    return (
        <div>
            {/* Qualquer comentario */}
            <h2>Meu primeiro componente</h2>
            <MyComponents/>
        </div>
    )

}

export default FirstComponent;