# Cypress Automation Framework – SauceDemo

## Overview

This project demonstrates a structured end-to-end automation framework using Cypress.

The framework is designed with scalability, maintainability, and clean architecture in mind.

Target Application:
https://www.saucedemo.com

---

## Architecture

- Page Object Model (POM)
- Utility helper functions
- Data-driven testing (fixtures)
- Retry strategy configuration
- Screenshot & video capture on failure
- Mochawesome reporting
- GitHub Actions CI integration

---

## Project Structure
.github/workflows → CI pipeline
cypress/e2e → Test specifications
cypress/pages → Page Object classes
cypress/utils → Helper & utility functions
cypress/fixtures → Test data
cypress/support → Cypress configuration & commands

---

## Test Coverage

- Successful login
- Locked-out user validation
- Add to cart (random item selection)
- Cart validation with price calculation logic

---

## Retry Strategy

Configured in `cypress.config.js`:

- Run mode: 2 retries
- Open mode: 1 retry

---

## Reporting

- Screenshots on failure
- Video recording enabled
- Mochawesome HTML report support

To run report generation:

npm run cypress:run

---

## Run Tests Locally

Install dependencies:

npm install

Open Cypress UI:

npm run cypress:open

Run headless:

npm run cypress:run

---

## Continuous Integration

Tests automatically execute on:

- Push to main branch
- Pull request to main branch

CI pipeline is configured using GitHub Actions.