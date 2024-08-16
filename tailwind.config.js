/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
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
