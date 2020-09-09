import React from "react";
import styled from "styled-components";
import {Container} from "../../UI/layout/grid/Container";
import {Col} from "../../UI/layout/grid/Col";
import {Row} from "../../UI/layout/grid/Row";
import {Flex} from "../../UI/layout/grid/Flex";
import {__GRAY_SCALE, SPACING} from "../../UI/theme/Theme";
import {HowItWorks} from "./sections/HowItWorks";

const MyContainer = styled(Container)`
  background: beige;
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
      {/*<Row>
        <Column>
          <Flex row flex={1}>
            <Flex flex={1}>skofajosfjoa</Flex>
            <Flex row flex={2} justify="flex-end">
              kookko
            </Flex>
          </Flex>
        </Column>
        <Column>Second Column</Column>
        <Column>Third Column</Column>
      </Row>*/}
    </MyContainer>
  );
};
