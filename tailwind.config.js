import colors from 'tailwindcss/colors';

export default {
  content: ["*","*/*.*"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      "aqua-self": "#00F0FF",
      "darkerblue": "#17202E",
      "cyanide": "#00A3FF"
    }
  },
  plugins: [],
}
