// 0 = off
// 1 = warn
// 2 = error

module.exports = {
  rules : {
    // https://stylelint.io/user-guide/rules/list#color
    'color-no-invalid-hex' : 0,

    // https://stylelint.io/user-guide/rules/list#font-family
    'font-family-no-duplicate-names'                : 0,
    'font-family-no-missing-generic-family-keyword' : 0,

    // https://stylelint.io/user-guide/rules/list#named-grid-areas
    'named-grid-areas-no-invalid' : 0,

    // https://stylelint.io/user-guide/rules/list#function
    'function-calc-no-invalid'                          : 0,
    'function-calc-no-unspaced-operator'                : 0,
    'function-linear-gradient-no-nonstandard-direction' : 0,

    // https://stylelint.io/user-guide/rules/list#string
    'string-no-newline:' : 0,

    // https://stylelint.io/user-guide/rules/list#unit
    'unit-no-unknown' : 0,

    // https://stylelint.io/user-guide/rules/list#property
    'property-no-unknown' : 0,

    // https://stylelint.io/user-guide/rules/list#keyframe-declaration
    'keyframe-declaration-no-important' : 0,

    // https://stylelint.io/user-guide/rules/list#declaration-block
    'declaration-block-no-duplicate-custom-properties'  : 0,
    'declaration-block-no-duplicate-properties'         : 0,
    'declaration-block-no-shorthand-property-overrides' : 0,

    // https://stylelint.io/user-guide/rules/list#block
    'block-no-empty' : 0,

    // https://stylelint.io/user-guide/rules/list#selector
    'selector-pseudo-class-no-unknown'   : 0,
    'selector-pseudo-element-no-unknown' : 0,
    'selector-type-no-unknown'           : 0,

    // https://stylelint.io/user-guide/rules/list#media-feature
    'media-feature-name-no-unknown' : 0,

    // https://stylelint.io/user-guide/rules/list#at-rule
    'at-rule-no-unknown' : 0,

    // https://stylelint.io/user-guide/rules/list#comment
    'comment-no-empty' : 0,
  
    // https://stylelint.io/user-guide/rules/list#general--sheet
    'no-descending-specificity'          : 0,
    'no-duplicate-at-import-rules'       : 0,
    'no-duplicate-selectors'             : 0,
    'no-empty-source'                    : 0,
    'no-extra-semicolons'                : 0,
    'no-invalid-double-slash-comments'   : 0,
    'no-invalid-position-at-import-rule' : 0
  }
}
