import type { TransitionOptions } from "../../../types.ts";

export const fromBot: TransitionOptions = {
  delay: 75,
  duration: 500,
  once: false,
  threshold: 0.2,
  fly: {
    x: 0,
    y: 25,
  },
};
export const fromTop: TransitionOptions = {
  delay: 75,
  duration: 500,
  once: false,
  threshold: 0.2,
  fly: {
    x: 0,
    y: -25,
  },
};

export const fromLeft: TransitionOptions = {
  delay: 100,
  duration: 500,
  once: false,
  fly: {
    x: -25,
    y: 0,
  },
};
export const fromRight: TransitionOptions = {
  delay: 100,
  duration: 500,
  once: false,
  fly: {
    x: 25,
    y: 0,
  },
};
