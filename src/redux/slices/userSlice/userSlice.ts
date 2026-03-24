import type {IUser} from "../../../models/IUser.ts";
import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected, type PayloadAction} from "@reduxjs/toolkit";

// опис типу частини стейту, якрю є слайс, це структура даних для userSlice
type UserSliceType = {
    users: IUser[];
    user: IUser | null;
    loadState: "succeed" | "loading" | "failed";
    error: string | null;
};

// початкове значення state
// при першому запуску store буде {users: []}
const initialState: UserSliceType = {users: [], user: null, loadState: "succeed", error: null};

const loadUsers = createAsyncThunk(
    "userSlice/loadUsers",
    async (_, thunkAPI) => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");

            if (!res.ok) {
                throw new Error("Failed to fetch");
            }

            const users = await res.json();
            return thunkAPI.fulfillWithValue(users);
        } catch (error: unknown) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message);
            }
            return thunkAPI.rejectWithValue("Unknown error");
        }
    }
);

// якщо окрім id потрібно передати декілька аргументів, то формується об'єкт
const loadUser = createAsyncThunk(
    "userSlice/loadUser",
    async (id: string, thunkAPI) => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

            if (!res.ok) {
                throw new Error(`Failed to fetch user`);
            }

            const user = await res.json();
            return thunkAPI.fulfillWithValue(user);
        } catch (error: unknown) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message);
            }
            return thunkAPI.rejectWithValue("Unknown error");
        }
    }
);

// createSlice - функція з Redux Toolkit, яка створює reducer, actions та пов'язує їх між собою
export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState, // початковий стан
    // reducers - опис функцій, які змінюють state
    // У звичайному Redux не можна мутувати state, але Redux Toolkit використовує бібліотеку Immer, яка робить іммутабельність
    // action:PayloadAction<IUser[]> - це об'єкт, який приходить при dispatch
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                state.users = action.payload;
            })
            .addCase(loadUser.fulfilled, (state, action: PayloadAction<IUser>) => {
                state.user = action.payload;
            })
            .addMatcher(isPending(loadUser, loadUsers), (state) => {
                state.loadState = "loading";
                state.error = null;
                state.user = null;
            })
            .addMatcher(isFulfilled(loadUser, loadUsers), (state) => {
                state.loadState = "succeed";
            })
            .addMatcher(isRejected(loadUser, loadUsers), (state, action) => {
                state.loadState = "failed";
                state.error = (action.payload as string) || "Error";
            });
    }
});

// експорт actions назовні для dispatch(loadUsers(data)), альтернатива - export const {loadUsers} = userSlice.actions
export const userSliceActions = {
    ...userSlice.actions, loadUsers, loadUser
};