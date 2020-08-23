declare module "whatwg-fetch" {
  export function fetch(
    input: RequestInfo,
    init?: RequestInit
  ): Promise<Response>;
}
