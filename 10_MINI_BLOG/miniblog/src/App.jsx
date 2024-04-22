import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
//hooks
import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication'
//Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
//Context
import { AuthProvider } from './context/AuthContext'
//Pages
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import CreatePost from './pages/createPost/CreatePost'
import Dashboard from './pages/dashboard/Dashboard'
import Search from './pages/Search/Search'
import Post from './pages/Post/Post'
import EditPost from './pages/EditPost/EditPost'



function App() {
  //Criada para guardar o valor do usuário, iniciando vazio(indefinido)
  const [user, setUser] = useState(undefined)
  //Chamando o auth(autenticação) do custom hook
  const { auth } = useAuthentication()

  //
  const loadingUser = user === undefined

  //Função para observar se teve mudança na auth(autenticação do usuário) para atualizar o user e renderizar conforme definido 
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])


  //Carregamento
  if (loadingUser) {
    return <p className='print_loading'>Carregando dados...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>

          <Navbar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/search' element={<Search />} />
              <Route path='/posts/:id' element={<Post />} />
              {/*caso o usuário não esteja logado, a pagina login é bloqueada e retona a home */}
              <Route path='/register'
                element={!user ? <Register /> : <Navigate to='/' />} />

              <Route path='/posts/edit/:id'
                element={user ? <EditPost /> : <Navigate to='/login' />} />

              <Route path='/login'
                element={!user ? <Login /> : <Navigate to='/' />} />

              <Route path='/dashboard'
                element={user ? <Dashboard /> : <Navigate to='/login' />} />

              <Route path='/posts/create'
                element={user ? <CreatePost /> : <Navigate to='/login' />} />
            </Routes>
          </div>

          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
