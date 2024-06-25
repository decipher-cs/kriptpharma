import { createLazyFileRoute } from '@tanstack/react-router'
import map from '../assets/global-presence.svg'
import useTheme from '../hooks/useTheme'

export const Route = createLazyFileRoute('/globalPresence')({
    component: () => <GlobalPresence />,
})

const GlobalPresence = () => {
    const { theme } = useTheme()
    return (
        <section className="space-y-8 text-center">
            <h2 className="text-2xl md:text-5xl">Global Presence</h2>
            <img
                src={map}
                className={
                    'mx-auto w-full rounded-xl border-2 border-neutral-500 bg-neutral-300 p-4 md:w-4/5' +
                    (theme === 'light' ? ' invert' : ' invert-0')
                }
            />
        </section>
    )
}
