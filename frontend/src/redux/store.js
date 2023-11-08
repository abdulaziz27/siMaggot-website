import { userLoginReducer, userRegisterReducer } from "./reducers/UserReducers.js";
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
 

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
})

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo"))
: null;

const initialState = {
    userLogin: { userInfo: userInfoFromLocalStorage },
    userRegister: { userInfo: userInfoFromLocalStorage },
}


const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;