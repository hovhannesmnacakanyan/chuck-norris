import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialGlobalState } from "./initialState";

export interface JokeInterface {
    joke: null | {
        categories?: string[];
        icon_url?: string;
        id?: string;
        url?: string;
        value?: string;
    };
}

export const globalSlice = createSlice({
    name: "global",
    initialState: initialGlobalState(),
    reducers: {
        setJoke(state, action: PayloadAction<JokeInterface | any>) {
            state.joke = action.payload;
        },
    },
});
