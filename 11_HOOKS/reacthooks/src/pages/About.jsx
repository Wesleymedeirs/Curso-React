//Context
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'

const About = () => {
  const {contextValue} = useContext(SomeContext)
  const {contextValue2} = useContext(SomeContext)

  return (
    <div>
      <div>Sobre</div>
      <h2>useContext</h2>
      <p>Valor do context: {contextValue}</p>
      <p>Valor do context: {contextValue2}</p>
    </div>
  )
}

export default About
