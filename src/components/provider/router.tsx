import { RouterProvider as TanstackRouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from '@/routeTree.gen'
import NotfoundPage from '@/components/notfoundPage'

// Init
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

export default function RouterProvider() {
  return (
    <TanstackRouterProvider router={routes} />
  )
}
