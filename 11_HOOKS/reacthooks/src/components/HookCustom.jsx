import { useState } from "react"
import { usePrevious } from "../hooks/usePrevious"


const HookCustom = () => {

    const [number, setNumber] = useState(0)
    const previousValue = usePrevious(number)

    return (
        <div>
            <h2>Custom Hook</h2>
            <p>Atual: {number}</p>
            <p>Anterior: {previousValue}</p>
            <button onClick={() => setNumber(number + 1)}>Alterar valor</button>
            <hr />
        </div>
    )
}

export default HookCustom