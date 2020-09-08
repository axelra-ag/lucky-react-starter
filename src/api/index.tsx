import {fetch as fetchPolyfill} from "whatwg-fetch";
import isEmpty from "lodash/isEmpty";
import {useMemo} from "react";
import {createRequest, HTTP_REQUEST_METHODS} from "../helpers/create-request";

const baseURL = process.env.REACT_APP_API_ENDPOINT || "/api";

const makeRequest = async (
  endpoint: string,
  method: HTTP_REQUEST_METHODS,
  options: RequestInit = {}
) => {
  const response = await fetchPolyfill(
    `${baseURL}${endpoint}`,
    createRequest({method, ...options})
  );
  const json = await response.json();
  if (!json.success) {
    throw new Error(json.error);
  }
  return json.data;
};

const get = (endpoint: string) =>
  makeRequest(endpoint, HTTP_REQUEST_METHODS.GET);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const post = (endpoint: string, payload: any) =>
  makeRequest(endpoint, HTTP_REQUEST_METHODS.POST, {
    ...(payload ? {body: JSON.stringify(payload)} : {})
  });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const put = (endpoint: string, payload: any) =>
  makeRequest(endpoint, HTTP_REQUEST_METHODS.PUT, {
    ...(payload ? {body: JSON.stringify(payload)} : {})
  });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const del = (endpoint: string, payload: any) =>
  makeRequest(endpoint, HTTP_REQUEST_METHODS.DELETE, {
    ...(payload ? {body: JSON.stringify(payload)} : {})
  });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getParams = (data: any) => {
  const query = Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
  return !isEmpty(data) ? "?" + query : query;
};

export const useApi = () => {
  return useMemo(() => {
    return {
      todos: {
        get: () => get("/")
      }
    };
  }, []);
};
