import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 5000
    }
    , build: {
        rollupOptions: {
            input: {
                main: './index.html', // Default entry point
            },
            output: {
                entryFileNames: '[name]-son.js',
            }
        }
    }
});