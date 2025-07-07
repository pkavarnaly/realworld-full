import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';
import allureWriter from '@shelex/cypress-allure-plugin/writer';

export default defineConfig({
    e2e: {
        async setupNodeEvents(on, config) {
            await addCucumberPreprocessorPlugin(on, config);
            allureWriter(on, config); // 👈 ОБЯЗАТЕЛЬНО
            on('file:preprocessor', createBundler({
                plugins: [createEsbuildPlugin(config)],
            }));
            return config;
        },
        specPattern: '**/*.feature',
        baseUrl: 'http://localhost:4100',
        supportFile: 'cypress/support/e2e.ts',
        env: {
            TAGS: 'not @skip',
        }
    },
});