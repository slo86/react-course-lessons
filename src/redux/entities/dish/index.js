import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {getDishes} from "./get-dishes.js";
import {getDish} from "./get-dish.js";

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
    name: 'dish',
    initialState: entityAdapter.getInitialState(),
    extraReducers: builder => {
        builder
            .addCase(getDishes.fulfilled, (state, {payload}) => {
                entityAdapter.upsertMany(state, payload);
            })
            .addCase(getDish.fulfilled, (state, {payload}) => {
                entityAdapter.setOne(state, payload);
            });
    },
    selectors: {
        selectDishById: (state, id) => state.entities[id],
    },
});

export const {selectDishById} = dishSlice.selectors;
