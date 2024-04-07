import { useState, useEffect } from 'react'

import './App.css'

//Aula 4 - importando o hook customizado
import { useFetch } from './hooks/useFetch'

//url da api JSON
const url = 'http://localhost:3000/products'

function App() {

//Aula 1 - Primeiro momento foi criada dessa forma para pegar os dados da API, porém, foi criada um custom hook, onde foi importada acima

  /*useEffect(() => {
    async function fetchData(){
     const resposta = await fetch(url)
     const data = await resposta.json()
     setProducts(data)
    }       
    fetchData()  
   }, [])*/

// Isso foi criado para receber os produtos da API, vão para um array vazio
  const [products, setProducts] = useState([])

  //Aula 4 - Utilizando o hook customizado
const {data: items, httpConfig, loading, error} = useFetch(url)


//Faz parte da requisição guardando os valores nas const, guarda os valores do db.json
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [qtd, setQtd] = useState('')  

  //Aula 2 - Função para adição de produtos, lá no input recebeu o onChange para atribuir um novo dado na API
  const handleSubmit = async (e) => {
    e.preventDefault()

    //Objeto para enviar os dados para o backend(API)
    const product = {
      name,
      price,
      qtd,
    };
    
    //Requisição

    /*const res = await fetch(url, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product),
    });

    //Aula 3 - carregamento dinâmico
    const addedProduct = await res.json() 
    setProducts((prevProducts) => [...prevProducts, addedProduct]);*/

    //Aula 5 - Refatorando o POST (substituindo o código acima)
//Ao enviar os dados e clicar no botão, os inputs serão limpos

httpConfig(product, 'POST')
    setName('')
    setPrice('')
    setQtd('')

  };

  //dESAFIO 6
  const handleRemove = (id) => {
    httpConfig(id, 'DELETE') 
  }
  
  return (
    <div className="App">
      <h1>Lista de produtos</h1>

      {/*Aula 6 - carregamento (loading)*/}
      {loading && <p>Carregando dados...</p>}


      {error && <p>{error}</p>}
      {/*Para exibir dados em lista no aplicação */}
      {!error && (
        <ul>        
        {items && items.map((produto) => (
          <li key={produto.id}>
            {produto.name} - R$: {produto.price} - Estoque: {produto.qtd}

            <button onClick={() => handleRemove(produto.id)}>Deletar</button>
          </li>
        ))}
      </ul>
      )}
    {/*Criando os inputs para receber novos dados */}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:  
            <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)} />
          </label>

          <label>
            Preço: 
            <input type="number" value={price} name='price' onChange={(e) => setPrice(e.target.value)} />
          </label>

          <label>
            Estoque: 
            <input type="number" value={qtd} name='qtd' onChange={(e) => setQtd(e.target.value)} />
          </label>

          {/*Aula 7 - Enquanto envia os dados, o botão vai apresentar Aguarde, */}
          {loading && <input type="submit" disabled value='Aguarde' />}
          {!loading && <input type="submit" value='Criar' />}
          
         
        </form>
      </div>
    </div>
  )
}

export default App
