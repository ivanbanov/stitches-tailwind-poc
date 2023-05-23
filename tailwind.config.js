const { withTV } = require('tailwind-variants/transformer')
const { typewindTransforms } = require('typewind/transform')
 
/** @type {import('tailwindcss').Config} \*/
module.exports = withTV({
  theme: {
    screens: {
      mobile: '0px',
      tablet: '768px',
      desktop: '1024px',
    },
    colors: ['error', 'success', 'info', 'warning', 'off', 'none'].reduce(
      (result, token) => ({
        ...result,
        [token]: `var(--colors-${token})`
      }), {}),
    spacing: ['small', 'medium', 'large'].reduce(
      (result, token) => ({
        ...result,
        [token]: `var(--spacing-${token})`
      }), {}),
  },
  content: {
    files: ['./src/**/*.{js,jsx,ts,tsx,css,html}'],
    transform: typewindTransforms,
  },
})
