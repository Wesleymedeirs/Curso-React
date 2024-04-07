const Challenge = () => {

    const valor1 = 3;
    const valor2 = 3;
    const soma = valor1 + valor2;

    const Soma = () => {
        console.log(`A soma entre os valor ${valor1} e ${valor2} é ${soma}`)
    }

    return (
        <div>
            <h2>Os valores da soma é {valor1} e {valor2} = {soma}</h2>
            <button onClick={Soma}>Resultado no cosole.log</button>
        </div>
    )
}
export default Challenge;