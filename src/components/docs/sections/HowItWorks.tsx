import React from "react";
import {Flex} from "../../../UI/layout/grid/Flex";
import {Container} from "../../../UI/layout/grid/Container";
import {Row} from "../../../UI/layout/grid/Row";
import {Col} from "../../../UI/layout/grid/Col";
import {
  SectionBox,
  SectionCode,
  SectionLayout,
  SectionParagraph,
  SectionTitle
} from "./Section";

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
        <Container>
          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
        <SectionCode flex={1}>akofskoa</SectionCode>
      </SectionBox>
    </Flex>
  );
};
