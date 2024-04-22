import {useState} from 'react'

const HookUseState = () => {
//  Aula 1 - useState
    let userName = 'Wendell'

    const [name, setName] = useState('Wesley')


    const changeNames = () => {
        userName = 'teste'

        setName('teste useState')
    }

    //Aula 2 - useState e input
    const [age, setAge] = useState(18)

    const hundleSubmit = (e) => {
        e.preventDefault()

        //Envio a API
        console.log(age)
    }
  return (
    <div>
      {/* Aula 1 - useState */}
      <h2>useState</h2>
    <p>Variável: {userName}</p>
    <p>useState: {name}</p>
    <button onClick={changeNames}>Mudar nomes</button> 

    {/*Aula 2 - useState e input */}
   <form onSubmit={hundleSubmit}> 

   <label>
    Digite sua idade: 
   <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
   </label>
   <input type="submit" value='Enviar'/>
   </form>
   <p>Você tem {age} anos!</p>
      <hr />
      
    </div>
  )
}

export default HookUseState
