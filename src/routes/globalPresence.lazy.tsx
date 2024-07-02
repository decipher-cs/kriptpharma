import { createLazyFileRoute } from '@tanstack/react-router'
import map from '../assets/global-presence.svg'

export const Route = createLazyFileRoute('/globalPresence')({
    component: () => <GlobalPresence />,
})

const GlobalPresence = () => {
    return (
        <section className="">
            <img
                src={map}
                className={'mx-auto rounded-xl'}
                alt="global partners on world map"
            />
        </section>
    )
}
