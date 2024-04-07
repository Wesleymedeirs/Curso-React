import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {ContadorContextProvider} from './context/ContadorContext.jsx'
import { TitleColorContextProvider } from './context/TitleColorContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
{/*Aula 2 - Criando provider */}
    <ContadorContextProvider>
       <TitleColorContextProvider>
       <App /> 
       </TitleColorContextProvider>
    </ContadorContextProvider>
  </React.StrictMode>,
)
