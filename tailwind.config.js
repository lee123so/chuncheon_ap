import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      letterSpacing: {
        'extra-wide': '0.2em', // 간격
      },
      fontFamily: {
        pretendard: ['Pretendard-Regular', 'sans-serif'], 
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'color-primary': "#002E62",
        'color-secondry': "#006FEE",
        'color-ready':'#006FEE',
        'color-error':'#FF0000',
        'color-warning':'#920B3A',
        'color-success':'#32CD32',
        'color-info':'#00BFFF',
        'color-light':'#FAFAFA',
        'color-text-main':'#3F3F46',
        'color-text-sub':'#4A4A4A',
        'color-text-sub-light':'#868686',
        'color-text-sub-dark':'#333333',
        'color-text-highlight':'#A1A1AA',
        'color-text-highlight-dark':'#FF8899',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}
