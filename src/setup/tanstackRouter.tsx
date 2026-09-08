import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from '@/routeTree.gen'

import NotfoundPage from '@/components/notfoundPage'

// Initialize
const routes = createRouter({
  routeTree,
  defaultNotFoundComponent: NotfoundPage
})

// Define router types
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof routes
  }
}

export function Router() {
  return (
    <RouterProvider router={routes} />
  )
}
