import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const repositoryName = 'conference-expense-planner'
export default defineConfig({
  base: `/${repositoryName}/`,
  plugins: [react()],
})
