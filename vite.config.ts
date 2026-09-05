import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub project Pages serves this repository below /portfolio-personal/.
  // Keep the development URL at /; --base can override this for another host.
  base: command === 'build' ? '/portfolio-personal/' : '/',
}));
