import React from "react";
import styled from "styled-components";
import {Flex} from "../../../UI/layout/grid/Flex";
import {Container} from "../../../UI/layout/grid/Container";
import {Row} from "../../../UI/layout/grid/Row";
import {Col} from "../../../UI/layout/grid/Col";
import {__COLORS, GUTTER, SPACING} from "../../../UI/theme/Theme";
import {getAlphaColor} from "../../../helpers/get-alpha-color";
import {Spacer} from "../../../UI/layout/spacer/Spacer";
import {
  SectionBox,
  SectionCode,
  SectionLayout,
  SectionParagraph,
  SectionTitle
} from "./Section";

const Column = styled(Col)`
  padding: ${GUTTER}px;
  background: ${getAlphaColor(0.1, __COLORS.CTA)};
  border: 1px solid ${__COLORS.CTA};
`;
export const HowItWorks = () => {
  return (
    <Flex flex={1} column>
      <SectionTitle>How it works</SectionTitle>
      <SectionParagraph>
        Bootstrap’s grid system uses a series of containers, rows, and columns
        to layout and align content. It’s built with flexbox and is fully
        responsive. Below is an example and an in-depth look at how the grid
        comes together.
      </SectionParagraph>
      <SectionParagraph>
        New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide
        for background, terminology, guidelines, and code snippets.
      </SectionParagraph>

      <SectionBox flex={1} column>
        <SectionLayout>
          <Container>
            <Row>
              <Column sm={4}>1 of 3</Column>
              <Column sm={2}>2 of 3</Column>
              <Column sm={6}>3 of 3</Column>
            </Row>
          </Container>
          <Container>
            <Row>
              <Column md={8}>md=8</Column>
            </Row>
          </Container>
          <Container>
            <Row>
              <Column md={8}>1 of 3</Column>
              <Column>2 of 3</Column>
              <Column>3 of 3</Column>
            </Row>
          </Container>
          <Container>
            <Row>
              <Column>1 of 3</Column>
              <Column>2 of 3</Column>
              <Column>3 of 3</Column>
            </Row>
          </Container>
        </SectionLayout>
        <SectionCode flex={1}>
          <code>{"afajosfoasjf\nasfasfj"}</code>
        </SectionCode>
      </SectionBox>
    </Flex>
  );
};
