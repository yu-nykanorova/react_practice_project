import type {IComment} from "../../../models/IComment.ts";
import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected, type PayloadAction} from "@reduxjs/toolkit";

type CommentSliceType = {
    comments: IComment[];
    loadState: "succeed" | "loading" | "failed";
    error: string | null;
};

const initialState: CommentSliceType = {comments: [], loadState: "succeed", error: null};

const loadComments = createAsyncThunk(
    "commentSlice/loadComments",
    async (_, thunkAPI) => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/comments");

            if(!res.ok) {
                throw new Error("Failed to fetch");
            }

            const comments = await res.json();
            return thunkAPI.fulfillWithValue(comments);
        } catch (error: unknown) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message);
            }
            return thunkAPI.rejectWithValue("Unknown error");
        }
    }
)

export const commentSlice = createSlice({
    name: "commentSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
                state.comments = action.payload;
            })
            .addMatcher(isPending(loadComments), (state) => {
                state.loadState = "loading";
                state.error = null;
            })
            .addMatcher(isFulfilled(loadComments), (state) => {
                state.loadState = "succeed";
            })
            .addMatcher(isRejected(loadComments), (state, action) => {
                state.loadState = "failed";
                state.error = (action.payload as string) || "Error";
            });
    }
});

export const postSliceActions = {
    ...commentSlice.actions, loadComments
};