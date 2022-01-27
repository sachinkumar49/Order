import {} from "lodash";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer, intialState } from "./reducer/reducer";
const store = createStore(reducer, intialState, applyMiddleware(thunk));
export default store;
