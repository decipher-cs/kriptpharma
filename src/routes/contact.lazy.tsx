import { createLazyFileRoute, Link } from '@tanstack/react-router'
import mailLogo from '../assets/glyphs/mail.svg'
import dialerLogo from '../assets/glyphs/dialer.svg'
import instaLogo from '../assets/glyphs/Instagram.svg'
import linkedinLogo from '../assets/glyphs/linkedin.svg'

export const Route = createLazyFileRoute('/contact')({
    component: () => <Contact />,
})

const contact = [
    {
        logoUrl: linkedinLogo,
        title: 'linkedin',
        href: 'https://in.linkedin.com/in/parth-bansal-05b908256',
        value: 'linkedin.com/in/parth-bansal-05b908256',
    },
    {
        logoUrl: mailLogo,
        title: 'email',
        href: 'mailto:info@kriptpharma.com',
        value: 'info@kriptpharma.com',
    },
    {
        logoUrl: dialerLogo,
        title: 'phone no.',
        href: 'tel:+91857-191-3753',
        value: '(+91) 857-191-3753',
    },
    {
        logoUrl: instaLogo,
        title: 'Instagram',
        href: 'https://www.instagram.com/kriptpharmaceuticals/',
        value: '@kriptpharmaceuticals',
    },
] satisfies {
    logoUrl: string
    title: string
    href: string
    value: string
}[]

const Contact = () => {
    return (
        <section className="mx-auto max-w-screen-xl space-y-8">
            <div className="mx-auto max-w-lg text-center">
                <h2 className="text-3xl font-bold sm:text-4xl">Get In Touch</h2>
            </div>

            <div className="flex flex-wrap justify-center gap-8 ">
                {contact.map((data, i) => (
                    <a
                        key={i}
                        className="block grow basis-1/3 space-y-4 rounded-xl border border-gray-800 p-8 shadow-xl transition  hover:shadow-primary"
                        href={data.href}
                        target="_blank"
                    >
                        <img
                            className="size-10"
                            src={data.logoUrl}
                            alt={data.title + ' logo'}
                        />

                        <h2 className="text-nowrap text-xl font-bold text-white">
                            {data.title.toUpperCase()}
                        </h2>

                        <p className="text-sm text-gray-300">{data.value}</p>
                    </a>
                ))}
            </div>
        </section>
    )
}
