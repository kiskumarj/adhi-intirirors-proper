import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'display': ['popins'],
      'body': ["popins"],
    },
    
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
    fontfamily:['popins']
  }
}

