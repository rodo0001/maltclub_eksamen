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
        xsmall: ["1.063rem", { lineHeight: "1.188rem" }],
        small: ["1.438rem", { lineHeight: "1.563rem" }],
        medium: ["2.25rem", { lineHeight: "2.5rem" }],
        large: ["3.125rem", { lineHeight: "3.25rem" }],
        xlarge: ["3.438rem", { lineHeight: "3.563rem" }],
        "2xlarge": ["3.75rem", { lineHeight: "3.875rem" }],
        "3xlarge": ["5rem", { lineHeight: "5.125rem" }],
        "4xlarge": ["5.625rem", { lineHeight: "5.75rem" }],
        "5xlarge": ["9.375rem", { lineHeight: "9.375rem" }],
      },

      //H1-Large: 5xlarge: 150 px - linehigh 150px
      //H2-Large: 4xlarge: 90 px - linehigh 92px
      //H1-Medium: 3xlarge: 80 px - linehigh 82px
      //H2-Medium: 2xlarge: 60px px - linehigh 62pxd
      //H1-Small: Xlarge: 55px px - linehigh 57px
      //H2-Small: large: 50px px - linehigh 52px
      //H3-Large: medium:  36px - linehigh 38px
      //H3-Medium: small: 23px - linehigh 25px
      //H3-Small: xsmall: 17px - linehigh 19px
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

    animation: {
      "infinite-scroll": "infinite-scroll 25s linear infinite",
    },
    keyframes: {
      "infinite-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
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
