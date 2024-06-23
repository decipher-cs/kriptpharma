import { createLazyFileRoute, Link } from '@tanstack/react-router'
import mailLogo from '../assets/glyphs/email.png'
import dialerLogo from '../assets/glyphs/dialer.png'
import instaLogo from '../assets/glyphs/insta.png'
import linkedinLogo from '../assets/glyphs/linkedin.png'

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

            <div className="grid justify-around gap-8 md:grid-cols-2">
                {contact.map((data, i) => (
                    <a
                        key={i}
                        className="flex items-center gap-5 rounded-lg border border-neutral-500 p-4 shadow-xl transition-all hover:scale-105 hover:bg-primary hover:text-primary-content"
                        href={data.href}
                        target="_blank"
                    >
                        <img
                            className={'size-10'}
                            src={data.logoUrl}
                            alt={data.title + ' logo'}
                        />

                        <div>
                            <h2 className="text-nowrap text-xl font-bold">
                                {data.title.toUpperCase()}
                            </h2>

                            <p className="text-sm">{data.value}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}
