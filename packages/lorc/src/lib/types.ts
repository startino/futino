/**
 * This type alias is to identify CSS classes within component props,
 * which enables Tailwind IntelliSense
 */
export type CssClasses = string;

export type SvelteEvent<E extends Event = Event, T extends EventTarget = Element> = E & { currentTarget: EventTarget & T };

export type StyleVariants = {
  [name: string]: {
    colors: CssClasses[];
    border: CssClasses;
    padding: CssClasses;
    radius: CssClasses;
    typography: CssClasses;
    margin: CssClasses;
  };
};

export type IconType = string;
enum IconKeys {
  NONE,
  PHONE,
  Email,
} 
