
const AlterarMensagem = ({handleMensage}) => {

    const mensagens = ['Oi', 'Olá!', 'Hello','Show', 'Tudo bem?','']

  return (
    <div>
        <button onClick={() => handleMensage(mensagens[0])}>1</button>
        <button onClick={() => handleMensage(mensagens[1])}>2</button>
        <button onClick={() => handleMensage(mensagens[2])}>3</button>
        <button onClick={() => handleMensage(mensagens[3])}>4</button>
        <button onClick={() => handleMensage(mensagens[4])}>5</button>
        <button onClick={() => handleMensage(mensagens[5])}>X</button>
    </div>
  )
}

export default AlterarMensagem