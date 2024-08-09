import {createSlice} from "@reduxjs/toolkit";
import {STATUS_FULFILLED, STATUS_IDLE, STATUS_PENDING, STATUS_REJECTED} from "./constants.js";

export const requestSlice = createSlice({
    name: "request",
    initialState: {},
    extraReducers: (builder) =>
        builder
            .addMatcher(
                ({type}) => type.endsWith(STATUS_PENDING),
                (state, {meta}) => {
                    state[meta.requestId] = STATUS_PENDING;
                }
            )
            .addMatcher(
                ({type}) => type.endsWith(STATUS_FULFILLED),
                (state, {meta}) => {
                    state[meta.requestId] = STATUS_FULFILLED;
                }
            )
            .addMatcher(
                ({type}) => type.endsWith(STATUS_REJECTED),
                (state, {meta}) => {
                    state[meta.requestId] = STATUS_REJECTED;
                }
            ),
    selectors: {
        selectRequestStatus: (state, requestId) => state[requestId] || STATUS_IDLE,
    },
});

export const {selectRequestStatus} = requestSlice.selectors;
