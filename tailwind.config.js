/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': "'Outfit', sans-serif"
      },
      colors: {
        "ewa-red": "#FC4747",
        "ewa-darkblue": "#10141E",
        "ewa-semiblue": "#161D2F",
        "ewa-gray": "#5A698F"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

