import { configureStore } from "@reduxjs/toolkit";
import ReduxThunk from "redux-thunk";

import { reducers } from "./reducers";

let store;
export const getStore = () => store;

export const Store = () => {
    const middleware = [ReduxThunk];

    store = configureStore({
        reducer: reducers(),
        middleware,
        enhancers: [],
        preloadedState: {},
    });

    return store;
};
