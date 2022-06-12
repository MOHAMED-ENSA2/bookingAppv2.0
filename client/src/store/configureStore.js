import  {createStore , combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import  { composeWithDevTools } from 'redux-devtools-extension'

import user from "./user"

const initialState = []
const middlewares = [thunk]
const reducer = combineReducers({
    user
})

const store = createStore( reducer , initialState , composeWithDevTools(applyMiddleware(...middlewares)) )

export default store 

