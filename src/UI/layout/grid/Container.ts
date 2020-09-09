import styled, {css} from "styled-components";
import {
  __MEDIA_QUERY_BREAK_POINT,
  EXTRA_LARGE_DEVICES_BREAK_POINT,
  LARGE_DEVICES_BREAK_POINT,
  makeQuery,
  MEDIUM_DEVICES_BREAK_POINT,
  SMALL_DEVICES_BREAK_POINT
} from "../media-query/Mobile";
import {SPACING} from "../../theme/Theme";

// with props use this:
// ${props => mediaQueries("md")(`width: ${props.width}px`)}
const media = css`
  ${makeQuery(__MEDIA_QUERY_BREAK_POINT.SMALL)(`
      max-width: ${SMALL_DEVICES_BREAK_POINT}px
  `)};

  ${makeQuery(__MEDIA_QUERY_BREAK_POINT.MEDIUM)(`
      max-width: ${MEDIUM_DEVICES_BREAK_POINT}px;
  `)};

  ${makeQuery(__MEDIA_QUERY_BREAK_POINT.LARGE)(`
      max-width: ${LARGE_DEVICES_BREAK_POINT}px
  `)};

  ${makeQuery(__MEDIA_QUERY_BREAK_POINT.EXTRA_LARGE)(`
      max-width: ${EXTRA_LARGE_DEVICES_BREAK_POINT}px
  `)};
`;

export const Container = styled.div`
  ${media};
  padding-right: ${SPACING}px;
  padding-left: ${SPACING}px;
  margin-right: auto;
  margin-left: auto;
`;
