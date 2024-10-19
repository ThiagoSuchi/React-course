export const AddingNumbers = () => {
    const a = 12
    const b = 8

    const adding = (number1, number2) => {
        number1 = a
        number2 = b
        let sum = number1 + number2
        console.log(`O resultado da soma é ${sum}`);
    }
    
    return (
        <div>
            <h1>Jogo da soma: {a} + {b}</h1>
            <button onClick={adding}>Somar</button>
        </div>
    )

}