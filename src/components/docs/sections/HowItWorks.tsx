import React from "react";
import styled from "styled-components";
import {
  Col,
  Container,
  Flex,
  GUTTER,
  Row,
  Spacer
} from "axelra-styled-bootstrap-grid";
import {getAlphaColor} from "../../../helpers/get-alpha-color";
import {__GRAY_SCALE} from "../../../UI/theme/Theme";
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
  display: flex;
  flex-direction: row;
`;
export const HowItWorks = () => {
  return (
    <Flex flex={1} column>
      <SectionTitle>Axelra Grid Layout - How it works</SectionTitle>
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
        <SectionLayout>
          <Container>
            <Row>
              <Column sm={8} order={1}>
                sm=8
              </Column>
              <Column sm={4} order={2}>
                sm=4
              </Column>
            </Row>
            <Row>
              <Column sm>sm=true</Column>
              <Column sm>sm=true</Column>
              <Column sm>sm=true</Column>
            </Row>
          </Container>
        </SectionLayout>
        <SectionLayout>
          <Container>
            <Row>
              <Column col={12} md={8}>
                xs=12 md=8
              </Column>
              <Column col={6} md={4}>
                xs=6 md=4
              </Column>
            </Row>
            <Spacer x1 />
            <Row>
              <Column col={6} md={4}>
                xs=6 md=4
              </Column>
              <Column col={6} md={4}>
                xs=6 md=4
              </Column>
              <Column col={6} md={4}>
                xs=6 md=4
              </Column>
            </Row>
            <Row>
              <Column col={6}>xs=6 </Column>
              <Column col={6}>xs=6 </Column>
            </Row>
          </Container>
        </SectionLayout>
        <SectionLayout>
          <Container>
            <Row>
              <Column md={4}>md=4</Column>
              <Column md={4} offset={1}>
                md=4 with offset=4
              </Column>
            </Row>
          </Container>
        </SectionLayout>
      </SectionBox>
    </Flex>
  );
};
