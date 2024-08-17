/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        softRed: "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        darkCyan: "hsl(167, 40%, 24%)",
        darkBlue: "hsl(198, 62%, 26%)",
        moderateCyan: "hsl(168, 34%, 41%)",
        veryDarkBlue: "hsl(212, 27%, 19%)",
        darkGrayishBlue: "hsl(213, 9%, 39%)",
        grayishBlue: "hsl(232, 10%, 55%)",
        lightGrayishBlue: "hsl(210, 4%, 67%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "sans-serif"],
      },
      backgroundImage: {
        cherryMobile: "url('/images/mobile/image-graphic-design.jpg')",
        cherryDesktop: "url('/images/desktop/image-graphic-design.jpg')",
        orangeMobile: "url('/images/mobile/image-photography.jpg')",
        orangeDesktop: "url('/images/desktop/image-photography.jpg')",
        headerMobile: "url('/images/mobile/image-header.jpg')",
        headerDesktop: "url('/images/desktop/image-header.jpg')",
      },
    },
  },
  plugins: [],
};
