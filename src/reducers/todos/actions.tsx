import {ThunkDispatch} from "redux-thunk";
import {ActionTypes, ErrorTodos, FetchedTodos, LoadingTodos} from "./types";

export const fetchTodos = (): any => {
  return async (
    dispatch: ThunkDispatch<{}, {}, FetchedTodos | ErrorTodos | LoadingTodos>
  ) => {
    dispatch({
      type: ActionTypes.LOADING_TODOS,
      loading: true
    });

    /* fetch(`${getDomain()}/todos`, HTTP_OPTIONS(PROTOCOL_METHOD.GET))
      .then(res => res.json())
      .then((todos: Todo[]) => {
        dispatch({
          type: ActionTypes.FETCHED_TODOS,
          loading: false,
          todos
        });
      })
      .catch((error: string) => {
        dispatch({
          type: ActionTypes.ERROR_TODOS,
          error,
          loading: false
        });
      });*/
  };
};
