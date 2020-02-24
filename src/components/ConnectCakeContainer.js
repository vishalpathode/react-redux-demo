import React from 'react'
import {buyCake} from '../redux/ActionCreators'
import {connect} from 'react-redux'

function ConnectCakeContainer(props) {
    return (
        <div>
            <h4>Number of cakes: {props._numOfCakes_}</h4>
            <button onClick={props.buyCake}>Buy cake</button>
        </div>
    )
}

// this state represents as store state, so we are fetching 'state.numOfCakes' from store state
// we will pass this 'state.numOfCakes' as props (props._numOfCakes_) to our function ConnectCakeContainer(props)
const mapStateToProps = state =>{
    return {
        _numOfCakes_: state.numOfCakes 
    }
}

// we will pass this 'dispatch(buyCake())' as props (props.buyCake) to our function ConnectCakeContainer(props)
const mapDispatchToProps = dispatch =>{
    return{
        buyCake: () => {
            dispatch(buyCake())
        }
    }
}


// connect() used to connect our mentioned functions to our component function
export default connect(mapStateToProps, mapDispatchToProps)(ConnectCakeContainer)
