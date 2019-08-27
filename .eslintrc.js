module.exports = {
  'extends': 'standard',
  'plugins': [
    'standard',
    'promise'
  ],
  'env': {
    'node': true
  },
  'rules': {
    'no-mixed-operators': 'error',
    'object-shorthand': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': 'error',
    'arrow-parens': 'error',
    'no-unneeded-ternary': 'error',
    'newline-per-chained-call': 'error',
    'no-whitespace-before-property': 'error',
    'new-cap': 'error',
    'no-else-return': 'error',
    'implicit-arrow-linebreak': 'error',
    "capitalized-comments": [
      "error",
      "always"
    ],
    "spaced-comment": ["error", "always"]
  }
}
