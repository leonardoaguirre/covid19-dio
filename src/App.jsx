import Main from "containers/Main/index";
import React from "react"
import { CssBaseline } from "../node_modules/@material-ui/core/index";
import { StylesProvider } from "../node_modules/@material-ui/styles/index";
import GlobalStyle from "./commons/styles/global-style";

function App() {
    return (
        <StylesProvider injectFirst>
            <CssBaseline />
            <GlobalStyle />
            <Main/>
        </StylesProvider>
    );
}

export default App;