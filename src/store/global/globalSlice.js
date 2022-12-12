import { createSlice } from "@reduxjs/toolkit";

import { initialGlobalState } from "./initialState";

export const globalSlice = createSlice({
    name: "global",
    initialState: initialGlobalState(),
    reducers: {
        setJoke(state, action) {
            state.joke = action.payload;
        },
    },
});
