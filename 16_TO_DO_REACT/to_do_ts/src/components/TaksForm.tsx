import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'

//CSS
import styles from './TaksForm.module.css'

//interfaces
import { ITask } from '../interfaces/Taks'
import TaskList from './TaskList'

type Props = {
    btnText: string,
    taksList: ITask[],
    //? porque não é obrigatório o envio na Edição da tarefa
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
    task?: ITask | null
    hundleUpdate?(id: number, title: string, difficulty: number): void
}

const TaksForm = ({ btnText, taksList, setTaskList, task, hundleUpdate }: Props) => {

    //Declarações das variaveis
    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>('')
    const [difficulty, setDifficulty] = useState<number>(0)

        //Adicicionar a task apenas uma vez
    useEffect(() => {
        if (task) {
            setId(task.id)
            setTitle(task.title)
            setDifficulty(task.difficulty)
        }
    }, [task])

    const addTaksHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (hundleUpdate) {
            hundleUpdate(id, title, difficulty)
        } else {
            //Gerar o número para adicionar no array
            const id = Math.floor(Math.random() * 1000)
            //Adicionando todas as const em newTask
            const newTask: ITask = { id, title, difficulty }

            setTaskList!([...taksList, newTask])

            setTitle('')
            setDifficulty(0)
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === 'title') {
            setTitle(event.target.value)
        } else {
            //o valor está sendo retornado com STRING, por isso vamos add parseInter()
            setDifficulty(parseInt(event.target.value))
        }
    }

    return (
        <form className={styles.form} onSubmit={addTaksHandler}>
            <div className={styles.input_container}>
                <label htmlFor="title">Título:</label>
                <input type="text"
                    name='title'
                    value={title}
                    placeholder='Título da tarefa'
                    onChange={handleChange} />
            </div>

            <div className={styles.input_container}>
                <label htmlFor="difficulty">Dificuldade:</label>
                <input type="text"
                    name='difficulty'
                    value={difficulty}
                    placeholder='Dificuldade da tarefa'
                    onChange={handleChange} />
            </div>

            <input type="submit" value={btnText} />
        </form>
    )
}

export default TaksForm