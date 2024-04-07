import { useState } from "react"
import { useNavigate } from "react-router-dom"



const SearchForm = () => {
    const navigate = useNavigate()
    const [query, setQuery] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        setQuery('')
        navigate('/search?q='+ query)
        
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setQuery(e.target.value)} value={query}/>
        <input type="submit" value='Buscar' />
    </form>
  )
}

export default SearchForm
