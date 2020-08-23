export const getDomain = () => {
  if (isProduction()) {
    // eslint-disable-next-line no-warning-comments
    // TODO: insert prod url
    return "https://jsonplaceholder.typicode.com";
  }
  // eslint-disable-next-line no-warning-comments
  // TODO: change this with localhost
  return "https://jsonplaceholder.typicode.com";
};

const isProduction = () => {
  return process.env.NODE_ENV === "production";
};
