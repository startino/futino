/**
 * This type alias is to identify CSS classes within component props,
 * which enables Tailwind IntelliSense
 */
export type CssClasses = string;

export type SvelteEvent<E extends Event = Event, T extends EventTarget = Element> = E & { currentTarget: EventTarget & T };

export type IconType = string;
enum IconKeys {
  NONE,
  PHONE,
  Email,
}

export type TransitionOptions = {
  top?: number;
  bottom?: number;
  once?: boolean;
  animation?: Animation | string;
  delay?: number;
  duration?: number;
  fly?:
  | {
    x: number;
    y: number;
  }
  | undefined;
  axis?: "x" | "y";
  threshold?: number;
};

export enum Animation {
  flyIn,
  SomeOtherAnimation,
}

