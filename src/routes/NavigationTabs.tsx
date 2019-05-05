import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { __COLORS } from "../layout/Theme";
import MyIcon, { IconTypes } from "../views/Icon";

const Container = styled.div`
  display: flex;
`;

type Props = {};

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const NavigationLink = styled(NavLink)`
  &:hover {
    transform: translateY(2px);
  }
  border-radius: 5px;
  transition: 0.25s all;
  position: relative;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 1rem;
  color: ${__COLORS.PRIMARY}
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  margin: 0 10px;
  cursor: pointer;

  &.${props => props.activeClassName} {
    & ${IconContainer} {
      & > svg {
        fill: #fff;
      }
    }
    background-color: ${__COLORS.PRIMARY};
    color: #fff;
  }
`;

NavigationLink.defaultProps = {
  activeClassName: "active"
};

const NavigationTabs = () => {
  return (
    <Container>
      <NavigationLink to={"/typography"}>
        <IconContainer>
          <MyIcon name={IconTypes.TYPOGRAPHY} color={__COLORS.PRIMARY} />
          <small>Typography</small>
        </IconContainer>
      </NavigationLink>

      <NavigationLink to={"/redux"}>
        <IconContainer>
          <MyIcon name={IconTypes.REDUX} color={__COLORS.PRIMARY} />
          <small>Redux</small>
        </IconContainer>
      </NavigationLink>
    </Container>
  );
};

export default NavigationTabs;
