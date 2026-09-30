import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const repositoryName = 'FinalProjectReact'
export default defineConfig({
  base: `/${repositoryName}/`,
  plugins: [react()],
})
