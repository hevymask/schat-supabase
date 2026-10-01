import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import RouterProvider from '@/provider/router'

import '@/index.css'
import '@/setup/i18next'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider />
  </StrictMode>
)
