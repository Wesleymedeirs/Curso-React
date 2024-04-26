//CSS
import styles from './App.module.css'

//components
import Footer from './components/Footer'
import Header from './components/Header'
import TaksForm from './components/TaksForm'
import TaskList from './components/TaskList'

function App() {


  return (
    <div>
      {/*CABERÇALHO */}
      <Header />

      <main className={styles.main}>

        <div>
          <h2>O que você vai fazar?</h2>
          {/*btnText foi passado por props no component TaksForm */}
          <TaksForm btnText='Criar Tarefa'/>
        </div>

        <div>
          <h2>Suas tarefas:</h2>
          <TaskList/>
        </div>

      </main>
      {/*RODAPÉ */}
      <Footer />
    </div>
  )
}

export default App
