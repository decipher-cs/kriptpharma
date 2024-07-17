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
                <h2 className="text-3xl font-bold lg:text-5xl">About Us</h2>
                <p className="max-w-prose text-lg/relaxed sm:text-xl/loose">
                    <Balancer>
                        A promise for healthy life Kript pharmaceuticals pvt Ltd was established
                        with the motive of adding values to the million of lives through its best
                        quality products , we are here for the people as we serve in the persuit of
                        their healthy lives . We nurture innovation , offers excellent quality and
                        always stretches to inspire confidence in our customer . Our primary
                        objective is to proved high end medical products. At kript pharmaceuticals,
                        we believe in weaving business ethics in all our endeavours and continually
                        updating and upgrading to deliver a uniform quality that surpasses industry
                        benchmarks .
                        <br /> <br />
                        Kript Pharmaceuticals Private Limited is a Registered Indian Pharma Company
                        engaged in the manufacture and marketing of Pharmaceutical formulations.
                        Located in the largest Pharma Hub of Asia, the Company has made a name for
                        itself for its quality and range of products . Supplying not just
                        pharmaceutical, nutraceuticals but also marking their presence into hospital
                        furniture and equipment services . We are equipping multiple hospitals from
                        scratch with our equipment across the globe . Kript pharmaceuticals is a
                        fast expanding Pharma organization having over 400+ registered brands, and
                        is steadily working to make a presence across the Globe.
                    </Balancer>
                </p>

                <img src={certificates} className={'mx-auto max-w-prose'} alt={'accreditations and certifications'} />
            </article>
        </section>
    )
}
