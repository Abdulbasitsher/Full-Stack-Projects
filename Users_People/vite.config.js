import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  esbuild: {
      loader: 'jsx',
      include: /src\/.*\.jsx?$/, // Use RegEx to include .jsx files
  },
  // Other Vite configurations
};
