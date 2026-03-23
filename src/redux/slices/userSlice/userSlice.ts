import type {IUser} from "../../../models/IUser.ts";
import {createAsyncThunk, createSlice, isFulfilled, isRejected, type PayloadAction} from "@reduxjs/toolkit";

// опис типу частини стейту, якрю є слайс, це структура даних для userSlice
type UserSliceType = {
    users: IUser[];
    user: IUser | null;
    loadState: boolean;
};

// початкове значення state
// при першому запуску store буде {users: []}
const initialState: UserSliceType = {users: [], user: null, loadState: false};

const loadUsers = createAsyncThunk(
    "userSlice/loadUsers",
    async (_, thunkAPI) => {
        try {
            const users = await fetch("https://jsonplaceholder.typicode.com/users")
                .then(res => res.json());

            //thunkAPI.dispatch(userSliceActions.changeLoadState(true));

            return thunkAPI.fulfillWithValue(users);
            //throw new Error();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

// якщо окрім id потрібно передати декілька аргументів, то формується об'єкт
const loadUser = createAsyncThunk(
    "userSlice/loadUser",
    async (id: string, thunkAPI) => {
        try {
            const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(res => res.json());

            //thunkAPI.dispatch(userSliceActions.changeLoadState(true));

            return thunkAPI.fulfillWithValue(user);
            //throw new Error();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
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
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.loadState = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                state.users = action.payload
            })
            .addCase(loadUsers.rejected, (state, action) => {
                console.log(state);
                console.log(action);
            })
            .addCase(loadUser.fulfilled, (state, action: PayloadAction<IUser>) => {
                state.user = action.payload
            })
            .addMatcher(isFulfilled(loadUser, loadUsers), (state) => {
                state.loadState = true;
            })
            .addMatcher(isRejected(loadUser, loadUsers), (state) => {
                console.log(state);
            })
    }
});

// експорт actions назовні для dispatch(loadUsers(data)), альтернатива - export const {loadUsers} = userSlice.actions
export const userSliceActions = {
    ...userSlice.actions, loadUsers, loadUser
};