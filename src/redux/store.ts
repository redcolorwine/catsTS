import { combineReducers, createStore } from "redux";
import homeReducer from "./homeReducer";
import thunk from "redux-thunk";
import { applyMiddleware } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from "redux";
import breedsReducer from "./breedsReducer";
import categoryReducer from "./categoryReducer";
const rootReducer = combineReducers({
    home: homeReducer,
    breeds: breedsReducer,
    categories: categoryReducer
})
type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AnyAction>
export const store = createStore(rootReducer, applyMiddleware(thunk))