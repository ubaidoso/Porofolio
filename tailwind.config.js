/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'purple': '#d3caff',
        'lightblack': '#262729',
        'lightgrey' : '#54575d',
      },
      fontSize: {
        "70": '4.375rem',
        "125": '7.813rem',
        "112": '7rem',
      },
      width: {
        '105rem': '6.563rem',
        '46rem': '10.5rem',
      },
      height: {
        '105rem': '6.563rem',
      },
      borderWidth: {
        '9': '12px',
        '6': '6px',
      },
      maxWidth: {
        '1248': '78rem',
      }
    },
    
  },
  plugins: [],
};
