import React from "react";
import styled from "styled-components";
import {Flex} from "../../../UI/layout/grid/Flex";
import {Container} from "../../../UI/layout/grid/Container";
import {Row} from "../../../UI/layout/grid/Row";
import {Col} from "../../../UI/layout/grid/Col";
import {__COLORS, __GRAY_SCALE, GUTTER} from "../../../UI/theme/Theme";
import {getAlphaColor} from "../../../helpers/get-alpha-color";
import {Spacer} from "../../../UI/layout/spacer/Spacer";
import {
  SectionBox,
  SectionLayout,
  SectionParagraph,
  SectionTitle
} from "./Section";

const Column = styled(Col)`
  padding: ${GUTTER}px;
  background: ${getAlphaColor(0.1, __GRAY_SCALE._700)};
  border: 1px solid ${__GRAY_SCALE._400};
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
              <Column>One of three columns</Column>
              <Column>One of three columns</Column>
              <Column>One of three columns</Column>
            </Row>
          </Container>
        </SectionLayout>
        <SectionLayout>
          <Container>
            <Row>
              <Column>1 of 2</Column>
              <Column>2 of 2</Column>
            </Row>
            <Spacer x1 />
            <Row>
              <Column>1 of 3</Column>
              <Column>2 of 3</Column>
              <Column>3 of 3</Column>
            </Row>
          </Container>
        </SectionLayout>
        <SectionLayout>
          <Container>
            <Row>
              <Column lg={6}>1 of 3</Column>
            </Row>
            <Spacer x1 />
            <Row>
              <Column>1 of 3</Column>
              <Column col={5}>2 of 3 (wider)</Column>
              <Column>3 of 3</Column>
            </Row>
          </Container>
        </SectionLayout>
        ---------------------
        <SectionLayout>
          <Container>
            <Row justify="center">
              <Column lg={2} col>
                1 of 3
              </Column>
              <Column md="auto">Variable width content</Column>
              <Column lg={2} col>
                3 of 3
              </Column>
            </Row>
          </Container>
        </SectionLayout>
      </SectionBox>
    </Flex>
  );
};
