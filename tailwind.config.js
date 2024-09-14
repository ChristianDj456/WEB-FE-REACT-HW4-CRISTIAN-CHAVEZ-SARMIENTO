/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',               // Archivo HTML principal
    './src/**/*.{js,ts,jsx,tsx}',  // Todos los archivos dentro de 'src' que usen JSX/TSX
  ],
  theme: {
    extend: {colors: {
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      },},
  },
  plugins: [],
};
