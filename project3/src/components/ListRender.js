import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(['Douglas', 'Maria', 'Laura', 'Lavinia', 'Lucas', 'Matheus'])
    return (
        <div>
            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )

}

export default ListRender