//Aula 3 - Alterando o contetxo

import { useContext, useState } from "react";

import { ContadorContext } from "../context/ContadorContext";


const ChangeContador = () => {

    const {counter, setCounter} = useContext(ContadorContext)
    const {nome, setNome} = useContext(ContadorContext)

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Add valor ao contador</button>
      <button onClick={() => setNome('Clicou!')}>Mudar nome</button>
    </div>
  )
}

export default ChangeContador
