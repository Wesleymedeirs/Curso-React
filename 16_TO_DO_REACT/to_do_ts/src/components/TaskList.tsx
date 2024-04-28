import React from 'react'
//interfaces
import { ITask } from '../interfaces/Taks'
//CSS
import styles from './TaskList.module.css'


type Props = {
  taskList: ITask[]
  handleDelete(id: number): void
  hundleEdit(task: ITask): void
}

const TaskList = ({ taskList, handleDelete, hundleEdit }: Props) => {
  return (

    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div className={styles.task} key={task.id}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <i className="bi bi-pencil" onClick={() => hundleEdit(task)}></i>
              <i className="bi bi-trash" onClick={() => handleDelete(task.id)}></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  )
}

export default TaskList