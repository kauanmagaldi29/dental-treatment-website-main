/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: (theme) => ({ primary: "#FFFFFF", secondary: "#89DB7B", red: "#FF7D61", bisque: "#75B8EE", yellow: "#FFC170", lightYellow: "#FEF0C3", lightRed: "#FEE6DC", lightGreen: "#DFF7EA" }),
    extend: {
      colors: { secondary: "#89DB7B" },
      boxShadow: { buttonShadow: "0px 7px 15px 0px #89DB7B " },
    },
  },
  plugins: [],
};
