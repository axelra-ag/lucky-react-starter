import {ThunkDispatch} from "redux-thunk";
import {fetch as fetchPolyfill} from "whatwg-fetch";
import {
  createRequest,
  HTTP_REQUEST_METHODS
} from "../../helpers/create-request";
import {baseURL} from "../../api";
import {ActionTypes, ErrorTodos, FetchedTodos, LoadingTodos} from "./types";

export const fetchTodos = (): any => {
  return async (
    dispatch: ThunkDispatch<{}, {}, FetchedTodos | ErrorTodos | LoadingTodos>
  ) => {
    dispatch({
      type: ActionTypes.LOADING_TODOS,
      loading: true
    });

    const response = await fetchPolyfill(
      `${baseURL}/todos`,
      createRequest({method: HTTP_REQUEST_METHODS.GET})
    );
    const json = await response.json();
    const {error, todos} = json;
    if (!json.success) {
      dispatch({
        type: ActionTypes.ERROR_TODOS,
        error,
        loading: false
      });
    } else {
      dispatch({
        type: ActionTypes.FETCHED_TODOS,
        loading: false,
        todos
      });
    }
  };
};
