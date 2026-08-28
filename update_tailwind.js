import fs from 'fs';
import tExtracted from './extracted_tailwind.js';

const tConfig = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: tExtracted.theme,
  plugins: []
};

fs.writeFileSync('tailwind.config.mjs', `/** @type {import('tailwindcss').Config} */\nexport default ${JSON.stringify(tConfig, null, 2)};`);
console.log('Tailwind config updated.');
