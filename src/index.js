const plugin = require('tailwindcss/plugin')

const skeleton = plugin(
  function ({ addComponents }) {
    addComponents([
      {
        '.skeleton': {
          '@apply animate-pulse': {}
        },
        '.skeleton-text': {
          '@apply h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4':{}
        },
        '.skeleton-heading': {
          '@apply h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4':{}
        },
        '.skeleton-paragraph': {
          '@apply flex flex-row flex-wrap w-48': {}
        },
        '.skeleton-paragraph>.skeleton-text:nth-child(even)': {
          '@apply bg-gray-300 h-2.5 rounded-full dark:bg-gray-800 w-48 mb-4': {}
        }
      }
    ])
  }
)

module.exports = skeleton
