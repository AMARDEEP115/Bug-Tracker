import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {Reducer} from "./AuthReducer/reducer";

const store=legacy_createStore(Reducer,applyMiddleware(thunk));

export {store};