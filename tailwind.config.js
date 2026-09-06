/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        renzz: {
          navy: '#0B0F19',
          dark: '#111827',
          card: '#1E293B',
          blue: '#2563EB',
          sky: '#0284C7',
          cyan: '#06B6D4',
          purple: '#8B5CF6',
          accent: '#38BDF8'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to right, #0F172A, #1E1B4B, #0F172A)',
      }
    },
  },
  plugins: [],
}
