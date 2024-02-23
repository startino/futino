const colors = {
	border: "rgb(var(--primary) / 0.3)",
	input: "rgb(var(--input) )",
	ring: "rgb(var(--ring) )",
	background: "rgb(var(--background) )",
	foreground: "rgb(var(--foreground) )",
	primary: {
		DEFAULT: "rgb(var(--primary) )", // 500
		foreground: "rgb(var(--primary-foreground) )",
		50: "#f1fcf9",
		100: "#cef9ec",
		200: "#9df2d9",
		300: "#65e3c3",
		400: "#35ccab",
		500: "#199f84", // src
		600: "#138e78",
		700: "#147161",
		800: "#155a50",
		900: "#164b43",
		950: "#062d28"
	},
	secondary: {
		DEFAULT: "rgb(var(--secondary) )", // 500 , same as primary
		foreground: "rgb(var(--secondary-foreground) )",
		50: "#eef6ff",
		100: "#daebff",
		200: "#bcddff",
		300: "#8fc8ff",
		400: "#5aa8ff",
		500: "#3485fd",
		600: "#1d65f3",
		700: "#164fdf",
		800: "#1841b5",
		900: "#1c409b", // src
		950: "#152656"
	},
	accent: {
		DEFAULT: "rgb(var(--accent) )", // 400
		foreground: "rgb(var(--accent-foreground) )",
		50: "#f6f5f0",
		100: "#eae3d7",
		200: "#d6c9b2",
		300: "#bea786",
		400: "#b19470", // source
		500: "#9c7a56",
		600: "#856349",
		700: "#6c4c3c",
		800: "#5c4237",
		900: "#503a33",
		950: "#2d1f1b"
	},
	destructive: {
		DEFAULT: "rgb(var(--destructive) )",
		foreground: "rgb(var(--destructive-foreground) )"
	},
	muted: {
		DEFAULT: "rgb(var(--muted) )",
		foreground: "rgb(var(--muted-foreground) )"
	},

	popover: {
		DEFAULT: "rgb(var(--popover) )",
		foreground: "rgb(var(--popover-foreground) )"
	},
	card: {
		DEFAULT: "rgb(var(--card) )",
		foreground: "rgb(var(--card-foreground) )"
	}
};

module.exports = colors;
