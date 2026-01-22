import { configureStore } from "@reduxjs/toolkit";
import total from "./Reducer";

const store = configureStore ({
    reducer: {
        total
    }
})

export default store