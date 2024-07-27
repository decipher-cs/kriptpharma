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
} from 'react-icons/pi'
import Balancer from 'react-wrap-balancer'
import { memo } from 'react'

export const Footer = memo(() => {
    return (
        <section className="rounded-t-3xl bg-base-200">
            <footer className="mx-auto mt-14 grid items-start gap-16 p-10 md:grid-cols-2 xl:grid-cols-3">
                <div className="grid gap-2">
                    <h4 className="footer-title">Navigation</h4>
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
                    <h4 className="footer-title">Quick Link</h4>
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
                    <h4 className="footer-title">Contact Details</h4>
                    <div className="grid gap-2 *:flex *:items-center *:gap-2">
                        <a href="mailto:support@kriptpharmaceuticals.com">
                            <PiMailbox /> support@kriptpharmaceuticals.com
                        </a>
                        <a href="tel:+917988522311">
                            <PiPhone /> (+91) 798-852-2311
                        </a>
                        <div>
                            <PiMapPin />
                            <p>
                                Sector-27/A, Plot No. 419,
                                <br />
                                Pradhikaran, Nigdi, Pune, Maharashtra, 411044
                            </p>
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
                    <label htmlFor="inquiry" className="footer-title">
                        Get in touch
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
                    <h4 className="footer-title">Socials</h4>
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
                    <h4 className="footer-title ml-1">WhatsApp QR Code</h4>
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
                        <Balancer>
                            Website by
                            <em className="text-primary">{' DECIPHER. '}</em>
                            Need one? Cick here to connect.
                        </Balancer>
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
