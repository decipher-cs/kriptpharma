/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
    content: ['./src/**/*.{html,js,jsx,tsx}', './src/main.tsx'],
    theme: {
        extend: {},
    },
    plugins: ['prettier-plugin-tailwindcss', daisyui],
}
