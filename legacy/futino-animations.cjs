export const animationConfig = {
  wiggle: "wiggle 1s ease-in-out infinite",
  slideDown: "slideDown 5s ease-in-out 1",
  scroll: "scroll 5s ease-in-out",
};

export const keyframesConfig = {
  wiggle: {
    "0%, 100%": { transform: "rotate(-3deg)" },
    "50%": { transform: "rotate(3deg)" },
  },
  slideDown: {
    "0%, 100%": { transform: "translate(0%, -200%)", opacity: 0 },
    "1%, 99%": { opacity: 1 },
    "20%, 70%": { transform: "translate(0%, 0%)" },
  },
  scroll: {
    "0%": { transform: "translateY(0%)" },
    "100%": { transform: "translateY(100%)" },
  },
};


