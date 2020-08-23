import {css} from "styled-components";

// Extra small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap
export const SMALL_DEVICES_BREAK_POINT = 576;
export const MEDIUM_DEVICES_BREAK_POINT = 768;
export const LARGE_DEVICES_BREAK_POINT = 992;
export const EXTRA_LARGE_DEVICES_BREAK_POINT = 1200;

export const SMALL = (...args: any) => css`
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: ${SMALL_DEVICES_BREAK_POINT}px) {
    ${css`
      ${args};
    `};
  }
`;

export const MEDIUM = (...args: any) => css`
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: ${MEDIUM_DEVICES_BREAK_POINT}px) {
    ${css`
      ${args};
    `};
  }
`;

export const LARGE = (...args: any) => css`
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: ${LARGE_DEVICES_BREAK_POINT}px) {
    ${css`
      ${args};
    `};
  }
`;

export const EXTRA_LARGE = (...args: any) => css`
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: ${EXTRA_LARGE_DEVICES_BREAK_POINT}px) {
    ${css`
      ${args};
    `};
  }
`;
