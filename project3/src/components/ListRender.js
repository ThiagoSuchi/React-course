import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(['Douglas', 'Maria', 'Laura', 'Lavinia', 'Lucas', 'Matheus'])

    const [users, setUsers] = useState([// estrutura padrão do hook useState
        {id: 1, name: 'Thiago', age: 21},
        {id: 2, name: 'Kauan', age: 20},
        {id: 3, name: 'Amanda', age: 22}
    ]);

    const deletarRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        // "Previous state" é o valor do estado antes de mudar.
        setUsers((prevUsers) => {// (prevUsers) é o Previous state
            console.log(prevUsers);
            return prevUsers.filter((user) => randomNumber !== user.id);
        });// Esse código remove da lista users o usuário cujo id é igual ao valor de randomNumber.
    };

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
            <button onClick={deletarRandom}>Delete Random</button>
        </div>
       
    )

}

export default ListRender