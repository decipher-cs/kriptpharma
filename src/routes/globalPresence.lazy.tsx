import { createLazyFileRoute } from '@tanstack/react-router'
import map from '../assets/World-Map-w-japan.svg'

export const Route = createLazyFileRoute('/globalPresence')({
    component: () => <GlobalPresence />,
})

const GlobalPresence = () => {
    return (
        <section className="space-y-8 text-center">
            <h2 className="text-2xl md:text-5xl">Global Presence</h2>
            <img
                src={map}
                className="mx-auto w-full rounded-xl border-2 border-base-300 p-4 md:w-4/5"
            />
        </section>
    )
}
