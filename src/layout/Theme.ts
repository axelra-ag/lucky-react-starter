import { CSSProperties } from "react";
import { createGlobalStyle, ThemeProviderProps } from "styled-components";

type Props = {
  googleUrl: string;
};
export const MainTheme: CSSProperties & Props = {
  fontFamily: "Gothic A1, sans-serif",
  googleUrl: "https://fonts.googleapis.com/css?family=Gothic+A1:200,400,700"
  // add more general CSS properties here
};

// You can either import a Google Font: https://fonts.google.com
// Or declare a custom font: https://tinyurl.com/y6omstqa
// eslint-disable-next-line no-unexpected-multiline
export const GlobalStyle = createGlobalStyle<{
  theme: ThemeProviderProps<any>;
}>`
  @import url(${MainTheme.googleUrl});
  html {
    font-family: ${(p: ThemeProviderProps<any>) => p.theme.fontFamily};
  }
  body {
    padding: 0;
    margin: 0;
    border: 0;
    line-height: 1;
    font-weight: inherit;
    font-style: inherit;
    font-size: 100%;
    font-family: inherit;
  }
`;

// Colors Palette https://colorhunt.co/
export enum __COLORS {
  PRIMARY = "#f38181",
  SECONDARY = "#fce38a",
  TERTRIARY = "#eaffd0",
  FOURTH = "#95e1d3",
  WHITE = "#fff",
  BLACK = "#000"
}
export enum __GRAY_SCALE {
  _WHITE = "#fff",
  _100 = "#f6f9fc",
  _200 = "#e9ecef",
  _300 = "#dee2e6",
  _400 = "#ced4da",
  _500 = "#adb5bd",
  _600 = "#8898aa",
  _700 = "#525f7f",
  _800 = "#32325d",
  _900 = "#212529",
  _BLACK = "#000"
}
