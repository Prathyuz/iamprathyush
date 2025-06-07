import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  
  // Add these optimizations for Vercel
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks for better caching
          react: ['react', 'react-dom'],
          framer: ['framer-motion'],
          router: ['react-router-dom'],
        },
      },
    },
  },
  
  // Development server settings
  server: {
    port: 3000,
    strictPort: true,
    open: true,
  },
  
  // Preview server settings (simulates production)
  preview: {
    port: 3000,
    strictPort: true,
  },
  
  // CSS handling
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
});