import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/exhibition')({
  component: () => <div>Hello /exhibition!</div>
})