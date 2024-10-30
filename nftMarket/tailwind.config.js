/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Space Mono", "monospace"],
        work: ["Work Sans", "sans-serif"]
      },
      fontSize: {
        'h1': '67px',
        'h2': '51px',
        'h3': '38px',
        'h4': '28px',
        'h5': '22px',
        'base': '16px',
        'caption': '12px',
      },
      colors: {  // Змінив на `colors`
        'lightBlack': '#2B2B2B',
        'darkGray': '#3B3B3B',
        'lightGray': '#858584',
        'purple': '#A259FF',
        // 'gradientone': 'linear-gradient(-45deg, #A259FF 0%, #377DF7 100%)',
        // 'gradienttwo': 'linear-gradient(-45deg, #A259FF 0%, #FF6250 100%)'
      },
    },
  },
  plugins: [],
};

