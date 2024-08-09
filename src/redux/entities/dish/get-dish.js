import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectDishById} from "./index.js";

export const getDish = createAsyncThunk(
    'dish/getDish',
    async (dishId, {rejectWithValue}) => {
        const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);
        const result = await response.json();

        if (!result.length) {
            rejectWithValue("empty result");
        }

        return result;
    },
    {
        condition: (dishId, {getState}) => {
            return !selectDishById(getState(), dishId);
        },
    }
);
