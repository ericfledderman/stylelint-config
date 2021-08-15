module.exports = {
  extends : [
    // Points out potential runtime errors in your code
    './rules/errors',

    // Language specific formatting rules
    './rules/lang',

    // Promote a consistent code style across your project
    './rules/style'
  ].map(require.resolve)
}
