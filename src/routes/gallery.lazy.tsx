import { createLazyFileRoute } from '@tanstack/react-router'

const modules = import.meta.glob('../assets/gallery/*.*', {
    eager: true,
})

const imagePaths = Object.values(modules).map((module) => {
    if (typeof module === 'object' && module && 'default' in module) {
        return module.default as string
    }
    return undefined
})

export const Route = createLazyFileRoute('/gallery')({
    component: () => <Gallery />,
})

const Gallery = () => {
    return (
        <section className="flex flex-col gap-4">
            {imagePaths.map((path) => (
                <img className="inline-block" src={path} />
            ))}
        </section>
    )
}
