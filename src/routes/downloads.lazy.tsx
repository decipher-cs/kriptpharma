import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/downloads')({
  component: () => <div>Hello /downloads!</div>
})