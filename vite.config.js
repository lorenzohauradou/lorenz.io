import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/lorenz.io/',  // Sostituisci con il tuo repository name
  plugins: [react()],
});