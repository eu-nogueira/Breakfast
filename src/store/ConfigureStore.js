import { combineReducers, configureStore } from "@reduxjs/toolkit";
import total from "./Reducer";
import BuscarDados from "./BuscarDados";
import modal from "./Modal"
import localStorage from "./LocalStorage";

const reducers = combineReducers({
    total,
    BuscarDados,
    modal
})

const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(localStorage)
})

export default store