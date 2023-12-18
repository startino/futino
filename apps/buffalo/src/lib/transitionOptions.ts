import type { TransitionOptions } from "lorc";

export const downFadePreset: TransitionOptions = {
  delay: 75,
  duration: 400,
  once: false,
  threshold: 0.2,
  fly: {
    x: 0,
    y: 25,
  },
};
export const fromTopPreset: TransitionOptions = {
  delay: 75,
  duration: 400,
  once: false,
  threshold: 0.2,
  fly: {
    x: 0,
    y: -25,
  },
};

export const fromLeftPreset: TransitionOptions = {
  delay: 100,
  duration: 500,
  once: false,
  fly: {
    x: -25,
    y: 0,
  },
};
export const fromRightPreset: TransitionOptions = {
  delay: 100,
  duration: 500,
  once: false,
  fly: {
    x: 25,
    y: 0,
  },
};
