import { combineReducers, configureStore } from "@reduxjs/toolkit";
import total from "./Reducer";
import BuscarDados from "./BuscarDados";
import modal from "./Modal"

const reducers = combineReducers({
    total,
    BuscarDados,
    modal
})

const store = configureStore({
    reducer: reducers
})

export default store