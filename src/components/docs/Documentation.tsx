import React from "react";
import styled from "styled-components";
import {Col, Container, Row, Spacer} from "axelra-styled-bootstrap-grid";
import {SPACING} from "../../UI/theme/theme";
import {HowItWorks} from "./sections/HowItWorks";

const MyContainer = styled(Container)`
  margin-top: ${SPACING * 4}px;
`;

const Column = styled(Col)``;

export const Documentation = () => {
  return (
    <MyContainer>
      <Spacer x10 />
      <Row>
        <Column>
          <HowItWorks />
        </Column>
      </Row>
    </MyContainer>
  );
};
