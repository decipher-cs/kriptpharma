import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/globalPresence')({
  component: () => <div>Hello /globalPresence!</div>
})