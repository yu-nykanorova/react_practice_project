import type {IComment} from "../../../models/IComment.ts";
import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected, type PayloadAction} from "@reduxjs/toolkit";
import {getError} from "../../../helpers/getError.ts";
import {getItems} from "../../../services/getItemsService.ts";

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
            const comments = await getItems<IComment[]>("/comments");
            return thunkAPI.fulfillWithValue(comments);
        } catch (error) {
            return thunkAPI.rejectWithValue(getError(error));
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

export const commentSliceActions = {
    ...commentSlice.actions, loadComments
};