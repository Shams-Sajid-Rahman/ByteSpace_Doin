/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#0038E0',
        lime: '#CCFF00',
        ink: '#0B0B1F',
        muted: '#70707F',
        line: '#E5E5EA',
        pill: '#F2F2F5',
      },
      fontFamily: {
        body: ['Urbanist', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        card: '24px',
        pill: '9999px',
      },
      boxShadow: {
        soft: '0 10px 40px rgba(0, 0, 0, 0.06)',
      },
      maxWidth: {
        container: '1152px',
      },
    },
    container: {
      center: true,
      padding: '24px',
      screens: {
        xl: '1152px',
      },
    },
  },
  plugins: [],
}