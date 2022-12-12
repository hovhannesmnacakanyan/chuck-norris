import { JokeInterface } from "./globalSlice";

export const initialGlobalState = (): JokeInterface => {
    return {
        joke: null,
    };
};
