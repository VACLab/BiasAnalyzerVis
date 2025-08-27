import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.js',   // your main JS file
            name: 'BiasAnalyzer_Vis_JS',     // global variable name for IIFE/UMD
            fileName: 'biasanalyzer-vis-js',
            formats: ['es'] // output formats
            // formats: ['es', 'iife', 'umd'] // output formats
        },
        rollupOptions: {
            // Optional: treat D3 as external if you don't want it bundled
            // external: ['d3'],
            // output: {
            //   globals: { d3: 'd3' }
            // }
        }
    }
});

