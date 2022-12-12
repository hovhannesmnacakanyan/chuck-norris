import { createSelector } from "reselect";

const globalSelector = (state) => state.global;

const jokeSelector = createSelector([globalSelector], (global) => global.joke);

export const globalSel = { jokeSelector };
