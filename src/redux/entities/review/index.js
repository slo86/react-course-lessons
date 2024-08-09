import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {getReviews} from "./get-reviews.js";

const entityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
    name: 'review',
    initialState: entityAdapter.getInitialState(),
    extraReducers: builder => {
        builder.addCase(getReviews.fulfilled, (state, {payload}) => {
            entityAdapter.upsertMany(state, payload);
        });
    },
    selectors: {
        selectReviewById: (state, id) => state.entities[id],
    },
});

export const {selectReviewById} = reviewSlice.selectors;
