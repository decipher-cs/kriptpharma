import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/product')({
  component: () => <div>Hello /product!</div>
})