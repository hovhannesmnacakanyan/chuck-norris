import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import { Store } from "store/configureStore";

import { MuiTheme } from "theme/theme";
import { ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={Store()}>
            <ThemeProvider theme={MuiTheme}>
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);
