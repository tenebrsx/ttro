import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0', // Allow external connections
    strictPort: false, // Allow fallback to other ports
    open: true, // Open browser automatically
  },
  preview: {
    port: 3000,
    host: '0.0.0.0', // Allow external connections in preview mode
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: '/', // Use absolute paths for deployment
});
