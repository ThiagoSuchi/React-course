export const Events = () => {

    const handleMyEvent = (Event) => {
        console.log(Event);
        console.log('Ativado!');
    }
    // É possível também colocar JSX(JavaScript XML) fora do return, como podemos ver logo abaixo:
    const renderSomething = (X) => {
        if(X)  {
            return <p>Renderizando isso! Pois o valor é true.</p>
        }else {
            return <p>Renderizando este outro! Pois o valor é false.</p>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}> Clique aqui</button>
            </div>
            <div>
                {/*Uma função dentro de um evento não é o recomendado, mas para funções simples este ato pode ser adotado */}
                <button onClick={() => console.log('Clicou!')
                }>Clique aqui também!</button>
            </div>
            <div>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </div>
    )

}