import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from './entities/user';
import {restaurantSlice} from "./entities/restaurant/index.js";
import {dishSlice} from "./entities/dish/index.js";
import {reviewSlice} from "./entities/review/index.js";
import {cartSlice} from "./ui/cart/index.js";

export const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
        [restaurantSlice.name]: restaurantSlice.reducer,
        [dishSlice.name]: dishSlice.reducer,
        [reviewSlice.name]: reviewSlice.reducer,
        [cartSlice.name]: cartSlice.reducer,
    },
});
