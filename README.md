A modern, scalable test automation framework built with [Playwright] following the Page Object Model (POM) pattern.

## 📁 Project Structure

### Page Object Model (POM)

```
test/
├── pages/                    # Page Object classes
│   └── LoginPage.js         # Login page object with locators and methods
├── tests/                    # Test specifications
│   └── login.spec.js        # Login test cases (positive & negative)
├── test-data/                # Test data files
│   └── credentials.js       # Credentials, URLs, and expected messages
└── utils/                    # Utility functions
    └── helpers.js           # Helper functions (random string/email generation)
```

## 📝 Test Coverage

### Login Page Tests (7 tests)

**Positive Tests:**
- ✅ Login with valid credentials
- ✅ Display login form elements
- ✅ Password field masked

**Negative Tests:**
- ✅ Invalid credentials
- ✅ Empty username
- ✅ Empty password
- ✅ Both empty fields

Key settings in [`playwright.config.js`](playwright.config.js):

- **testDir**: Test file directory (`./test`)
- **fullyParallel**: Run tests in parallel
- **retries**: Retry failed tests on CI
- **reporter**: HTML report generation
- **use.headless**: Run browsers in headless mode
- **projects**: Browser configurations (Chromium, Firefox, WebKit, Mobile)

### Browser Configuration

Currently configured browsers:
- Desktop Chrome (Chromium)
- Mobile Chrome (Pixel 5)


- `@playwright/test`: Playwright testing framework


- [Playwright Test Runner](https://playwright.dev/docs/test-runner)
- [Page Object Model](https://playwright.dev/docs/pom)
