export const getDomain = () => {
  if (isProduction()) {
    // TODO: insert prod url
    return "";
  }
  // TODO: change this with localhost
  return "https://jsonplaceholder.typicode.com";
};

const isProduction = () => {
  return process.env.NODE_ENV === "production";
};
