// @ts-check

/**
 * Test credentials for login tests
 */
export const credentials = {
  valid: {
    username: 'student',
    password: 'Password123'
  },
  invalid: {
    username: 'invaliduser',
    password: 'wrongpassword'
  },
  empty: {
    username: '',
    password: ''
  }
};

/**
 * Test URLs
 */
export const urls = {
  loginPage: 'https://practicetestautomation.com/practice-test-login/',
  successPage: 'https://practicetestautomation.com/logged-in-successfully/'
};

/**
 * Expected messages
 */
export const messages = {
  successLogin: 'Logged In Successfully',
  invalidCredentials: 'Your username is invalid!',
  emptyUsername: 'Username is required',
  emptyPassword: 'Password is required'
};
