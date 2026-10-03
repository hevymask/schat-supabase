import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

// Components
import RouterProvider from '@/components/provider/router'

// Init
import '@/index.css'
import '@/setup/i18next'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider />
  </StrictMode>
)
