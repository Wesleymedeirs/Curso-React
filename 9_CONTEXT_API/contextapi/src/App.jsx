import './App.css'
//Importando os responsáveis por gerenciar as rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Componentes
import NavBar from './components/NavBar'

//Paginas
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'


function App() {  

  return (
  <div className="App">
    <h1>Context API</h1>    
    <BrowserRouter>
    <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
