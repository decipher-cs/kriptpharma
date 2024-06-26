/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import twt from '@tailwindcss/typography'
export default {
    content: ['./src/**/*.{html,js,jsx,tsx}', './src/main.tsx'],
    theme: {
        extend: {
            spacing: {
                breath: '1.5rem',
                'breath-sm': '2rem',
                'breath-md': '3rem',
                'breath-lg': '5rem',
                '8xl': '85rem',
                '9xl': '90rem',
                '10xl': '100rem',
            },
        },
    },
    daisyui: {
        themes: ['light', 'dark', 'dim', 'bumblebee'],
    },
    plugins: ['prettier-plugin-tailwindcss', daisyui, twt],
}
