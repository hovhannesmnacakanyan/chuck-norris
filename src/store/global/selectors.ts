import { createSelector } from "reselect";
import { RootState } from "../configureStore";

const globalSelector = (state: RootState) => state.global;

const jokeSelector = createSelector([globalSelector], (global) => global.joke);

export const globalSel = { jokeSelector };
