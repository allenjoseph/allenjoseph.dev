/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      fontFamily: {
        sans: ['"Open Sans Condensed"', 'Sans Fallback'],
      },
      backgroundImage: {
        body: "url('/img/bg-body.webp')",
        header: "url('/img/bg-header.webp')",
      },
    },
  },
  plugins: [],
};
