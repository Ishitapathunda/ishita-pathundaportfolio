import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // ✅ Important to fix blank page on Netlify
  plugins: [react()],
});
