// Esses dois imports aqui não precisa quano tme hooks
//import { useContext } from "react"
//import { ContadorContext } from "../context/ContadorContext"

//HOOKS
// Aula 4 - Refatornado e adicionando o hook
import { useCounterContext } from "../hooks/useCounterContext" //importnao o hook criado
//Importando o contxt mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext"


import ChangeContador from "../components/ChangeContador"



const Home = () => { 

  //const {counter} = useContext(ContadorContext) < dessa forma utiliza se não tiver hook
  const {counter} = useCounterContext() //Chamdno a variável que quarda o valor
  const {nome} = useCounterContext()

//aULA 5 - Contexto mais complexos
  const {color, dispatch} = useTitleColorContext()

  //Aula 6 - Alterando state completo
  const setTitleColor = (color) => {
    dispatch({ type: color})
  }

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>      
      <p>Valor do contador: {counter}</p>
      <p>O nome é: {nome}</p>
      {/*Alterando o valor do contexto */}
      <ChangeContador/>

      {/*Aula 6 - Alterando contexto complexo */}

      <div>
        <button onClick={() => setTitleColor('RED')}>Vermelho</button>
        <button onClick={() => setTitleColor('BLUE')}>Azul</button>
      </div>

      <p>Context = serve para o compartilhamento da mesmo componente aproveitando os mesmos dados</p>
    </div>
  )
}
export default Home
