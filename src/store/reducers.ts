import { combineReducers } from "@reduxjs/toolkit";
import globalSlice from "./global";

export const reducers = () =>
    combineReducers({
        global: globalSlice.reducer,
    });
