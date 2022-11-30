const plugin = require('tailwindcss/plugin')

plugin(function ({ matchComponents, theme }) {})

const skeleton = plugin(
  function ({ addComponents, matchComponents, theme }) {
    matchComponents(
      {
        'skeleton-text': (value) => ({
          width: value,
          [`@apply h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 m-2.5`]: {},
        }),
        'skeleton-heading': (value) => ({
          ['@apply h-5 bg-gray-300 rounded-full dark:bg-gray-700 m-4']: {},
          width: value,
        }),
      },
      { values: theme('skeletonSize') }
    )

    addComponents([
      {
        '.skeleton': {
          '@apply animate-pulse': {},
        },
        '.skeleton-bordered': {
          '@apply border p-2 border-gray-300 dark:border-gray-700':{}
        },
        '.skeleton-img': {
          '@apply bg-gray-300 dark:bg-gray-700 flex justify-center items-center':{}
        },
        '.skeleton-list': {
          '@apply flex flex-col rounded border border-gray-300 divide-y-2 divide-gray-300 shadow dark:divide-gray-700 dark:border-gray-700':{}
        },
        '.skeleton-list-row': {
          '@apply flex justify-between items-center p-2': {}
        },
        '.skeleton-paragraph': {
          '@apply flex flex-row flex-wrap w-full space-x-2': {},
        },
        '.skeleton-paragraph>*:nth-child(even)': {
          '@apply bg-gray-400': {},
        },
      },
    ])
  },
  {
    theme: {
      skeletonSize: {
        sm: '4rem',
        md: '6rem',
        DEFAULT: '8rem',
        lg: '16rem',
        xl: '32rem',
      },
    },
  }
)

module.exports = skeleton
