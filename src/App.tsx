import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { globalOp, globalSel } from "./store/global";
import { useAppDispatch, useAppSelector } from "./store/configureStore";

const App = () => {
    const dispatch = useAppDispatch();
    const { getJoke } = globalOp;
    const joke = useAppSelector(globalSel.jokeSelector);

    useEffect(() => {
        dispatch(getJoke());
    }, []);

    return <Typography>{joke?.value}</Typography>;
};

export default App;
