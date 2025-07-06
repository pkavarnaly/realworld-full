import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';
import { createEsbuildPlugin as createCucumberPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';

export default defineConfig({
    e2e: {
        async setupNodeEvents(on, config) {
            await addCucumberPreprocessorPlugin(on, config);
            on(
                'file:preprocessor',
                createBundler({
                    plugins: [createCucumberPlugin(config)],
                })
            );
            return config;
        },
        specPattern: '**/*.feature',
        baseUrl: 'http://localhost:4100',
        supportFile: 'cypress/support/e2e.ts',
        env: {
            // Здесь можно задать теги по умолчанию при запуске
            TAGS: 'not @skip',
        }
    },
});