import { createLazyFileRoute, Navigate } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/home')({
    component: () => <Navigate to="/" />,
})
