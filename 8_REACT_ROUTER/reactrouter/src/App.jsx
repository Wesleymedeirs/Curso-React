import './App.css'

//Configurando o react router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'


//Importando os components
import NavBar from './components/NavBar'
import SearchForm from './components/SearchForm'

//Importando as paginas
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import Search from './pages/Search'


function App() {
  

  return (
    <div className="App">
      <h1>Rotas em React</h1>
      <BrowserRouter>
      {/*Aula 2 - Links com react routes | teve de chamar o componente aqui */}
        <NavBar/>
        {/*Aula 9 - Criando formulário de busca */}
        <SearchForm/>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>

        {/*Rota dinâmica */}
        <Route path='/products/:id' element={<Product />}/>

        {/*Aula 6 - Rotas aninhadas */}
        <Route path='/products/:id/info' element={<Info />}/>

        {/*Aula 9 - Pesquisa */}
        <Route path='/search' element={<Search/>}/>

        {/*Aula 10 - Redirect */}
        <Route path='/company' element={<Navigate to='/about'/>}/>
        
        {/*Aula 7 - No match route - Pagina não encontrada */}
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
