import { createRoot } from 'react-dom/client'

// Components
import { StrictMode } from 'react'
import { Router } from '@/setup/tanstackRouter'

// Setup
import '@/index.css'
import '@/setup/i18next'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>
)
