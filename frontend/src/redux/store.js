import { userLoginReducer, userRegisterReducer } from "./reducers/UserReducers.js";
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { productDetailsReducer, productListReducer } from "./reducers/ProductReducers.js";
import { cartReducer } from "./reducers/CartReducers.js";
 

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
})


const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
? JSON.parse(localStorage.getItem("cartItems"))
: [];

const initialState = {
    cart: {
        cartItems : cartItemsFromLocalStorage,
    }
}


const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;