import {combineReducers} from "redux";
import cakeReducer from "./reducers/cakeReducer";
import iceCreamReducer from "./reducers/iceCreamReducer";
import kolaReducer from './reducers/kolaReducer'
import userReducer from './reducers/userReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    kola: kolaReducer,
    user: userReducer
})

export default rootReducer;