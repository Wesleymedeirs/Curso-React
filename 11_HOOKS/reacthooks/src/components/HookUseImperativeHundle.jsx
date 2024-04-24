import { useRef } from 'react'

import SomeComponent from './SomeComponent'

const HookUseImperativeHundle = () => {
    const componentRef = useRef()


    return (
        <div>
            <h2>useImperativeHundle</h2>
            <SomeComponent ref={componentRef}/>
            <button onClick={() => componentRef.current.validate()}>Validate</button>
            <hr />
        </div>
    )
}

export default HookUseImperativeHundle