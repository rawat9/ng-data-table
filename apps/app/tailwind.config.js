const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind')
const { join } = require('node:path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'index.html'),
    join(__dirname, 'src/**/!(*.spec).{ts,html}'),
    join(__dirname, '../../libs/**/!(*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-animate')],
}
