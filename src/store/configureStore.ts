import ReduxThunk from "redux-thunk";

import { AnyAction, configureStore, Middleware } from "@reduxjs/toolkit";

import { reducers } from "./reducers";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const middleware = [ReduxThunk] as Array<Middleware>;

const Store = configureStore({
    reducer: reducers(),
    middleware,
    enhancers: [],
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = AnyAction | any;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default Store;
