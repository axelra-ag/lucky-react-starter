import React from "react";
import styled from "styled-components";
import {Container} from "../../UI/layout/container/Container";
import {__COLORS, SPACING} from "../../UI/theme/Theme";
import {Icon, IconTypes} from "../views/Icon";

const MyIcon = styled(Icon)``;

const Row = styled(Container)`
  background: red;
  min-height: 400px;
`;

export const Documentation = () => {
  return (
    <Row>
      <MyIcon
        name={IconTypes.PICTURE}
        color={__COLORS.CTA}
        size={SPACING * 3}
      />
    </Row>
  );
};
