import MyComponent from './components/MyComponent';
import './App.css';
import { useState } from 'react';
import Title from './components/Title';

function App() {
 
  const n = 15;
  const n1 = 5;
  const redTitle = true;


  const [nome] = useState('Wesley');
  return (
      <div className='App'>

    {/*CSS Global */}
    <h1>React com CSS</h1>
    {/*CSS de componente */}
    <MyComponent/>
    <p>Este do App.jsx</p>

    {/*Inline CSS */}
    <p style={{color: 'white', padding: '25px', border: '4px solid red'}}>Este  elemento foi estilizado de froma Inline</p>

    <p style={{color: 'bleu', padding: '25px', border: '4px solid blue'}}>Este  elemento foi estilizado de froma Inline</p>
      

    {/*Inline style inline | Dinâmico */}  
      <h2 style={n < 10 ? ({color:'purple'}) : ({color:'pink'})}>CSS Dinâmico</h2>

      <h2 style={n1 < 10 ? ({color:'purple'}) : ({color:'pink'})}>CSS Dinâmico</h2>

      <h2 style={nome === 'Wesley' ? ({color:'green', backgroundColor: '#000'}) : null}>Teste nome</h2>
      
    {/*Classe dinâmica é o mais utilizado*/}  
      <h2 className={redTitle ? 'red-title' : 'title'}>Este titulo vai ter classe dinâmica</h2>

    {/*CSS modules é o mais utilizado*/}  
    <Title/>
      </div>    
  
  )
}

export default App
