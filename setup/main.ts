import { defineAppSetup } from '@slidev/types'
import { createPinia } from 'pinia'

const pinia = createPinia()

export default defineAppSetup(({ app, router }) => {
  // Vue App
  app.use(pinia)
})