import type {IPost} from "../../../models/IPost.ts";
import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected, type PayloadAction} from "@reduxjs/toolkit";

type PostSliceType = {
    posts: IPost[];
    loadState: "succeed" | "loading" | "failed";
    error: string | null;
};

const initialState: PostSliceType = {posts: [], loadState: "succeed", error: null};

const loadPosts = createAsyncThunk(
    "postSlice/loadPosts",
    async (_, thunkAPI) => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");

            if(!res.ok) {
                throw new Error("Failed to fetch");
            }

            const posts = await res.json();
            return thunkAPI.fulfillWithValue(posts);
        } catch (error: unknown) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message);
            }
            return thunkAPI.rejectWithValue("Unknown error");
        }
    }
)

export const postSlice = createSlice({
    name: "postSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
                state.posts = action.payload;
            })
            .addMatcher(isPending(loadPosts), (state) => {
                state.loadState = "loading";
                state.error = null;
            })
            .addMatcher(isFulfilled(loadPosts), (state) => {
                state.loadState = "succeed";
            })
            .addMatcher(isRejected(loadPosts), (state, action) => {
                state.loadState = "failed";
                state.error = (action.payload as string) || "Error";
            });
    }
});

export const postSliceActions = {
    ...postSlice.actions, loadPosts
};