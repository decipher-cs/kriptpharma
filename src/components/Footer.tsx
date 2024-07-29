import { Link } from '@tanstack/react-router'
import qrCode from '../assets/WhatsApp-QR-code.webp'
import {
    PiInstagramLogo,
    PiLinkedinLogo,
    PiMapPin,
    PiPhone,
    PiMailbox,
    PiFacebookLogo,
    PiWhatsappLogo,
    PiGithubLogo,
    PiSidebar,
    PiBuilding,
} from 'react-icons/pi'
import { PropsWithChildren, memo } from 'react'

export const Footer = memo(() => {
    return (
        <section className="rounded-t-3xl bg-base-200">
            <footer className="mx-auto mt-14 grid items-start gap-16 p-10 md:grid-cols-2 xl:grid-cols-3">
                <div className="grid gap-2">
                    <ItemHeading>Navigation</ItemHeading>
                    <nav className="grid gap-2">
                        {[
                            'Home',
                            'Product',
                            'Equipment',
                            'Downloads',
                            'Global Presence',
                            'Gallery',
                            'Exhibition',
                            'Contact',
                        ].map((path) => (
                            <Link className="link-hover link" key={path} to={'/' + path}>
                                {path}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="grid gap-2">
                    <ItemHeading>Quick Link</ItemHeading>
                    <nav className="grid gap-2">
                        <Link className="link-hover link" to="/catalogue">
                            Catalogue
                        </Link>
                        <Link className="link-hover link" to="/product">
                            Medication
                        </Link>
                        <Link className="link-hover link" to="/contact">
                            Enquiry
                        </Link>
                        <Link className="link-hover link" to="/gallery">
                            Gallery
                        </Link>
                    </nav>
                </div>

                <div className="grid gap-2">
                    <ItemHeading>Contact Details</ItemHeading>
                    <div className="grid gap-2 *:flex *:items-center *:gap-2">
                        <a
                            href="mailto:support@kriptpharmaceuticals.com"
                            className="hover:underline"
                        >
                            <PiMailbox /> support@kriptpharmaceuticals.com
                        </a>
                        <a href="tel:+917988522311" className="hover:underline">
                            <PiPhone /> (+91) 798-852-2311
                        </a>
                        <div>
                            <PiBuilding />
                            <a
                                href="https://maps.app.goo.gl/Mc1hohWwuwPteDa69"
                                target="_blank"
                                className="hover:underline"
                            >
                                Branch Office: Sector-27/A,
                                <br />
                                Plot No. 419 Pradhikaran, Nigdi, Pune, Maharashtra, 411044
                            </a>
                        </div>
                        <div>
                            <PiMapPin />
                            <a
                                href="https://maps.app.goo.gl/ggtXswCHxsiakJn88"
                                className="hover:underline"
                                target="_blank"
                            >
                                Head Office: SCO. 18, near hotel Celestial Beats,
                                <br />
                                Pipli road, Kurukshetra, 136118
                            </a>
                        </div>
                    </div>
                </div>

                <form
                    className="grid gap-2"
                    action={
                        'https://submit-form.com/' +
                        (import.meta.env.PROD
                            ? import.meta.env.VITE_FORM_MANAGMENT_API_KEY
                            : 'echo')
                    }
                    method="post"
                >
                    <label htmlFor="inquiry">
                        <ItemHeading>Get in touch</ItemHeading>
                    </label>
                    <div className="join">
                        <input
                            name="inquiry"
                            id="inquiry"
                            className="input join-item input-bordered w-full max-w-96"
                            placeholder="Enter email"
                            type="email"
                        />
                        <button className="btn join-item btn-neutral" type="submit">
                            Submit
                        </button>
                    </div>
                </form>

                <div className="grid gap-2">
                    <ItemHeading>Socials</ItemHeading>
                    <div className="flex gap-2">
                        <a
                            className="link-hover link"
                            href="https://www.instagram.com/kriptpharmaceuticals/"
                            target="_blank"
                        >
                            <PiInstagramLogo className="size-8" />
                            <p className="sr-only">Instagram</p>
                        </a>
                        <a
                            className="link-hover link"
                            href="https://www.linkedin.com/in/komal-singla-45a516239/"
                            target="_blank"
                        >
                            <PiLinkedinLogo className="size-8" />
                            <p className="sr-only">Linkedin</p>
                        </a>
                        <a
                            className="link-hover link"
                            href="https://www.facebook.com/share/vLSvjtQ5igwYRuP1/?mibextid=LQQJ4d"
                            target="_blank"
                        >
                            <PiFacebookLogo className="size-8" />
                            <p className="sr-only">Facebook</p>
                        </a>
                        <a
                            className="link-hover link"
                            href="https://wa.me/message/ZLJXQKQPM75IL1"
                            target="_blank"
                        >
                            <PiWhatsappLogo className="size-8" />
                            <p className="sr-only">Whatsapp</p>
                        </a>
                    </div>
                </div>

                <article className="grid gap-2">
                    <ItemHeading>WhatsApp QR Code</ItemHeading>
                    <a
                        className="tooltip tooltip-bottom tooltip-open tooltip-primary inline-block max-w-64 rounded-2xl bg-white p-5"
                        data-tip="CLICK THE CODE"
                        href="https://wa.me/message/ZLJXQKQPM75IL1"
                        id="whatsapp"
                        aria-label="Whatsapp QR code"
                        target="_blank"
                    >
                        <img
                            src={qrCode}
                            className="inline-block size-full object-contain"
                            alt="whatsapp QR code"
                        />
                    </a>
                </article>
            </footer>

            <footer className="footer footer-center rounded border-y-2 border-primary bg-base-200 px-10 pb-20 pt-10">
                <aside className="grid place-content-center gap-8">
                    <span className="flex">
                        <a
                            className="link-hover link"
                            href="https://github.com/decipher-cs/"
                            target="_blank"
                            aria-label="Website Developer Github"
                        >
                            <PiGithubLogo size={35} />
                        </a>
                        <a
                            className="link-hover link"
                            href="https://decipher-portfolio.netlify.app/"
                            target="_blank"
                            aria-label="Website Developer Portfolio website"
                        >
                            <PiSidebar size={35} />
                        </a>
                    </span>
                    <a
                        className="link-hover link link-primary  w-full text-lg font-bold"
                        href="https://decipher-portfolio.netlify.app/"
                        target="_blank"
                    >
                        Website by
                        <em className="text-primary">{' DECIPHER. '}</em>
                        Need one? Cick here to connect.
                    </a>
                    <span>
                        This website is a work in progress. Any discrepancy can reported to
                        <a
                            className="link-hover link"
                            href="mailto:developer@kriptpharmaceuticals.com"
                        >
                            {' developer@kriptpharmaceuticals.com '}
                        </a>
                    </span>
                    <span className="">Copyright © 2024 All rights reserved.</span>
                </aside>
            </footer>
        </section>
    )
})

const ItemHeading = (props: PropsWithChildren) => {
    return <h4 className="mb-2 font-bold uppercase text-neutral-500">{props.children}</h4>
}
