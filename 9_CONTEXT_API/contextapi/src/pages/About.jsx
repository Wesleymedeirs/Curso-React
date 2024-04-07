import { useContext } from "react"
import { ContadorContext } from "../context/ContadorContext"
import { useTitleColorContext } from "../hooks/useTitleColorContext"

const About = () => {
  const {counter,setCounter} = useContext(ContadorContext)

  const {color} = useTitleColorContext()
  return (
    <div>
      <h1 style={{color: color}}>Sobre</h1>
{/*Esse valor está lá no  */}

      <p>Valor do contador: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Add valor ao contador</button>
    </div>
  )
}

export default About
