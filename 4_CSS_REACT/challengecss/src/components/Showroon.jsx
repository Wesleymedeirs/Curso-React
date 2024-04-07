import styles from './Showroon.module.css'

const Showroon = ({modelo, km, cor}) => {
  return (
    <div className={styles.cars_styles}>
        <h1>{modelo}</h1>
        <p>KM: {km}</p>
        <p>Cor: {cor}</p>
    </div>
  )
}

export default Showroon