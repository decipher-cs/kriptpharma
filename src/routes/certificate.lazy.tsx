import { createLazyFileRoute } from '@tanstack/react-router'
import useTheme from '../hooks/useTheme'
const stamps = import.meta.glob('../assets/stamps/*.*', {
    eager: true,
})

const stampUrls = Object.values(stamps).map((module) => {
    if (typeof module === 'object' && module && 'default' in module) {
        return module.default as string
    }
    return undefined
})

export const Route = createLazyFileRoute('/certificate')({
    component: () => <Certificate />,
})

const Certificate = () => {
    const { theme } = useTheme()

    return (
        <section className="space-y-8 text-center">
            <h2 className="text-center text-2xl sm:text-5xl">Certificates</h2>

            <section className="mx-auto grid gap-10">
                <article className="mx-auto flex flex-wrap justify-center gap-10">
                    {stampUrls.map((url) => (
                        <img
                            src={url}
                            key={url}
                            className={`h-28 md:h-40 ${theme === 'light' ? 'invert' : 'invert-0'}`}
                            alt=""
                        />
                    ))}
                </article>
            </section>
        </section>
    )
}
