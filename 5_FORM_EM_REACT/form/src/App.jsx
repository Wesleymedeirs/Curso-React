import { useState } from 'react'
import './App.css'
import MyForm from './components/MyForm'

function App() {
  
  return (
    <>
      <div className='App'>
    <h2>Forms</h2>    
    {/*<MyForm user={{name:'Wesley', email:'meedeiroswesley@gmail.com'}}/>  Passando por prop que vai ter uma valor default no campo nome e e-mail*/}
    <MyForm user={{nome:'Wesley Medeiros', email:'meedeiroswesley@gmail.com', }}/> {/* Passando por prop que vai ter uma valor default no campo */}
      </div>
    </>
  )
}

export default App
