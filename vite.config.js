

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Iniziar bootstrap
// https://getbootstrap.com/docs/5.0/getting-started/introduction/


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Portfolio-AlejoLac/"
})
