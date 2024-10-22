// irmportando o hook useState
import {useState} from 'react';

// ==> Estudando sobre hooks com (useSate())
const ManageData = () => {
 const [number, setNumber] = useState(10);

  return (
    <div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(15)}>Mudar variável</button>
        </div>
    </div>

  )
}

export default ManageData