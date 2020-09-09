import styled from "styled-components";
import {GUTTER} from "../../theme/Theme";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -${GUTTER}px;
  margin-right: -${GUTTER}px;
`;
