// @ts-check

/**
 * Generate a random string of specified length
 * @param {number} length
 * @returns {string}
 */
export function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

/**
 * Generate a random email address
 * @returns {string}
 */
export function generateRandomEmail() {
  const randomString = generateRandomString(8);
  return `test_${randomString}@example.com`;
}
