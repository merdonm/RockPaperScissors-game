/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        Inter: "Inter",
        Quicksand: "Quicksand",
        DMsans: "DM Sans",
        Elmessiri: "El Messiri",
      },
      colors:{
        "career-button-orange": "#F6831B",
        "white-dim-grey": "#F4F3F9",

      },
      fontSize: {
        "15px": "15px",
        "35px": "35px",
        "25px": "25px",
        "23px": "23px",
        "13px": "13px",
      },
      flex: {
        "flex-100": "0 0 100%",
        "flex-50": "0 0 50%",
        "flex-20": "0 0 20%",
        "flex-31": "0 0 31%",
        "flex-30": "0 0 33.3%",
      },
      padding:{
        "70px": "70px",
        "8.8%": "8.8%",
        "8%": "8%",
        "9.5%": "9.5%",
        "6.8%": "6.8%",
        "50px": "50px",
      },
      margin: {
        "3%": "3%",
        "4%": "4%",
        "5%": "5%",
        "7%": "7%",
        "10%": "10%",
      },
      maxWidth:{
        "605px": "605px",
        "358px": "358px",
      },
      minWidth:{
        "108px": "108px",
      },
      height:{
        "85vh": "85vh",
      },
      minHeight: {
        "43px": "43px",
        "190px": "190px",
      },
      transitionDuration:{
        500: "500ms",
        700: "700ms",
      },
      zIndex: {
        1: "1",
      },
      inset:{
        "20%": "20%",
        "25%": "25%",
        "26%": "26%",
        "30%": "30%",
        "34%": "34%",
        "40%": "40%",
      },
      scale: {
        80: "0.8",
        100: "1",
      },
      screens: {
        mL: "425px",
        "2k": "1440px",
        "4k": "2560px",
      },
      boxShadow: {
        "bottom-only":
          "rgba(50, 50, 93, 0.25) 0px 5px 5px 0px, rgba(0, 0, 0, 0.1) 0px 5px 5px -3px",
      },
    },
  },
  plugins: [],
}