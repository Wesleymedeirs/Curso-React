import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Search = () => {
    const [searchParams] = useSearchParams()

    const url = 'http://localhost:3000/products?'+searchParams

    const {data: items, loading, error} = useFetch(url)
  return (
    <div>
      <h1>Resultados disponíveis</h1>

      <ul className='products'>
            {items && items.map(prod => (
                <li key={prod.id}>
                    <h3>{prod.name}</h3>
                    <p>R$: {prod.price}</p>
                    <p>Estoque: {prod.qtd}</p>
                    <Link to={`/products/${prod.id}`}>Detalhes</Link>
                </li>
            )
            
            )}
        </ul>

    </div>
  )
}

export default Search
