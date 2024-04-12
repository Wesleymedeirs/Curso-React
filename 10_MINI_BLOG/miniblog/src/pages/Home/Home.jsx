//CSS
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
      <form className={styles.search_form} >
        <label>
          Pesquisar
          <input type="text" name='search' placeholder='Digite aqui' />
        </label>
      </form>
    </div>
  )
}

export default Home
