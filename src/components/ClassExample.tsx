import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div``;

type State = {};
type Props = {};

class ClassExample extends Component<Props, State> {
  state = {};

  componentDidMount() {}

  render() {
    return <Container>ClassExample Component</Container>;
  }
}

export default ClassExample;
