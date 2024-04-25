import { useState, ChangeEvent } from "react"

const State = () => {

    const [text, setText] = useState<string | number | null>('Valor') //Tipando os tipos dados que o state pode receber 

    const hundleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    return (
        <div>
             <hr />
             <h1>State</h1>
            <p>O texto é: {text}</p>
            <input type="text" onChange={hundleChange} />

       
        </div>
    )
    
}

export default State