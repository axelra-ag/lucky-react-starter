import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {ThemeProvider} from "styled-components";
import App from "./App";
import {GlobalStyle, MainTheme} from "./UI/theme/theme";
import store from "./reducers/store";

const MyApp = () => {
  return (
    <Fragment>
      <ThemeProvider theme={MainTheme}>
        <GlobalStyle />
      </ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </Fragment>
  );
};

ReactDOM.render(<MyApp />, document.getElementById("root"));
