import {createSlice} from "@reduxjs/toolkit/react";
import {createSelector} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {},
    selectors: {
        selectCartState: (state) => state,
        selectCartItems: state => {
            return (
                Object.keys(state).reduce((acc, id) => {
                    acc.push({itemId: id, amount: state[id]});
                    return acc;
                }, []) || []
            );
        },
        selectCartItemAmountById: (state, id) => {
            return state[id] || 0;
        },
    },
    reducers: {
        addCartItem: (state, {payload}) => {
            state[payload] = (state[payload] || 0) + 1;
        },
        removeCartItem: (state, {payload}) => {
            if (!state[payload]) {
                return state;
            }

            state[payload] = state[payload] - 1;

            if (state[payload] <= 0) {
                delete state[payload];
            }
        }
    }
});

export const {selectCartItemAmountById, selectCartState} = cartSlice.selectors;

export const selectCartItems = createSelector(selectCartState, (state) => {
    return (
        Object.keys(state).reduce((acc, id) => {
            acc.push({ itemId: id, amount: state[id] });
            return acc;
        }, []) || []
    );
});

export const {addCartItem, removeCartItem} = cartSlice.actions;
