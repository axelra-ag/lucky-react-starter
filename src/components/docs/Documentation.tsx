import React from "react";
import styled from "styled-components";
import {Col, Container, Row, Spacer} from "axelra-styled-bootstrap-grid";
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
      <Spacer x10 />
    </MyContainer>
  );
};
