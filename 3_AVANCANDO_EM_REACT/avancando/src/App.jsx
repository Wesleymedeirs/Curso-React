import { useState } from 'react'

import './App.css'
import City from './assets/espaco.jpg'
import ListRender from './components/ListRender';
import Fragments from './components/Fragments';
import Conteiner from './components/Conteiner';
import ExecuteFunction from './components/ExecuteFunction';
import Mensagem from './components/Mensagem';
import AlterarMensagem from './components/AlterarMensagem';
import UserDetails from './components/UserDetails';


function App() { 

  const [valor, setValor] = useState(1);

  const alterar = () => {
    setValor(valor + 1)
  }
//Desafio 4
  const pessoas = [
    {id:1, nome:'Wesley', idade:26, job:'Coordenador'},
    {id:2,nome:'Wendell', idade:15, job:'Estudante'},
    {id:3,nome:'Nilson', idade:65, job:'Aposentado'}
]

  const [mensagem, setMensagem] = useState('');

  const handleMensagem = (msg) => {
    setMensagem(msg);
  }
  


 function showMensagem(){
  console.log('Eventos do componente pai.')
 }
 
  return (
    <>
      <h1>Avançando em React</h1>

    <button onClick={alterar}>Valor: {valor}</button>

    <ListRender />

      {/*Imagem em public */}
      <div>
        <img src="/menina.png" alt="Menina com câmera" width={300} />
      </div>

      {/*Imagem em assets */}
      <div>
        <img src={City} alt="Espaço" />
      </div>

      {/*Fragments*/}
      <Fragments nomeCompleto='Wesley Medeiros'/>

      {/*children*/}
      <Conteiner myValue='Testing'>
        <p>Este é o conteudo do container</p>
      </Conteiner>

      {/*Executar fuinção*/}
      <ExecuteFunction myFunction={showMensagem}/>

      {/* State lift*/}
      <Mensagem msg={mensagem}/>
      <AlterarMensagem handleMensage={handleMensagem}/>

       {/* Desafio 4*/}
       {pessoas.map((cadaPessoa) =>(
        <UserDetails 
        key={cadaPessoa.id}
        nome={cadaPessoa.nome}
        idade={cadaPessoa.idade}
        job={cadaPessoa.job}/>
       ))}
    </>
  )
}

export default App
