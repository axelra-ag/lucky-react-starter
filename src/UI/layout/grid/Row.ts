import styled from "styled-components";
import {GUTTER} from "../../theme/Theme";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-left: -${GUTTER}px;
  margin-right: -${GUTTER}px;
`;
