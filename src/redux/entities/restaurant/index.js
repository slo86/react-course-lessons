import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {getRestaurants} from "./get-restaurants.js";
import {getRestaurant} from "./get-restaurant.js";

const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: entityAdapter.getInitialState(),
    extraReducers: builder => {
        builder.addCase(getRestaurants.fulfilled, (state, {payload}) => {
            entityAdapter.setAll(state, payload);
        });
        builder.addCase(getRestaurant.fulfilled, (state, {payload}) => {
            entityAdapter.upsertOne(state, payload);
        });
    },
    selectors: {
        selectRestaurantById: (state, id) => state.entities[id],
        selectRestaurantsIds: (state) => state.ids,
    },
});

export const {selectRestaurantById, selectRestaurantsIds} = restaurantSlice.selectors;
