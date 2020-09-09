import styled from "styled-components";
import {GUTTER} from "../../theme/Theme";
import {Flex} from "./Flex";

export const Row = styled(Flex)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -${GUTTER}px;
  margin-right: -${GUTTER}px;
`;
