import React from "react";
import styled from "styled-components";
import {Container} from "../UI/layout/Container";
import {__COLORS, SPACING} from "../UI/theme/Theme";
import {Icon, IconTypes} from "./views/Icon";

const MyIcon = styled(Icon)``;

export const Documentation = () => {
  return (
    <Container>
      <MyIcon name={IconTypes.PICTURE} color={__COLORS.CTA} />
    </Container>
  );
};
