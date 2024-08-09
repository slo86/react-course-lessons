import {createAsyncThunk} from "@reduxjs/toolkit";

export const getDishes = createAsyncThunk(
    'dish/getDishes',
    async (restaurantId, {rejectWithValue}) => {
        const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);
        const result = await response.json();

        if (!result.length) {
            rejectWithValue("empty result");
        }

        return result;
    }
);
