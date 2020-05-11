import React, {useEffect} from "react";
import styled, {ThemeProviderProps} from "styled-components";
import {fetchTodos} from "../reducers/todos/actions";
import {useDispatch} from "react-redux";
import {__ALERTS, __COLORS, __GRAY_SCALE, MainTheme} from "../layout/Theme";
import {Spinner} from "../layout/UI/Spinners/Spinner";
import {Todo} from "../reducers/todos/types";
import useAppState from "../hooks/use-app-state";
import {setLightness} from "polished";

const TodosContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 300px;
    overflow: scroll;
    width: 100%;
    margin-bottom: 1em;
`;
const TodoContainer = styled.div<{theme: ThemeProviderProps<any>}>`
    &:hover {
        box-shadow: ${MainTheme.boxShadow};
    }
    transition: 0.2s ease-in-out;
    padding: 0.2rem 1.5rem;
    border: 1px solid ${__GRAY_SCALE._200};
    border-radius: 4px;
    margin: 0.3rem 0;
    display: flex;
    align-items: center;
    color: ${__COLORS.PRIMARY};
`;

const Title = styled.p`
    margin: 0 1rem;
    color: ${__COLORS.BLACK};
`;

const Label = styled.div<{bgColor: string; color: string}>`
    background: ${props => props.bgColor};
    color: ${props => props.color};
    padding: 4px 3px;
    border-radius: 4px;
    font-size: 12px;
    margin-left: auto;
    margin-right: 0.5em;
`;

type TodoProps = {
    todo: Todo;
};

const MyTodo = ({todo}: TodoProps) => {
    const color = todo.completed ? __ALERTS.SUCCESS : __ALERTS.WARNING;
    const bgColor = setLightness(0.95, color);
    return (
        <TodoContainer key={todo.id}>
            {todo.id} {"  "}
            <Title>{todo.title}</Title>
            <Label bgColor={bgColor} color={color}>
                {todo.completed ? "done" : "todo"}
            </Label>
        </TodoContainer>
    );
};
export const ReduxExample = () => {
    const {todos, loading} = useAppState(s => s.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    return (
        <div>
            {loading && <Spinner color={__COLORS.PRIMARY} />}
            <TodosContainer>
                {todos?.map(t => (
                    <MyTodo key={t.id} todo={t} />
                ))}
            </TodosContainer>
        </div>
    );
};
