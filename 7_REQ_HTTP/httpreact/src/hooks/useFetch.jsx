import { useState, useEffect } from 'react'


//Aula 4 - hook customizados 

export const useFetch = (url) => {
    const [data, setData] = useState(null)


    //Refatorando o POST ou seja adição de objetos na API

    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    //carregamento (loading)
    const [loading, setLoading] = useState(false)


    //tratando erro
    const [error, setError] = useState(null)

    // Desafio 6

    const [itemId, setItemID] = useState(null)

    const httpConfig = (data, method) => {
        if(method === 'POST'){
            setConfig({
                method,
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            setMethod(method)

        }else if(method === 'DELETE'){
            setConfig({
                method,
                headers: {
                    'Content-type': 'application/json'
                }
            })
            setMethod(method)
            setItemID(data)

        }
    }

    useEffect(() => {

        const fetchData = async () => {

            setLoading(true)//inicia o carregamento
            try {
                const res = await fetch(url)

                const json = await res.json()
            
            setData(json)

            } catch (error) {

                console.log(error.message)

                setError('Houve algum erro ao carregar os dados')
            }
            
            setLoading(false)//finaliza o carregamento
        }
        fetchData();

    }, [url, callFetch]) // O useEffect é utilizdo apenas uma vez, e foi adicionado como dependêcia a url

    //Aula 5 - Refatorando o POST

    useEffect(() => {
       const httpRequest = async () => {

        let json
        if(method === 'POST'){
            let fetchOptions = [url, config]
            const res = await fetch(...fetchOptions)
            json = await res.json()              

        }else if(method === 'DELETE'){
            const deleteUrl = `${url}/${itemId}`
            const res = await fetch(deleteUrl, config)
            json = await res.json()
            
        }
        setCallFetch(json)
       }
       httpRequest()

    }, [config, method, url])

    return {data, httpConfig, loading, error};
}