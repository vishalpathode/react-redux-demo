import React from 'react'
import {useSelector} from 'react-redux'

function HookUseSelectorCakeContainer() {

    //this useSelector() reads redux state as argument, 
    // so we can avoid 'connect()' like we used in ConnectCakeContainer
    const _numOfCakes = useSelector(state =>state.numOfCakes)

    return (
        <p>
            (HookUseSelectorCakeContainer) - no. of cakes: {_numOfCakes}
        </p>
    )
}

export default HookUseSelectorCakeContainer
