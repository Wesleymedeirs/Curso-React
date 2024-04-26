import styles from './TaksForm.module.css'

type Props = {
    btnText: string
}

const TaksForm = ({btnText}: Props) => {

    const hundleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form className={styles.form} onSubmit={hundleSubmit}>
            <div className={styles.input_container}>
                <label htmlFor="title">Título:</label>
                <input type="text" name='title' placeholder='Título da tarefa' />
            </div>

            <div className={styles.input_container}>
                <label htmlFor="difficulty">Dificuldade:</label>
                <input type="text" name='difficulty' placeholder='Dificuldade da tarefa' />
            </div>

            <input type="submit" value={btnText}/>
        </form>
    )
}

export default TaksForm