import {userSlice} from "./slices/userSlice/userSlice.ts";
import {configureStore} from "@reduxjs/toolkit";
import {postSlice} from "./slices/postSlice/postSlice.ts";
import {commentSlice} from "./slices/commentSlice/commentSlice.ts";

// Головний Redux store, який зберігає весь стан додатку
export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer,
        commentSlice: commentSlice.reducer,
    }
});