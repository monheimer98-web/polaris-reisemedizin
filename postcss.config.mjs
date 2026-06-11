/**
 * Tailwind CSS v4 via PostCSS-Adapter (statt @tailwindcss/vite).
 * Entkoppelt Tailwind von der Vite-Version, die Astro intern bündelt —
 * vermeidet den Rolldown/Vite-Konflikt des Vite-Plugins. CSS-first:
 * sämtliche Tokens/Utilities stammen aus src/styles/global.css.
 */
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
