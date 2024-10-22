import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(['Douglas', 'Maria', 'Laura', 'Lavinia', 'Lucas', 'Matheus'])

    const [users] = useState([
        {id: 1, name: 'Thiago', age: 21},
        {id: 72378423, name: 'Kauan', age: 20},
        {id: 8328823, name: 'Amanda', age: 22}
    ]);

    // OBS: O uso correto de key melhora o desempenho e evita renderizações desnecessárias e problemas com o estado local dos componentes.
    return (
        // A key é usada para garantir que o React identifique de forma eficiente cada item de uma lista.
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {/* O user.id é escolhido como key porque é um identificador único e estável para cada usuário. */}
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
        </div>

    
           
       
    )

}

export default ListRender