import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/certificate')({
  component: () => <div>Hello /certificate!</div>
})