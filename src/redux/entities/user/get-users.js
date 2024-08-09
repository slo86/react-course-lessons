import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectRestaurantsIds} from "../restaurant/index.js";
import {selectUsersIds} from "./index.js";

export const getUsers = createAsyncThunk(
    'dish/getUsers',
    async (_, {rejectWithValue}) => {
        const response = await fetch(`http://localhost:3001/api/users`);
        const result = await response.json();

        if (!result.length) {
            rejectWithValue("empty result");
        }

        return result;
    },
    {
        condition: (_, {getState}) => {
            return selectUsersIds(getState()).length === 0;
        },
    }
);
