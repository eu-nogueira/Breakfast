import { combineReducers, configureStore } from "@reduxjs/toolkit";
import total from "./Reducer";
import BuscarDados from "./BuscarDados";

const reducers = combineReducers({
    total,
    BuscarDados
})

const store = configureStore({
    reducer: reducers
})

export default store