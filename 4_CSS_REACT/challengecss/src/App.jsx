
import './App.css'
import Showroon from './components/Showroon'

function App() {
  const carros = [
    {id:1, modelo:'Gol', km:3500, cor: 'Branco'},
    {id:2, modelo:'Cerato', km:2500, cor: 'Preto'},
    {id:3, modelo:'Compass', km:3500, cor: 'Azul'}
  ]

  return (
    <>
      <div>
        <h1>Showroon de carros</h1>
        <div className='car-container'>
          {carros.map((carro) => (
        <Showroon
        key={carro.id}
        modelo={carro.modelo}
        km={carro.km}
        cor={carro.cor}        
        />
        ))}
        </div>
        
      </div>
    </>
  )
}

export default App
