/**
 * The right part will be rendered as path in the browser
 */
export enum Routes {
  TYPOGRAPHY = "typography",
  REDUX = "redux"
}

function tupleArray<T extends any[]>(...v: T) {
  return v;
}
export const MY_ROUTES = tupleArray("typography", "redux");
