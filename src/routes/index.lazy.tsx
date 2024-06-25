import { createLazyFileRoute } from '@tanstack/react-router'
import heroImg from '../assets/backgrounds/hero.webp'
import Breakout from '../components/Breakout'
import {
    PiHandshake,
    PiShieldStar,
    PiShootingStar,
    PiSparkle,
} from 'react-icons/pi'

const modules = import.meta.glob('../assets/backgrounds/*.webp', {
    eager: true,
})

const backgroundImagePaths = Object.values(modules).map((module) => {
    if (typeof module === 'object' && module && 'default' in module) {
        return module.default as string
    }
    return undefined
})

export const Route = createLazyFileRoute('/')({
    component: () => <Index />,
})

const Index = () => {
    return (
        <div className="-mt-8 space-y-36">
            <Hero />

            <FeaturedProducts />

            <ReasonsToChooseUse />

            <About />

            <MissionSection />
        </div>
    )
}

const Hero = () => {
    return (
        <section
            className="relative -mx-breath grid min-h-[70svh] place-items-center overflow-x-hidden bg-cover bg-center *:col-start-1 *:row-start-1  lg:-mx-breath-lg"
            style={{
                backgroundImage: `url(${heroImg})`,
                clipPath:
                    'polygon(100% 0%, 0% 0% , 0.00% 79.20%, 2.00% 79.93%, 4.00% 80.82%, 6.00% 81.85%, 8.00% 82.98%, 10.00% 84.20%, 12.00% 85.47%, 14.00% 86.78%, 16.00% 88.08%, 18.00% 89.35%, 20.00% 90.56%, 22.00% 91.68%, 24.00% 92.69%, 26.00% 93.57%, 28.00% 94.29%, 30.00% 94.83%, 32.00% 95.19%, 34.00% 95.36%, 36.00% 95.34%, 38.00% 95.11%, 40.00% 94.70%, 42.00% 94.10%, 44.00% 93.34%, 46.00% 92.43%, 48.00% 91.38%, 50.00% 90.23%, 52.00% 89.00%, 54.00% 87.72%, 56.00% 86.41%, 58.00% 85.12%, 60.00% 83.85%, 62.00% 82.66%, 64.00% 81.55%, 66.00% 80.56%, 68.00% 79.71%, 70.00% 79.02%, 72.00% 78.51%, 74.00% 78.17%, 76.00% 78.04%, 78.00% 78.10%, 80.00% 78.35%, 82.00% 78.80%, 84.00% 79.42%, 86.00% 80.21%, 88.00% 81.15%, 90.00% 82.21%, 92.00% 83.38%, 94.00% 84.62%, 96.00% 85.91%, 98.00% 87.21%, 100.00% 88.51%)',
            }}
        >
            <div className="hero-overlay bg-opacity-85"></div>
            <div className="hero-content text-center">
                <div className="space-y-4">
                    <h1 className="text-xl font-bold text-neutral-200 md:text-3xl">
                        Kript Pharmaceuticals
                    </h1>
                    <p className="max-w-[50ch] text-sm leading-relaxed text-neutral-300 md:text-lg">
                        Discover trusted medications where quality meets care.
                        Empowering health and wellness with our comprehensive
                        range of pharmaceutical solutions.
                    </p>
                    <a
                        role="button"
                        href="#vision"
                        type="submit"
                        className="btn btn-primary"
                    >
                        MORE
                    </a>
                </div>
            </div>
        </section>
    )
}

const featuredProductNames = [
    'Tablets',
    'Injection',
    'ICU Bed',
    'OT',
    'Wheelchair',
    'Bed',
]

const FeaturedProducts = () => {
    return (
        <Breakout>
            <section
                className="w-full overflow-hidden py-6"
                style={{
                    mask: 'linear-gradient(90deg, transparent, white 10%, white 90%, transparent)',
                }}
            >
                <div className="grid w-fit animate-horizontal-scroll grid-flow-col">
                    {[...featuredProductNames, ...featuredProductNames].map(
                        (data, i) => (
                            <a
                                key={i}
                                className="relative mx-3 grid aspect-square w-20 place-items-center rounded-full sm:w-56 sm:p-3"
                            >
                                <img
                                    className="absolute inset-0 size-full rounded-full object-cover object-center brightness-50"
                                    src={backgroundImagePaths[5]}
                                    alt=""
                                />
                                <h4 className="z-10 truncate p-1 text-xs font-bold text-neutral-100 sm:text-sm md:text-xl">
                                    {data.toUpperCase()}
                                </h4>
                            </a>
                        )
                    )}
                </div>
            </section>
        </Breakout>
    )
}

const About = () => {
    return (
        <article
            className="mx-auto flex w-max flex-wrap items-center justify-center gap-16"
            id="about-us"
        >
            <h2 className="text-3xl font-bold lg:text-5xl">About Us</h2>
            <p className="max-w-prose text-lg/relaxed sm:text-xl/loose">
                A promise for healthy life Kript pharmaceuticals pvt Ltd was
                established with the motive of adding values to the million of
                lives through its best quality products , we are here for the
                people as we serve in the persuit of their healthy lives . We
                nurture innovation , offers excellent quality and always
                stretches to inspire confidence in our customer . Our primary
                objective is to proved high end medical products. At kript
                pharmaceuticals, we believe in weaving business ethics in all
                our endeavours and continually updating and upgrading to deliver
                a uniform quality that surpasses industry benchmarks .
                <br /> <br />
                Kript Pharmaceuticals Private Limited is a Registered Indian
                Pharma Company engaged in the manufacture and marketing of
                Pharmaceutical formulations. Located in the largest Pharma Hub
                of Asia, the Company has made a name for itself for its quality
                and range of products . Supplying not just pharmaceutical,
                nutraceuticals but also marking their presence into hospital
                furniture and equipment services . We are equipping multiple
                hospitals from scratch with our equipment across the globe .
                Kript pharmaceuticals is a fast expanding Pharma organization
                having over 400+ registered brands, and is steadily working to
                make a presence across the Globe.
            </p>
        </article>
    )
}

const reasonsToChooseUs = [
    {
        logo: <PiShootingStar className="size-8" />,
        title: `Accreditations for Business Operations`,
        description: `We have required accreditations to conduct business in regulated, semi-regulated, and non-regulated markets.`,
    },

    {
        logo: <PiShieldStar className="size-8" />,
        title: `Expert Regulatory Support`,
        description: `We have a highly qualified regulatory team to fulfill registration requirements, prioritizing expedited registration processes.`,
    },

    {
        logo: <PiHandshake className="size-8" />,
        title: `Building Lasting Relationships`,
        description: `We believe in building healthy and lasting relationships with our partners and customers, earning their loyalty to our brand. It is with this single belief that all our products, categorized into different segments, provide medical help to customers.`,
    },

    {
        logo: <PiSparkle className="size-8" />,
        title: `Commitment to Quality and Accessibility`,
        description: `We firmly believe in quality, and our goal is to make products accessible in every market at an affordable price to meet market needs.`,
    },
]
const ReasonsToChooseUse = () => {
    return (
        <section className="-mx-breath space-y-12 bg-base-200 py-10 lg:-mx-breath-lg">
            <h2 className="text-center text-3xl font-bold lg:text-5xl">
                Why Choose Us?
            </h2>
            <article className="mx-auto grid max-w-screen-lg justify-between gap-10 px-breath-sm md:grid-cols-2">
                {reasonsToChooseUs.map((data) => (
                    <div
                        key={data.title}
                        className="group card card-body border border-neutral-700 shadow-xl transition-all hover:bg-primary hover:text-primary-content"
                    >
                        {data.logo}
                        <h2 className="card-title">{data.title}</h2>
                        <p className="">{data.description}</p>
                    </div>
                ))}
            </article>
        </section>
    )
}

const MissionSection = () => {
    return (
        <Breakout className="justify-self-stretch bg-base-200">
            <article
                className="mx-auto max-w-screen-xl space-y-8 px-breath py-10"
                id="vision"
            >
                {[
                    {
                        title: 'Our Vision',
                        description:
                            'To uphold our social responsibilities of delivering highest standard healthcare services.',
                    },
                    {
                        title: 'Our Commitment',
                        description:
                            "Dedicated to exceeding our clients' expectations with unwavering support.",
                    },
                    {
                        title: 'Our Mission',
                        description:
                            'We at Kript Pharmaceuticals believes that complete customer satisfaction is the key to expand business everywhere.',
                    },
                ].map((data, i) => (
                    <div
                        key={i}
                        className="mx-auto flex flex-col gap-6 rounded-lg border border-neutral-700 text-center md:flex-row md:items-center md:text-left md:*:basis-1/3 lg:text-left"
                    >
                        <h4 className={'text-center text-2xl font-bold'}>
                            {data.title}
                        </h4>
                        <p className="text-lg leading-relaxed">
                            {data.description}
                        </p>
                        <div
                            className={
                                'relative order-first h-48 ' +
                                (i === 1 ? ' md:order-last' : '')
                            }
                        >
                            <img
                                src={backgroundImagePaths[i]}
                                alt=""
                                className={
                                    'absolute inset-0 size-full rounded-lg object-cover'
                                }
                            />
                        </div>
                    </div>
                ))}
            </article>
        </Breakout>
    )
}
