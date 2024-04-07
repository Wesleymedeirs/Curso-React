import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Aguardando clique');

  // const somar =() => {
  //   setCount(count + 1)
  // }
  
  return (
    
    <>
      <h1>Curso React 2024</h1>      

      <div>
        <img src="https://img.freepik.com/vetores-premium/abstrato-religioso-eid-mubarak-fundo-islamico_1055-6786.jpg?w=826" 
        alt="150" height={200} title='FreePik'/>
      </div>
      <div className="card">
        <button onClick={() =>  
          setCount((count) => 
          count + 1)}>
          count é: {count}
        </button>
      </div>

      <div>
        <button onClick={() => setName('Clicou')}>Nome aqui: {name}</button>
      </div>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
