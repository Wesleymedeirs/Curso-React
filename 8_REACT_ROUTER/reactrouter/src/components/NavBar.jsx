import './NavBar.css'

import {Link, NavLink} from 'react-router-dom'


const NavBar = () => {
  return (
    <nav>
    {/*Aula 2 - Links com react routes */}
        {/*<Link to='/'>Home</Link>
        <Link to='/about'>Sobre</Link>*/}

    <NavLink to='/'>Home</NavLink>
    <NavLink to='/about'>Sobre</NavLink>
        
        
    </nav>
  )
}

export default NavBar