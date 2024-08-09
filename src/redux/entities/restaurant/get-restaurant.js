import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectRestaurantById} from "./index.js";

export const getRestaurant = createAsyncThunk(
    'restaurant/getRestaurant',
    async (restaurantId, {rejectWithValue}) => {
        const response = await fetch(`http://localhost:3001/api/restaurant/${restaurantId}`);
        const result = await response.json();

        if (!result.length) {
            rejectWithValue("empty result");
        }

        return result;
    },
    {
        condition: (restaurantId, {getState}) => {
            return !selectRestaurantById(getState(), restaurantId);
        },
    }
);
