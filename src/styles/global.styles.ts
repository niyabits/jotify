import { globalCss } from "@/stitches";

const globalStyles = globalCss({
  // CSS Reset and BoxSizing
  "@import": [
    "url('https://fonts.googleapis.com/css2?family=PT+Sans&family=Poppins:wght@300;400;500&display=swap')",
    "url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap')",
  ],

  html: {
    boxSizing: "border-box",
  },

  "*, *:before, *:after": {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: "100%",
    font: "inherit",
    verticalAlign: "baseline",
    boxSizing: "inherit",
  },

  // Globals
  body: {
    fontSize: "16px",
    background: "$gray900",
    color: "$gray100",
    fontFamily: "$untitled",
  },

  // Sizes for headings
  // prettier-ignore
  h1: { fontSize: "$10" },
  h2: { fontSize: "$9" },
  h3: { fontSize: "$8" },
  h4: { fontSize: "$7" },
  h5: { fontSize: "$6" },
  h6: { fontSize: "$5" },
});

export default globalStyles;
