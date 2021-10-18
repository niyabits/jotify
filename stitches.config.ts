import { createStitches } from "@stitches/react";

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    fonts: {
      untitled: "'Inter', sans-serif",
    },

    space: {
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "24px",
      6: "32px",
      7: "48px",
      8: "64px",
      9: "96px",
      10: "128px",
    },

    fontSizes: {
      // type-scale.com
      // Base Font Size: 16px
      // Scale: Major Second (1.125)
      1: "0.70rem",
      2: "0.79rem",
      3: "0.88rem",
      4: "1.00rem",
      5: "1.12rem",
      6: "1.26rem",
      7: "1.42rem",
      8: "1.60rem",
      9: "1.80rem",
      10: "2.02rem",
      11: "2.28rem",
      12: "2.56rem",
      13: "2.88rem",
      14: "3.24rem",
    },
  },
});
