import {TypedUseSelectorHook, useSelector, shallowEqual} from "react-redux";
import {RootState} from "../reducers/store";

// Typed `useAppState` hook

// Use like this:
// const todos = useAppState(state => state.todos)

// Uses shallow equal comparison like in previous Redux, is faster

const useAppState: TypedUseSelectorHook<RootState> = <TSelected>(
  fn: (state: RootState) => TSelected,
  equalityFn: (left: TSelected, right: TSelected) => boolean = shallowEqual
) => useSelector(fn, equalityFn);

export default useAppState;
