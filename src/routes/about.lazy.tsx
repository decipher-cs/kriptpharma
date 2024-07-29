import { createLazyFileRoute } from '@tanstack/react-router'
import certificates from '../assets/certification.webp'
import { memo } from 'react'
import { PiEye, PiMegaphone, PiRoadHorizon } from 'react-icons/pi'
import Breakout from '../components/Breakout'

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
                    Established to enhance the quality of life, we add value to millions of lives
                    through our exceptional pharmaceutical products.
                    <br />
                    <br />
                    Our strength lies in sourcing the finest raw materials from international
                    locations, ensuring top-quality formulations, nutraceuticals, and medical
                    furniture. With right & strategic collaborations in various manufacturing
                    plants, our integrated production and quality control team implements best
                    practices and conducts rigorous inspections to meet stringent regulatory
                    standards. Additionally, our central warehouse performs further quality control
                    to ensure every product surpasses industry benchmarks.
                    <br />
                    <br />
                    Kript Pharmaceuticals is a registered Indian company based in Asia's largest
                    Pharma Hub, known for its diverse product range. In addition to pharmaceuticals
                    and nutraceuticals, we excel in providing hospital furniture and equipment
                    services, equipping hospitals globally.
                    <br />
                    <br />
                    We deliver customized OEM solutions, ensuring our clients' success in the
                    competitive healthcare market. Our commitment to innovation, quality, and
                    ethical practices drives us to consistently surpass industry standards.
                    <br />
                    <br />
                    Kript Pharmaceuticals is your trusted partner for excellence in pharmaceutical
                    provision and comprehensive healthcare solutions. Together, we can build a
                    healthier future.
                </p>

                <img
                    loading="lazy"
                    src={certificates}
                    className={'mx-auto inline-block max-h-[60svh]'}
                    alt={'accreditations and certifications'}
                />
            </article>
            <MissionSection />
        </section>
    )
}

export const MissionSection = () => {
    return (
        <Breakout className="justify-self-stretch">
            <article
                className="mx-auto grid max-w-screen-xl auto-rows-fr items-stretch justify-items-center gap-5 px-breath py-10 lg:grid-cols-3"
                id="vision"
            >
                {[
                    {
                        title: 'Our Vision',
                        logo: <PiEye className="size-8" />,
                        description: (
                            <>
                                <li>
                                    To be one of the reliable, innovative, customer oriented and
                                    most admired Pharmaceutical Company in the global arena.
                                </li>
                                <li>
                                    To continually create value, bring pride to our customers and
                                    partners at large.
                                </li>

                                <li>
                                    To provide quality products with concern to Safety for human
                                    health.
                                </li>
                            </>
                        ),
                    },
                    {
                        title: 'Our Value',
                        logo: <PiRoadHorizon className="size-8" />,
                        description: (
                            <>
                                <li>
                                    We are committed to offering you a wide variety of quality
                                    pharmaceutical preparations of various segments.
                                </li>

                                <li>
                                    We provide all desired documentation for your regulatory
                                    requirements.
                                </li>

                                <li>
                                    Our commitment includes ensuring that both the pharmaceutical
                                    preparations and the documentation meet your needs.
                                </li>
                            </>
                        ),
                    },
                    {
                        title: 'Our Mission',
                        logo: <PiMegaphone className="size-8" />,
                        description: (
                            <>
                                <li>
                                    Manufacturing quality products with concern for safety,
                                    environment and health.
                                </li>
                                <li>
                                    Following best management practices and build success with
                                    excellence.
                                </li>
                                <li>
                                    To strive ceaselessly with a commitment towards Customer
                                    satisfaction.
                                </li>
                            </>
                        ),
                    },
                ].map((data, i) => (
                    <div
                        className="group max-w-prose rounded-lg border border-neutral-300 bg-base-100 shadow-md transition-all"
                        key={i}
                    >
                        <div className="grid h-full content-center space-y-5 p-8 lg:content-start">
                            {data.logo}
                            <h2 className="text-2xl font-bold">{data.title}</h2>
                            <div className="grid list-inside list-none gap-6 text-lg/normal">
                                {data.description}
                            </div>
                        </div>
                    </div>
                ))}
            </article>
        </Breakout>
    )
}
