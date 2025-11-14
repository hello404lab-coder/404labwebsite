/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        doto: ['Doto', 'sans-serif'],
      },
      colors: {
        selGray: {
          DEFAULT: "#525252",
          100: "#252525",
          200: "#141414",
          body: '#18392B',
          light: '#e4e4e480',
        },
        selYellowDark: "#FFFF00",
        selYellow: "#FFFF99",
        selBlue: "#ADD8E6",
        selRedDark: "#FF0000",
        selRed: "#FFB6C1",
        selOrange: "#FFD580",
        green: "#32de84", 
        selBlack: "#101010",
        oldBorderColor: "#ffffff59",
        borderColor: "#908f8f",
        
        borderColor2: "#ffffffce",
        borderColor3: "#d6d6d6",
        zinc: "#232222",
        // gray: "#555555",
        lineGray: "#656565",
        selWhite: "#F2F1EF",
        chatbotBg1: "#343541",
        chatbotBg2: "#2E2F3A",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

