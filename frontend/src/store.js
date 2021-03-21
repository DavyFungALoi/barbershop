import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'

import {userRegisterReducer } from '../src/reducers/userReducer'

const reducer = combineReducers({
    userRegister: userRegisterReducer, 
})

const initialState={}
const middleware=[thunk]


const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store