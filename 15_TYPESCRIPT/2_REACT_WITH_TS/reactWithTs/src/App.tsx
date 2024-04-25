import './App.css'
import { useState, createContext } from 'react';
import FirstComponent, { Category } from './components/FirstComponent';
import State from './components/State';
//Aula 10 - Utilizando context
import Context from './components/Context';

//Aula 9 - context
interface IAppContext {
  language: string,
  framework: string,
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {

  // Aula 1 - Variáveis 
  const name: string = 'Wesley';
  const dn: number = 26;
  const isWorking: boolean = true;

  const [num, setNum] = useState(0)

  //Aula 9 - type

  type textOrNull = string | null

  type fixed = 'Isso' | 'Ou' | 'aquilo'

  //Aula 2 - Funções

  const nome2 = (name: string): string => {
    return `Olá, ${name}`
  }

  const hundleCounter = () => {
    setNum(num + 1)
  }

  const myText: textOrNull = 'Tem algum texto aqui'
  let mySecondText: textOrNull = null

  mySecondText = 'teste'

  //Aula 9 - Context

  const contextValue: IAppContext = {
    language: 'JavaScript',
    framework: 'Express',
    projects: 5
  }



  return (
    <AppContext.Provider value={contextValue}>
      <div>
        <h1>TypeScript com React</h1>
        <h1>Variáveis e functions</h1>
        <p>O nome é: {name}</p>
        <p>Idade: {dn}</p>
        {isWorking ? <p>Está trabalhando</p> : <p>Não Esta trabalhando</p>}
        <p>{nome2(name)}</p>
        <button onClick={hundleCounter}>Contar {num}</button>
        <hr />
        <FirstComponent name='Wesley'
          title='Primeiro post'
          content='Descrição do post'
          commentsQty={10}
          tags={['TypeScript', 'Java', 'PHP']}
          category={Category.TS}
        />
        <FirstComponent name='Wesley'
          title='Segundo post'
          content='Descrição do post'
          commentsQty={1022}
          tags={['Python', 'MongoDB', 'Postman']}
          category={Category.P}
        />
        <State />

        {
          myText && <p>Tem texto na variável!</p>
        }
        {
          mySecondText && <p>Tem texto na segunda variável!</p>
        }
        <Context />
      </div>
    </AppContext.Provider>

  )
}

export default App
