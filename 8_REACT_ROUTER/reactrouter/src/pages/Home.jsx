import './Home.css'
import {Link} from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Home = () => {

    const url = 'http://localhost:3000/products' //Link do db.json com os objetos de carregamento

    const {data: items, loading, error} = useFetch(url) //Chamando od dados da url pelo useFetch

  return (

    //Aula 3 - Carregamento de dados
    <div>
        <h1>Produtos</h1>
        {error && <p>{error}</p>}
        <ul className='products'>
            {items && items.map(prod => (
                <li key={prod.id}>
                    <h3>{prod.name}</h3>
                    <p>R$: {prod.price}</p>
                    <p>Estoque: {prod.qtd}</p>
                    {/*Rota dinâmica  */}
                    <Link to={`/products/${prod.id}`}>Detalhes</Link>
                </li>
            )
            
            )}
        </ul>
    </div>
  )
}

export default Home