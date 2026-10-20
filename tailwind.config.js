/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/assets/images/heroBanner.svg')",
        "app-bg": "url('/assets/images/app-bg.svg')",
      },
      colors: {
        primary: '#FF5F2C',
        gray:'#777777',
        dark:'#212121',
        greenish:'#47CD6D',
        brownish:'#443B3D'
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      }
    },
  },
  plugins: [],
};
