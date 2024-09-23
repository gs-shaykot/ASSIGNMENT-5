/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: { 
      container:{
        center: true,  
        padding: '1rem', 
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1140px', 
        },
      },
    },
    plugins: [],
  }