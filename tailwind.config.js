/** @type {import('tailwindcss').Config} */

import { bumblebee } from 'daisyui/src/theming/themes'
import daisyui from 'daisyui'

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
                '11xl': '120rem',
                '12xl': '150rem',
            },
            keyframes: {
                horizontalScroll: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-50%)' },
                },
            },
            animation: {
                'horizontal-scroll': 'horizontalScroll linear 60s infinite',
            },
        },
    },
    daisyui: {
        themes: [
            {
                kript: {
                    ...bumblebee,
                    primary: '#ee7f1c',
                    'primary-content': '#fff',
                    secondary: '#ffb41e',
                    'secondary-content': '#fff',
                    'error-content': '#fff',
                    'success-content': '#fff',
                },
            },
        ],
    },
    plugins: ['prettier-plugin-tailwindcss', daisyui],
}
