import React from 'react'

//componentes
import HookUseState from '../components/HookUseState'
import HookUseReducer from '../components/HookUseReducer'
import HookUseEffect from '../components/HookUseEffect'

//Context
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'
import HookUseRef from '../components/HookUseRef'
import HookUseCallback from '../components/HookUseCallback'
import HookUseMemo from '../components/HookUseMemo'
import HookUseLayoutEffect from '../components/HookUseLayoutEffect'
import HookUseImperativeHundle from '../components/HookUseImperativeHundle'
import HookCustom from '../components/HookCustom'


const Home = () => {

  const {contextValue} = useContext(SomeContext)
  const {contextValue2} = useContext(SomeContext)
  return (
    <div>
      <div>
        <HookUseState/> 
        <HookUseReducer/>
        <HookUseEffect/>
        <h2>useContext</h2>
        <p>Valor do context: {contextValue}</p>
        <p>Valor do context: {contextValue2}</p>
        <hr />
        <HookUseRef/>
        <HookUseCallback/>
        <HookUseMemo/>
        <HookUseLayoutEffect/>
        <HookUseImperativeHundle/>
        <HookCustom/>
      </div>
    </div>
  )
}

export default Home
