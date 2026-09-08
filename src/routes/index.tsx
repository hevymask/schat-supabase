import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App
})

function App() {
  return (
    <>This is the home page.</>
  )
}
