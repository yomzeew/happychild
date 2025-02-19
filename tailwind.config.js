/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      border: {
        '1': '1px',
      },
      height:{
        '105':'450px',
        '128':'512px',
        '256':'612px'
      },
      width:{
        '105':'450px',
        '128':'512px',
        '256':'612px'
      },
      
      backgroundImage: {
         'hero-pattern': "url('/src/component/images/Rectangle1.png')",
         'bgcream':"url('/src/component/images/bgground.svg')",
         'bgcreamtwo':"url('/src/component/images/bggroundtwo.svg')",
         'bgside':"url('/src/component/images/loginpage.svg')",
        // 'herotwo-pattern': "url('/src/component/images/footerbg.png')",
        // 'herothree-pattern': "url('/src/component/images/bg6.jpg')",
      },
      backgroundColor: {
        'bluecolor':'#262F71',
        'creamcolor':'#FFCF6D'
      },
      textColor:{
        'bluecolor':'#262F71',
        'creamcolor':'#FFCF6D'
      },
      borderColor:{
        'bluecolor':'#262F71'
      },
 
    },
  },
  plugins: [],
}
