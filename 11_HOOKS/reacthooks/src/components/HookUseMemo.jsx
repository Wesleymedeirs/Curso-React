import { useState, useEffect, useMemo } from "react"

const HookUseMemo = () => {

    const [number, setNumber] = useState()

    // const premiumNumbers = ['0', '100', '200'] | modelo errado!
    
    const premiumNumbers = useMemo(() => {
        return ['0', '100', '200']
    }, [])

    useEffect(() => {
        console.log('Premium numbers foi alterado!')
    }, [premiumNumbers])
  return (
    <div>
        <h2>useMemo</h2>
        <input type="text" onChange={(e) => setNumber(e.target.value)}/>
        {premiumNumbers.includes(number) ? <p>Acertou o número!</p>  : ''}
        <hr />
    </div>
  )
}

export default HookUseMemo