/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  content: [
    "./src/**/*.{html,ts}",
    "./projects/ngx-xchange-ui/src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["manrope"],
      },
      colors: {
        Main_accent: "#D6F0CD",
        Second_accent: "#FAE651",
        Warning_Alert: "#7B61FF",
        Main_Fonts: "#111111",
        Secondary_Fonts: "#5D5D5D",
        Tertiary_Fonts: "#A7A7A7",
        Quaternary_Fonts: "#F3F4F4",
        Background: "#FFFFFF",
        text_Color: "#000000"
      },
      fontSize: {
        Main_Titles: "48px",
        subtitles:"32px",
        projectTitle: "24px",
        cardsTitles: "18px",
        paragraph: "16px",
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
      screens: {
        'xsm': '375px',
        'sm': '414px',
        'spc600': '600px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
        '2xl': '1536px',
      },
      lineHeight: {
        'tag': "28px",
        'tag_indicator': "16.8px",
        'title': "48px",
        'more': "33.6px",
        'project-bar': "24px",
        'filter-bar': "22.4px",
        'insights': "19.8px",
        'name-card': "44.8px"
      },
    },
  },
  plugins: [],
}


