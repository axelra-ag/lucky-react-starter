export enum HTTP_REQUEST_METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE"
}
export const createRequest = (options: RequestInit = {}) => {
  const {headers = {}, method, ...customOptions} = options;
  return {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers
    },
    ...customOptions
  };
};
