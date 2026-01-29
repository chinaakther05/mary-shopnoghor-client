import daisyui from "daisyui";

export default {
  darkMode: "class", // must
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"], // light + dark
  },
};
