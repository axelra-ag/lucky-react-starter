import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, MainTheme } from "./layout/Theme";

const App: React.FC = () => {
  return (
    <div>
      <ThemeProvider theme={MainTheme}>
        <GlobalStyle />
      </ThemeProvider>
      <h1>Content</h1>
    </div>
  );
};

export default App;
