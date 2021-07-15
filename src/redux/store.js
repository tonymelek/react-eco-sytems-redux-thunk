import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/index";



//combine all reducers to root reducer
const rootReducer = combineReducers(reducers)


// to be passed to provider at index.js
export const store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)