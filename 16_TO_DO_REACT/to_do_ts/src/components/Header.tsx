//CSS
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
            </div>

            <div>
                <h1>React + TS Todo</h1>
            </div>
        </header>
    )
}

export default Header