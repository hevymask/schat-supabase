import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'

// Setup
import { Router } from '@/setup/tanstackRouter'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>
)
