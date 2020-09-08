import styled from "styled-components";

export const Flex = styled.div<{
  flex?: number;
  row?: boolean;
  column?: boolean;
}>`
  flex: ${props => props.flex || 1};
  display: ${props => (props.row || props.column ? "flex" : "block")};
  flex-direction: ${props => (props.row ? "row" : "column")};
`;
