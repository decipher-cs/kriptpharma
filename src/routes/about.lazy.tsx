import { createLazyFileRoute } from '@tanstack/react-router'
import certificates from '../assets/certification.webp'
import Balancer from 'react-wrap-balancer'
import { memo } from 'react'

export const Route = createLazyFileRoute('/about')({
    component: memo(() => <AboutUs />),
})

const AboutUs = () => {
    return (
        <section className="mx-auto max-w-screen-xl space-y-8">
            <article className="mx-auto grid items-center justify-center gap-16" id="about-us">
                <h2 className="w-fit justify-self-center text-3xl font-bold lg:text-5xl">
                    About Us
                </h2>
                <p className="text-lg/relaxed sm:text-xl/loose">
                        Kript Pharmaceuticals Private Limited stands at the forefront of the
                        pharmaceutical industry as a premier Original Equipment Manufacturer (OEM).
                        Established to enhance the quality of life, we add value to millions of
                        lives through our exceptional pharmaceutical products.
                        <br />
                        <br />
                        Our strength lies in sourcing the finest raw materials from international
                        locations, ensuring top-quality formulations, nutraceuticals, and medical
                        furniture. With right & strategic collaborations in various manufacturing
                        plants, our integrated production and quality control team implements best
                        practices and conducts rigorous inspections to meet stringent regulatory
                        standards. Additionally, our central warehouse performs further quality
                        control to ensure every product surpasses industry benchmarks.
                        <br />
                        <br />
                        Kript Pharmaceuticals is a registered Indian company based in Asia's largest
                        Pharma Hub, known for its diverse product range. In addition to
                        pharmaceuticals and nutraceuticals, we excel in providing hospital furniture
                        and equipment services, equipping hospitals globally.
                        <br />
                        <br />
                        We deliver customized OEM solutions, ensuring our clients' success in the
                        competitive healthcare market. Our commitment to innovation, quality, and
                        ethical practices drives us to consistently surpass industry standards.
                        <br />
                        <br />
                        Kript Pharmaceuticals is your trusted partner for excellence in
                        pharmaceutical provision and comprehensive healthcare solutions. Together,
                        we can build a healthier future.
                </p>

                <img
                    loading="lazy"
                    src={certificates}
                    className={'mx-auto inline-block max-h-[60svh]'}
                    alt={'accreditations and certifications'}
                />
            </article>
        </section>
    )
}
