import { createLazyFileRoute } from '@tanstack/react-router'
import map from '../assets/World-Map-w-japan.svg'

export const Route = createLazyFileRoute('/globalPresence')({
    component: () => <GlobalPresence />,
})

const GlobalPresence = () => {
    return (
        <section className="text-center space-y-8">
            <h2 className="text-5xl">Global Presence</h2>
            <img
                src={map}
                className="w-4/5 border-2 border-base-300 rounded-xl mx-auto p-4"
            />
        </section>
    )
}
