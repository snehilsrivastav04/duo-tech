import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 3000,
    host: '0.0.0.0', // Allow external connections
    historyApiFallback: true, // Enable SPA routing
  },
  preview: {
    port: 3000,
    host: '0.0.0.0',
    historyApiFallback: true, // Enable SPA routing for preview
  },
});
