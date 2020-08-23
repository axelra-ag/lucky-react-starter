// noinspection Stylelint
import {transparentize} from "polished";

export const getAlphaColor = (alpha: number, color: string) => {
  return transparentize(1 - alpha, color);
};
