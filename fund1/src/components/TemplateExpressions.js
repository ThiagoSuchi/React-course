const TemplateExpression = () => {
    const nome = 'Theusin Becker'
    const infoPessoa = {
        idade: 21,
        cargo: 'Dev Front-end'
    }
    const soma = 2+2
    
    return (
        <div>
            <h2>Fala rapaziadaa, sou o {nome}</h2>
            <p>sobre mim:</p>
            <p>- idade: {infoPessoa.idade}</p>
            <p>- cargo: {infoPessoa.cargo}, {soma}</p>
        </div>
    )
}

export default TemplateExpression;