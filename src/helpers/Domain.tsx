export const getDomain = () => {
  if (isProduction()) {
    // TODO: insert prod url
    return "https://jsonplaceholder.typicode.com/todos/1";
  }
  // TODO: insert prod url
  return "localhost:8080";
};

const isProduction = () => {
  return process.env.NODE_ENV === "production";
};
