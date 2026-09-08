import { Outlet, createRootRoute } from '@tanstack/react-router'
import RootProvider from '@/components/rootProvider'

export const Route = createRootRoute({
  component: App
})

function App() {
  return (
    <RootProvider>
      <Outlet />
    </RootProvider>
  )
}
