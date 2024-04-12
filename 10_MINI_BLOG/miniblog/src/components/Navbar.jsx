import { NavLink } from 'react-router-dom'


import { useAuthentication } from '../hooks/useAuthentication'

//Importando o context que é responsável para verificar se o usuário está logado em todas as paginas
import { useAuthValue } from '../context/AuthContext'

//CSS   
import styles from './Navbar.module.css'

const Navbar = () => {
    const { user } = useAuthValue()
    const {logout} = useAuthentication()


    return (
        <nav className={styles.navbar}>
            <NavLink to='/' className={styles.brand}>
                Mini <span>Blog</span>
            </NavLink>

            <ul className={styles.links_list}>
                <li>
                    <NavLink to='/' className={(({ isActive }) => (isActive ? styles.active : ''))}>
                        Home
                    </NavLink>
                </li>

                {/*Verificando se tem usuário */}

                {/*NÃO TEM USUÁRIO LOGADO SERÁ EXIBIDO ESSAS DUAS PÁGINAS */}
                {!user && (
                    <>
                        <li>
                            <NavLink to='/login' className={(({ isActive }) => (isActive ? styles.active : ''))}>
                                Entrar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/register' className={(({ isActive }) => (isActive ? styles.active : ''))}>
                                Cadastrar
                            </NavLink>
                        </li>
                        
                    </>
                )}
                {/*TEM USUÁRIO LOGADO SERÁ EXIBIDO ESSAS DUAS PÁGINAS */}
                {user && (
                    <>
                    <li>
                            <NavLink to='/dashboard' className={(({ isActive }) => (isActive ? styles.active : ''))}>
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/posts/create' className={(({ isActive }) => (isActive ? styles.active : ''))}>
                                Novo post
                            </NavLink>
                        </li>
                    </>
                )}

                <li>
                    <NavLink to='/about' className={(({ isActive }) => (isActive ? styles.active : ''))}>
                        Sobre
                    </NavLink>
                </li>

                {user && (
                    <li>
                        <button onClick={logout}>Sair</button>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar
