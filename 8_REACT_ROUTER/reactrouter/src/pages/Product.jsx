import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";

const Product = () => {
//Aula 4 - ROta dinâmica

const {id} = useParams();


// Aula 5 - carregamento dado individual

const url = 'http://localhost:3000/products/' + id
const {data: product, loading, error} = useFetch(url)

console.log(product)
  return (
    <>
      <p>ID do produto: {id}</p>
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R$: {product.price}</p>
          <p>Estoque: {product.qtd}</p>

          {/*Rotas aninhadas */}
          <Link to={`/products/${product.id}/info`}>Mais Informações</Link>

        </div>
      )}
    </>
  )
}

export default Product