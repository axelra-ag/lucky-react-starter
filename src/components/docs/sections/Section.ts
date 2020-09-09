import styled from "styled-components";
import {H1, P} from "../../../UI/content/Typography";
import {__GRAY_SCALE} from "../../../UI/theme/Theme";
import {Flex} from "../../../UI/layout/grid/Flex";

export const SectionTitle = styled(H1)``;

export const SectionParagraph = styled(P)``;

export const SectionBox = styled(Flex)`
  min-height: 150px;
  border: 2px solid ${__GRAY_SCALE._200};
  width: 100%;
`;

export const SectionLayout = styled(Flex)``;

export const SectionCode = styled(Flex)`
  background: ${__GRAY_SCALE._200};
  width: 100%;
  min-height: 40px;
`;
