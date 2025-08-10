import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        baseUrl: 'https://www.demoblaze.com/',
        defaultBrowser: 'chrome',
        commandDelay: 500,
        defaultCommandTimeout: 8000,
        setupNodeEvents(on, config) {
            return config;
        },
        env: {
            username: 'otrofimova',
            password: '123456',
            invalid_username: 'jhbfkdjhbkhjb',
            invalid_password: '000',
            home_url: 'https://www.demoblaze.com/index.html'
        }
    }
})