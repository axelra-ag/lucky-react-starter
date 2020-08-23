import {CSSProperties} from "react";
import {createGlobalStyle, ThemeProviderProps} from "styled-components";

type Props = {
  googleUrl: string;
};
export const MainTheme: CSSProperties & Props = {
  fontFamily: "Gothic A1, sans-serif",
  googleUrl: "https://fonts.googleapis.com/css?family=Gothic+A1:200,400,700",
  boxShadow: "0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08)"
  // add more general CSS properties here
};

// Colors Palette https://colorhunt.co/
export enum __COLORS {
  PRIMARY = "#f38181",
  SECONDARY = "#fce38a",
  TERTRIARY = "#eaffd0",
  FOURTH = "#95e1d3",
  WHITE = "#fff",
  BLACK = "#000"
}

export const SPACING = 8;

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

export enum __ALERTS {
  INFO = "#11cdef",
  SUCCESS = "#2ece89",
  WARNING = "#fb6240",
  ERROR = "#f5365c"
}
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
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
