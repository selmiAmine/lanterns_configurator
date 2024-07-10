/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        
        'Fugaz': ["Fugaz One", "sans-serif"],
        'Archivo': ["Archivo", "sans-serif"],
        'Ubuntu': ["Ubuntu Sans Mono", "monospace"],
        'Dosis': ["Dosis", "sans-serif"],

      },
      
    },
  },
  plugins: [

    require('@tailwindcss/forms'),
  
  ],
}

