//CSS
import styles from './App.module.css'

import { useState, useEffect } from 'react'

//interfaces
import { ITask } from './interfaces/Taks'

//components
import Footer from './components/Footer'
import Header from './components/Header'
import TaksForm from './components/TaksForm'
import TaskList from './components/TaskList'
import Modal from './components/Modal'

function App() {

  const [taskList, setTaskList] = useState<ITask[]>(()=> {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      return JSON.parse(savedTasks);
    }else{
      return []
    }
  })
  //state para guardar valor da edição
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)
  
  useEffect(() => {
    // Salvar dados no localStorage sempre que a lista de tarefas for atualizada
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }, [taskList]);

  console.log(taskList)

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      })
    )
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector('#modal')
    if (display) {
      modal!.classList.remove('hide')
    } else {
      modal!.classList.add('hide')
    }
  }

  const editTask = (task: ITask): void => {
    hideOrShowModal(true)
    setTaskToUpdate(task)

  }

  const updateTask = (id: number, title: string, difficulty: number) => {

    const updateTask: ITask = { id, title, difficulty }

    const updatedItems = taskList.map((task) => {
      return task.id === updateTask.id ? updateTask : task
    })

    setTaskList(updatedItems)

    hideOrShowModal(false)
  }

  return (
    <div>
      {/*Modal de edicação */}
      <Modal children={<TaksForm btnText='Editar tarefa' taksList={taskList} task={taskToUpdate} hundleUpdate={updateTask} />} />
      {/*CABERÇALHO */}
      <Header />

      <main className={styles.main}>

        <div>
          <h2>O que você vai fazar?</h2>
          {/*btnText foi passado por props no component TaksForm */}
          <TaksForm btnText='Criar tarefa'
            taksList={taskList}
            setTaskList={setTaskList} />
        </div>

        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} hundleEdit={editTask} />
        </div>

      </main>
      {/*RODAPÉ */}
      <Footer />
    </div>
  )
}

export default App
