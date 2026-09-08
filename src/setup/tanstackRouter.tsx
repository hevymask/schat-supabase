import { RouterProvider, createRouter } from '@tanstack/react-router'
import { NotfoundPage } from '@/components/notfound'
import { routeTree } from '@/routeTree.gen'

// Initialize router
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
