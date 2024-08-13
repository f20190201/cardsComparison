import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
        },
        translateXScroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translate(-100%)'}
        },
        scrollWatcher: {
          'to': { scale: '1 1'}
        }
      },
      animation: {
        shake: 'shake 1s ease-in-out',
        translateXAnimation: 'translateXScroll 20s linear infinite',
        scrollWatcher: 'scrollWatcher linear'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui')
  ],
};
export default config;
