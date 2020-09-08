import styled from "styled-components";
import {SPACING} from "../../theme/Theme";

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 1px;
  padding: ${SPACING / 2}px ${SPACING}px;
`;
