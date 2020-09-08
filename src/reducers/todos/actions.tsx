import {ThunkDispatch} from "redux-thunk";
import {fetch as fetchPolyfill} from "whatwg-fetch";
import {getDomain} from "../../helpers/get-domain";
import {PROTOCOL_METHOD} from "../../helpers/get-fetch-options";
import {
  ActionTypes,
  ErrorTodos,
  FetchedTodos,
  LoadingTodos,
  Todo
} from "./types";

export const fetchTodos = (): any => {
  return async (
    dispatch: ThunkDispatch<{}, {}, FetchedTodos | ErrorTodos | LoadingTodos>
  ) => {
    dispatch({
      type: ActionTypes.LOADING_TODOS,
      loading: true
    });

    /*    fetchPolyfill(`${getDomain()}/todos`, HTTP_OPTIONS(PROTOCOL_METHOD.GET))
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
