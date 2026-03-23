import {userSlice} from "./slices/userSlice/userSlice.ts";
import {configureStore} from "@reduxjs/toolkit";

// Головний Redux store, який зберігає весь стан додатку
export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        //postSlice: null,
    }
});