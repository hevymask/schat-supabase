import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { Router } from '@/setup/tanstackRouter'

import '@/index.css'
import '@/setup/i18next'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>
)
