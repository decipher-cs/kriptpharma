import { Link, createLazyFileRoute } from '@tanstack/react-router'
import heroImg from '../assets/backgrounds/hero.webp'
import businessOpportunitiesImg from '../assets/backgrounds/business-opportunities.webp'
import { memo } from 'react'
import Breakout from '../components/Breakout'
import furnitureCatalogue from '../assets/furniture-catalogue.pdf'

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
        <div className="-mt-6 space-y-36">
            <Hero />
            <section className="space-y-12" id="Category">
                <h2 className="text-center text-3xl font-bold lg:text-5xl">
                    Categories
                </h2>
                <Mason />
            </section>

            <section className="-mx-breath space-y-12 bg-base-200 py-10 lg:-mx-breath-lg">
                <h2 className="text-center text-3xl font-bold lg:text-5xl">
                    Why Choose Us?
                </h2>
                <article className="flex flex-wrap justify-center gap-10">
                    {reasonsToChooseUs.map((data) => (
                        <Link
                            key={data.title}
                            to="/about"
                            className="card w-96 border border-base-300"
                        >
                            <div className="card-body prose">
                                <h2 className="card-title">{data.title}</h2>
                                <p>{data.description}</p>
                            </div>
                        </Link>
                    ))}
                </article>
            </section>

            <section>
                <MissionSection />
            </section>

            <section className="grid grid-rows-1 items-center gap-10 sm:grid-flow-col">
                <div className="h-full">
                    <img
                        src={businessOpportunitiesImg}
                        alt=""
                        className="size-full rounded-xl object-cover"
                    />
                </div>
                <div className="space-y-8">
                    <h2 className="text-2xl font-bold lg:text-4xl">
                        Business Opportunities
                    </h2>
                    <p className="leading-relaxed">
                        Top Indian Pharmaceuticals Company. Kript
                        Pharmaceuticals is ISO certified with self owned
                        manufacturing units in excise-free zones. The company
                        has dedicated itself to bring fine quality drug
                        formulations catering to wider demands. Being
                        patient-centric in our approach, we have always kept the
                        needs of consumer’s priority. This has enabled us to
                        meet demands across nation. We welcome people across
                        India to become our Business associate. It is our proud
                        earning that we’re a family of 200+. Currently, we look
                        forward to expand greater healthcare facilities in
                        uncovered locations. Our associates have been enjoying
                        the best advantages by owning over 350+ products that
                        cover multiple segments of nutraceuticals, neurology,
                        derma, ophthalmic, cardiac diabetic etc.
                    </p>
                </div>
            </section>
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
                        href="#Category"
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

const MissionSection = () => {
    return (
        <Breakout className="justify-self-stretch bg-base-200">
            <article className="mx-auto max-w-screen-xl space-y-8 px-breath py-10">
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
                        className="mx-auto flex flex-col gap-6 rounded-lg border border-neutral text-center md:flex-row md:items-center md:text-left md:*:basis-1/3 lg:text-left"
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

const Mason = memo(() => {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
                'Hospital Beds',
                'Ward Equipment',
                'Patient Transfer Trolley',
                'OT Table & Modular OT',
                'Wheelchairs',
                'Delivery Beds',
            ].map((data, i) => (
                <a
                    href={furnitureCatalogue}
                    target="_blank"
                    key={data}
                    className="relative grid min-h-32 place-content-center rounded-lg px-3 transition odd:row-span-2 even:row-span-3 hover:scale-110 sm:min-h-40"
                >
                    <img
                        className="absolute inset-0 size-full rounded-lg object-cover object-center brightness-50"
                        src={backgroundImagePaths[i]}
                        alt=""
                    />
                    <h3 className="z-0 text-center text-xl font-bold text-neutral-100 sm:text-2xl">
                        {data}
                    </h3>
                </a>
            ))}
        </div>
    )
})

const reasonsToChooseUs = [
    {
        title: `ISO 9001:2015 Certified`,
        description: `life care is an ISO certified Pharma company, committed to high quality Caridiac Daibetic products. We have also earned the right amount of trust, respect in the market.`,
        logoUrl: '',
    },

    {
        title: `Our Quality Approach`,
        description: `We are committed to follow the quality norms for manufactuing Cardiac Diabetic products. We formulate all our offered medicines as per the set quality norms.`,
        logoUrl: '',
    },

    {
        title: `Dedicated Workforce`,
        description: `Our team members are quite diverse to create a comprehensive, high-performance culture in our company, which will affect our business outcome`,
        logoUrl: '',
    },

    {
        title: `Ethics and Compliance`,
        description: `Our policies and procedure are carefully designed that our company and partners conduct business in a legal, ethical and responsible manner.`,
        logoUrl: '',
    },

    {
        title: `Packaging`,
        description: `We make use of the proven techniques for packaging all the medicines. By using such advanced techniques, we aim to ensure the leakage &amp; breakage proof delivery.`,
        logoUrl: '',
    },

    {
        title: `Awards & Achievements`,
        description: `life care is an ISO certified Pharma company, committed to high quality Caridiac Daibetic products. We have also earned the right amount of trust, respect in the market.`,
        logoUrl: '',
    },
] satisfies {
    title: string
    description: string
    logoUrl: string
}[]
