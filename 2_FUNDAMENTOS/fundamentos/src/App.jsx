import { useState } from 'react';
//styles
import './App.css';
//Componentes
import PrimeiroComponente from './components/PrimeiroComponente';
import TemplateExpressions from './components/TemplateExpressions';
import Events  from './components/Events';
import Challenge from './components/Challenge';

function App() {
const [nome, setNome] = useState('Clique aqui');

function nomeAlterado() {
  setNome('Clicou');
}

  return (
    <>
      <h1>Fundamentos React</h1>
      <Challenge/>
      <button onClick={nomeAlterado}>{nome}</button>
      
      <PrimeiroComponente/>
      <TemplateExpressions/>
      <Events/>
      
      <div className='atv1'>
        <p>Atividade 01</p>
      </div>
    </>

   
  )
}

export default App
