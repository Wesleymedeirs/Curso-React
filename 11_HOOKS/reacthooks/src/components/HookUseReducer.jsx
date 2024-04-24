import { useReducer, useState } from 'react'

const HookUseReducer = () => {
  //Aula 1 - Começando com o useReducer

  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state)
  })

  //Aula 2 - Avançando em useReducer
  const tarefaInicial = [
    { id: 1, text: 'Fazel o café' },
    { id: 2, text: 'Fazel o almoço' },
    { id: 3, text: 'Fazel o Janta' },
  ]

  const tarefasReducer = (state, action) => {

    switch (action.type) {
      case 'ADD':
        const novaTarefa = {
          id: Math.random(),
          text: textTarefas
        }

        setTextTarefas('')

        return [...state, novaTarefa]

      case 'DELETE':
        return state.filter((taref) => taref.id !== action.id)
      default:
        return state
    }

  }


  const [textTarefas, setTextTarefas] = useState('')
  const [tarefas, dispatchTarefas] = useReducer(tarefasReducer, tarefaInicial)


  const hundleSubmit = (e) => {
    e.preventDefault()

    dispatchTarefas({ type: 'ADD' })

  }

  const removeTarefa = (id) => {
    dispatchTarefas({ type: 'DELETE', id })
  }

  return (
    <div>
      <h2>useReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Alterar número</button>
      <h3>Tarefas:</h3>
      <form onSubmit={hundleSubmit}>
        <input type="text" onChange={(e) => setTextTarefas(e.target.value)} value={textTarefas} />
        <input type="submit" value='Enviar' />
      </form>
      {tarefas.map((tarefa) => (
        <li key={tarefa.id} onDoubleClick={() => removeTarefa(tarefa.id)}>{tarefa.text}</li>
      ))}
      <hr />
    </div>
  )
}

export default HookUseReducer
