import './Cart.css';
import { useParams } from "react-router-dom"

const Cart = () => {
    const { id } = useParams()

    return (
        <div>
            <h1>Produtos adicionados ao carrinho: {id}</h1>
        </div>
    )
}

export default Cart