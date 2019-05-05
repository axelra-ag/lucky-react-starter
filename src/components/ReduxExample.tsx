import React, { Component } from "react";
import styled from "styled-components";
import { RootState } from "../reducers/store";
import { Dispatch } from "redux";
import { fetchTodos } from "../reducers/todos/actions";
import { connect } from "react-redux";
import { Todo } from "../model/Todo";

const Container = styled.div``;

type State = {};
type Props = {
  loading: boolean;
  todos: Todo[];
  fetchTodos: () => any;
};

class ReduxExample extends Component<Props, State> {
  state = {};

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return <Container>ReduxExample Component</Container>;
  }
}

export default connect(
  (state: RootState) => ({
    todos: state.todos.todos,
    loading: state.todos.loading
  }),
  (dispatch: Dispatch) => {
    return {
      fetchTodos: () => {
        dispatch(fetchTodos());
      }
    };
  }
)(ReduxExample);
