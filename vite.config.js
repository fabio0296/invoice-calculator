import { defineConfig } from 'vite';
import { resolve } from 'path';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
    assetInlineLimit: 100000000,
  },
  plugins: [
    ViteMinifyPlugin({
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true,
      removeAttributeQuotes: false,
    }),
  ],
});
