import { globalSlice } from "./globalSlice";

const getJoke = (data) => (dispatch) => {
    const { setJoke } = globalSlice.actions;

    dispatch(setJoke(data));
};

export const globalOp = {
    getJoke,
};
