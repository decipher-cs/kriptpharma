import { createLazyFileRoute } from '@tanstack/react-router'
import useTheme from '../hooks/useTheme'
const stampImport = import.meta.glob('../assets/stamps/*.*', {
    eager: true,
})

const stamps = Object.values(stampImport).map((module) => {
    if (typeof module === 'object' && module && 'default' in module) {
        const path = module.default
        if (typeof path === 'string') {
            const parts = path.split('/')
            const filename = parts[parts.length - 1]
                .replace('.webp', '')
                .replace(/%20/g, ' ')
            return { path, filename }
        }
    }
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
                    {stamps.map((stamp) => {
                        if (stamp)
                            return (
                                <img
                                    src={stamp.path}
                                    key={stamp.path}
                                    className={`h-28 last:max-w-80 md:h-40 ${theme === 'light' ? 'invert' : 'invert-0'}`}
                                    alt={stamp.filename}
                                />
                            )
                    })}
                </article>
            </section>
        </section>
    )
}
