import styled from "styled-components";
import {H1, P} from "axelra-styled-bootstrap-grid/dist/content/Typography";
import {Flex} from "axelra-styled-bootstrap-grid";
import {__GRAY_SCALE, SPACING} from "../../../UI/theme/theme";

export const SectionTitle = styled(H1)``;

export const SectionParagraph = styled(P)``;

export const SectionBox = styled(Flex)`
  border: 2px solid ${__GRAY_SCALE._200};
  width: 100%;
`;

export const SectionLayout = styled(Flex)`
  width: 100%;
  padding: ${SPACING * 2}px;
`;

export const SectionCode = styled(Flex)`
  background: ${__GRAY_SCALE._200};
  width: 100%;
  border-radius: 2px;
  min-height: 40px;
`;
