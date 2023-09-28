/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      Main_accent: "#D6F0CD",
      Second_accent: "#FAE651",
      Warning_Alert: "#7B61FF",
      Main_Fonts: "#111111",
      Secondary_Fonts: "#5D5D5D",
      Tertiary_Fonts: "#A7A7A7",
      Quaternary_Fonts: "F3F4F4",
      Background: "#FFFFFF"
    },
    fontSize: {
      titles: "48px",
      subtitles:"32px",
      objectiveTitle: "24px",
      cardsTitles: "18px",
      text: "16px",
      tags: "14px",
      small: "12px",
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    extend: {
      fontFamily: {
        manrope: ["manrope"],
      },
    },
  },
  screens: {
    'xsm': '375px',
    'sm': '414px',
    'spc600': '600px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1440px',
    '2xl': '1536px',
  },
  plugins: [],
}

