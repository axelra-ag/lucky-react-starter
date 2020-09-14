import React from "react";
import styled from "styled-components";
import {Col, Container, Row, Spacer} from "axelra-styled-bootstrap-grid";
import {SPACING} from "../../UI/theme/Theme";

const MyContainer = styled(Container)`
  margin-top: ${SPACING * 4}px;
`;

const Column = styled(Col)``;

export const Documentation = () => {
  return (
    <MyContainer fluid>
      <Spacer x10 />
      <Row>
        <Column>asfasf</Column>
      </Row>
    </MyContainer>
  );
};
