import React, {useContext} from 'react'

import {AppContext} from '../App'

const Context = () => {
    const details = useContext(AppContext)

  return (
    <>
    {details && (
        <div>
            <h2>Ligunguagem: {details.language}</h2>
            <h4>Framework: {details.framework}</h4>
            <p>Quantidade: {details.projects}</p>
        </div>
    )}
    </>
  )
}

export default Context