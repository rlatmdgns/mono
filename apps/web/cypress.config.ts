import { defineConfig } from 'cypress'

export default defineConfig({
  defaultCommandTimeout: 5000,
  viewportWidth: 1000,
  viewportHeight: 600,

  // Command timeout overridden for E2E tests
  e2e: {
    baseUrl: 'http://localhost:3000',
    defaultCommandTimeout: 30000,
  },
})
