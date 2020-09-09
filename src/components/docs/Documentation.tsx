import React from "react";
import styled from "styled-components";
import {Container} from "../../UI/layout/grid/Container";
import {Col} from "../../UI/layout/grid/Col";
import {Row} from "../../UI/layout/grid/Row";
import {SPACING} from "../../UI/theme/Theme";
import {HowItWorks} from "./sections/HowItWorks";

const MyContainer = styled(Container)`
  margin-top: ${SPACING * 4}px;
`;

const Column = styled(Col)``;

export const Documentation = () => {
  return (
    <MyContainer>
      <Row>
        <Column>
          <HowItWorks />
        </Column>
      </Row>
    </MyContainer>
  );
};
