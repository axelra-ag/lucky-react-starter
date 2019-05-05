import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div``;

type State = {};
type Props = {};

class ReduxExample extends Component<Props, State> {
  state = {};

  componentDidMount() {}

  render() {
    return <Container>ReduxExample Component</Container>;
  }
}

export default ReduxExample;
