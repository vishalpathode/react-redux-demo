import {createStore} from 'redux'
import reducerCake from './cake/ReducerCake'


const store = createStore(reducerCake)

export default store