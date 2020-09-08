import React from "react";
import styled from "styled-components";
import {Container} from "../../UI/layout/grid/Container";
import {Col} from "../../UI/layout/grid/Col";
import {Row} from "../../UI/layout/grid/Row";
import {Flex} from "../../UI/layout/grid/Flex";

const MyContainer = styled(Container)`
  background: aqua;
`;

const Column = styled(Col)``;

export const Documentation = () => {
  return (
    <MyContainer>
      <Row>
        <Flex flex={2} row>
          <Column>First Column</Column>
        </Flex>
        <Flex flex={1} column>
          <Column>Second Column</Column>
          <Column>Third Column</Column>
        </Flex>
      </Row>
    </MyContainer>
  );
};
