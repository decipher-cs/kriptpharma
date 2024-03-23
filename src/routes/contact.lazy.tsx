import { createLazyFileRoute, Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/contact')({
    component: () => <Contact />,
})

const contact = [
    {
        logoUrl: 'https://img.icons8.com/ios-filled/50/cccccc/linkedin.png',
        title: 'linkedin',
        href: 'https://in.linkedin.com/in/parth-bansal-05b908256',
        value: 'linkedin.com/in/parth-bansal-05b908256',
    },
    {
        logoUrl:
            'https://img.icons8.com/fluency-systems-regular/48/cccccc/email--v1.png',
        title: 'email',
        href: 'mailto:info@kriptpharma.com',
        value: 'info@kriptpharma.com',
    },
    {
        logoUrl:
            'https://img.icons8.com/parakeet-line/48/cccccc/phone-disconnected.png',
        title: 'phone no.',
        href: 'tel:+91857-191-3753',
        value: '(+91) 857-191-3753',
    },
] satisfies {
    logoUrl: string
    title: string
    href: string
    value: string
}[]

const Contact = () => {
    return (
        <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="mx-auto max-w-lg text-center">
                <h2 className="text-3xl font-bold sm:text-4xl">Get In Touch</h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {contact.map((data, i) => (
                    <a
                        key={i}
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition  hover:shadow-primary"
                        href={data.href}
                        target="_blank"
                    >
                        <img
                            className="size-10"
                            src={data.logoUrl}
                            alt={data.title + ' logo'}
                        />

                        <h2 className="mt-4 text-xl font-bold text-white">
                            {data.title.toUpperCase()}
                        </h2>

                        <p className="mt-1 text-sm text-gray-300">
                            {data.value}
                        </p>
                    </a>
                ))}
            </div>
        </section>
    )
}
