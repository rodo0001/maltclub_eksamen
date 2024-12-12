/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  /* primitives - color */
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      grey: {
        950: "rgba(23, 23, 23, 1)",
        900: "rgba(48, 48, 48, 1)",
        800: "rgba(94, 94, 94, 1)",
        700: "rgba(143, 143, 143, 1)",
        600: "rgba(189, 189, 189, 1)",
        500: "rgba(236, 236, 236, 1)",
        400: "rgba(240, 240, 240, 1)",
        300: "rgba(245, 245, 245, 1)",
        200: "rgba(247, 247, 247, 1)",
        100: "rgba(252, 252, 252, 1)",
        50: "rgba(252, 252, 252, 1)",
      },
      rosa: {
        950: "rgba(28, 18, 18, 1)",
        900: "rgba(55, 37, 37, 1)",
        800: "rgba(107, 71, 71, 1)",
        700: "rgba(159, 111, 111, 1)",
        600: "rgba(196, 166, 166, 1)",
        500: "rgba(231, 219, 219, 1)",
        400: "rgba(237, 227, 227, 1)",
        300: "rgba(241, 234, 234, 1)",
        200: "rgba(245, 240, 240, 1)",
        100: "rgba(251, 249, 249, 1)",
        50: "rgba(253, 252, 252, 1)",
      },
      orange: {
        950: "rgba(30, 19, 1, 1)",
        900: "rgba(60, 37, 1, 1)",
        800: "rgba(120, 75, 3, 1)",
        700: "rgba(180, 112, 3, 1)",
        600: "rgba(245, 153, 4, 1)",
        500: "rgba(251, 176, 60, 1)",
        400: "rgba(252, 194, 100, 1)",
        300: "rgba(253, 208, 135, 1)",
        200: "rgba(253, 223, 175, 1)",
        100: "rgba(253, 240, 215, 1)",
        50: "rgba(255, 247, 235, 1)",
      },
      blue: {
        950: "rgba(0, 1, 5, 1)",
        900: "rgba(0, 1, 10, 1)",
        800: "rgba(1, 2, 20, 1)",
        700: "rgba(2, 4, 30, 1)",
        600: "rgba(3, 5, 39, 1)",
        500: "rgba(2, 6, 48, 1)",
        400: "rgba(6, 17, 137, 1)",
        300: "rgba(8, 27, 225, 1)",
        200: "rgba(79, 93, 248, 1)",
        100: "rgba(167, 174, 251, 1)",
        50: "rgba(212, 214, 253, 1)",
      },
      white: "#fff",
      black: "#000",
    },
    extend: {
      /* Tilføj din egen spacing nedenfor */
      // spacing: {
      //     'm': '40px',
      // },

      /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Primær font til body og mindre overskrifter
        display: ["Koulen", "sans-serif"], // Font til h1 og h2
      },

      /* Tilføj dit typografiske hierarki herunder */

      fontSize: {
        body: ["1rem", { lineHeight: "1.5rem" }],
        xsmall: ["0.5rem", { lineHeight: "0.75rem" }],
        small: ["0.75rem", { lineHeight: "1rem" }],
        medium: ["4.375rem", { lineHeight: "4.5rem" }],
        large: ["5.625rem", { lineHeight: "5.625rem" }],
        xlarge: ["9.75rem", { lineHeight: "8.125rem" }],
        // "2xlarge": ["2rem", { lineHeight: "2.25rem" }],
        // "3xlarge": ["2.5rem", { lineHeight: "2.75rem" }],
        // "4xlarge": ["3rem", { lineHeight: "3.25rem" }],
        // "5xlarge": ["3.625rem", { lineHeight: "3.875rem" }],
        // "6xlarge": ["5.875rem", { lineHeight: "6.125rem" }],
      },
      // 6xlarge 94px - linehigh 98
      // 5xlarge: 58 px - linehigh 62px
      // 4xlarge: 48 px - linehigh 52px
      // 3xlarge: 40 px - linehigh 44px
      // 2xlarge: 32 px - linehigh 36px
      // Xlarge: 150 px - linehigh 130px
      // large: 18 px - linehigh 22px
      // medium: 14 px - linehigh 18px
      // small: 12 px - linehigh 16 px
      // xsmall: 8 px - linehigh 12 px
      // Body: 16px - linehigh 24px

      fontWeight: {
        regular: "400",
        Bold: "700",
      },
      borderWidth: {
        DEFAULT: "2px",
        0: "0px",
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        10: "10px",
      },
      borderRadius: {
        DEFAULT: "34px",
        none: "0px",
        sm: "10px",
        md: "24px",
        lg: "44px",
        full: "9999px",
      },
      boxShadow: {
        drop25: "0px 4px 4px 0px rgba(76, 73, 65, 0.25)", //* x y blur spread farve / 25% opacity */,
        drop50: "4px 4px 4px 0px rgba(76, 73, 65, 0.50)", // * x y blur spread farve / 50% opacity */,
        inner25: "inset 0px 4px 4px 0px rgba(222, 220, 216, 0.25)", // * x y blur spread farve / 25% pacity */,
        inner50: "inset 0px 4px 4px 0px rgba(222, 220, 216, 0.50)", //* x y blur spread farve / 50% opacity */,
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],

  //   keyframes: {
  //     bounce: {
  //       "0%, 100%": { transform: "translateY(-10px)", animationTimingFunction: "ease-in-out" },
  //       "50%": { transform: "translateY(0)", animationTimingFunction: "ease-in-out" },
  //     },
  //   },
  //   animation: {
  //     bounce: "bounce 1s infinite",
  //   },
  // };
};

// Hvis jeg skal tilføje en keyfreame så skal "};" være den sidste lukke knap for alt.
// så keyframes skal ind efter plugins
