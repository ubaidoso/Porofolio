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
          "linear-gradient":"linear-gradient(180deg, #785CFF00 45%, #d3caff 0%)",
      },
      colors: {
        'purple': '#d3caff',
        'lightblack': '#262729',
        'lightgrey' : '#54575d',
        'dullwhite' : '#dddddd',
      
      },
      fontSize: {
        "70": '3.5rem',
        "125": '7rem',
        "112": '7rem',
        "28": '1.75rem',
        "80": '5rem',
        "4.5": '2.7rem',
      },
      lineHeight: {
        "3.5rem": '3.5rem', 
        "4rem": '4rem', 
        "11": '5rem',
        "12": '6.5rem',
      },
      width: {
        '18': '4.5rem',
        '105rem': '6rem',
        '46rem': '10.5rem',
        '600px': '37.5rem',
      },
      height: {
        '18': '4.5rem',
        '105rem': '6rem',
        '3px': '0.188rem',
      },
      borderWidth: {
        '9': '12px',
        '6': '6px',
        '5': '5px',
      },
      maxWidth: {
        '1248': '79rem',
      }
    },
    
  },
  plugins: [],
};
