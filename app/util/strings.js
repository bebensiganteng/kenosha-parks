/**
 * Capitalizes the first letter and lower cases the rest.
 * @param {string} - The string to capitlize.
 * @returns {string} - The capitalized string.
 */
exports.capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1)
}

/**
 * Removes all special characters, numbers, and excessive spaces from a string.
 * @param {string} - The string to normalize.
 * @returns {string} - The normalized string.
 */
exports.normalize = (string) => {
  return string.replace(/[^a-zA-Z ]/g, '').trim().replace(/\s+/g, ' ')
}
