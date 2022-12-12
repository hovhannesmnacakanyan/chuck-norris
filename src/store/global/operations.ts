import { globalSlice } from "./globalSlice";
import HttpService from "services";
import { AppDispatch } from "../configureStore";

const getJoke = () => {
    const { setJoke } = globalSlice.actions;
    const { GET } = HttpService();

    return async (dispatch: AppDispatch) => {
        try {
            const { data } = await GET("https://api.chucknorris.io/jokes/random");

            dispatch(setJoke(data));
        } catch (error) {
            return error;
        }
    };
};

export const globalOp = {
    getJoke,
};
