import styled from "styled-components";
import {GUTTER} from "../../theme/Theme";

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 1px;
  flex-basis: 0;
  max-width: 100%;
  padding: 0 ${GUTTER}px;
`;
