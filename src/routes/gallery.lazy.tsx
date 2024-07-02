import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/gallery')({
    component: () => <Gallery />,
})

const Gallery = () => {
    return <section></section>
}
