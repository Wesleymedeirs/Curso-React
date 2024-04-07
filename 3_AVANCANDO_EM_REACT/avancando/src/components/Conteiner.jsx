//Adicionando {children} dentro do parametros ele pega o conteúdo das informações
const Conteiner = ({children,myValue}) => {
  return (
    <div>
        <h2>Esse é o titulo do container</h2>
        {children}
        <p>Meu valor é: {myValue}</p>
    </div>
  )
}

export default Conteiner