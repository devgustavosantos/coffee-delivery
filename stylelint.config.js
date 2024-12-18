/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-recommended', 'stylelint-prettier/recommended'],
  customSyntax: 'postcss-styled-components',
  rules: {
    'rule-empty-line-before': ['always', { except: 'first-nested' }],
    'at-rule-empty-line-before': 'always',
    'color-no-invalid-hex': true,
    'shorthand-property-no-redundant-values': true,
    'color-function-notation': 'legacy',
    'selector-class-pattern': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends'],
      },
    ],
    'block-no-empty': [
      true,
      {
        ignore: ['comments'],
      },
    ],
    'unit-allowed-list': ['em', 'rem', '%', 's', 'deg', 'vh', 'ms', 'fr', 'vw'],
    'value-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'no-empty-source': null,
  },
};
