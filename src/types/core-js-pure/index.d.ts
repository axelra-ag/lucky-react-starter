declare module "core-js-pure/features/promise" {
  const Promise: typeof import("core-js").Promise;
  export = Promise;
}

declare module "core-js-pure/features/array/from" {
  const arrayFrom: typeof import("core-js").Array;
  export = arrayFrom.from;
}

declare module "core-js-pure/features/url-search-params" {
  // Just using type, so it's okay
  // eslint-disable-next-line no-restricted-globals
  const urlSearchParams: typeof URLSearchParams;
  export = urlSearchParams;
}

declare module "core-js-pure/features/url" {
  // Just using type, so it's okay
  // eslint-disable-next-line no-restricted-globals
  const url: typeof URL;
  export = url;
}

declare module "core-js-pure/features/map" {
  // Just using type, so it's okay
  // eslint-disable-next-line no-restricted-globals
  const map: typeof Map;
  export = map;
}

declare module "core-js-pure/features/object/assign" {
  // Just using type, so it's okay
  // eslint-disable-next-line no-restricted-globals
  const obj: typeof import("core-js").Object;
  export = obj.assign;
}
