import styled from "styled-components";
import {GUTTER} from "../../theme/Theme";
import {__MEDIA_QUERY_BREAK_POINT, makeQuery} from "../media-query/Mobile";

type ColAttribute = number | boolean | "auto";

const getBreakPoint = (
  sm?: ColAttribute,
  md?: ColAttribute,
  lg?: ColAttribute,
  xl?: ColAttribute
): __MEDIA_QUERY_BREAK_POINT | null => {
  if (sm) return __MEDIA_QUERY_BREAK_POINT.SMALL;
  if (md) return __MEDIA_QUERY_BREAK_POINT.MEDIUM;
  if (lg) return __MEDIA_QUERY_BREAK_POINT.LARGE;
  if (xl) return __MEDIA_QUERY_BREAK_POINT.EXTRA_LARGE;
  return null;
};

const getDimension = (n: number) => {
  return (n / 12) * 100;
};

const getFlex = (t: ColAttribute) =>
  Number.isInteger(t) ? `${getDimension(t as number)}%` : "auto";

const getMediaQuery = (
  sm?: ColAttribute,
  md?: ColAttribute,
  lg?: ColAttribute,
  xl?: ColAttribute
): string => {
  const breakPoint = getBreakPoint(sm, md, lg, xl);
  if (!breakPoint) return "";
  if (!sm && !md && !lg && !xl) return "";
  return makeQuery(breakPoint)(`
      flex: 0 0 ${getFlex((sm ? sm : md ? md : lg ? lg : xl) as ColAttribute)}; 
      max-width: ${getFlex(
        (sm ? sm : md ? md : lg ? lg : xl) as ColAttribute
      )}; 
  `);
};

export const Col = styled.div<{
  sm?: ColAttribute;
  md?: ColAttribute;
  lg?: ColAttribute;
  xl?: ColAttribute;
}>`
  ${({sm, md, lg, xl}) => getMediaQuery(sm, md, lg, xl)};
  position: relative;
  padding: 0 ${GUTTER}px;
  width: 100%;
`;
