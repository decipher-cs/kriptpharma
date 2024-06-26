import { Link, createLazyFileRoute } from '@tanstack/react-router'
import heroImg from '../assets/backgrounds/hero.webp'
import businessOpportunitiesImg from '../assets/backgrounds/business-opportunities.webp'
import { memo } from 'react'

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
            <Testimonial />
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

const Testimonial = () => {
    return (
        <section className="mx-auto space-y-12">
            <h2 className="text-center text-3xl font-bold lg:text-5xl">
                Read trusted reviews from our customers
            </h2>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
                {Array(3)
                    .fill(null)
                    .map((_, i) => (
                        <blockquote
                            key={i}
                            className="space-y-5 rounded-lg bg-neutral p-6 text-neutral-content shadow-sm md:p-8"
                        >
                            <div className="flex items-center gap-5">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                    className="size-14 rounded-full object-cover"
                                />

                                <div>
                                    <div className="flex justify-center gap-0.5 text-primary">
                                        <span className="sr-only">5 star</span>
                                        {Array(4)
                                            .fill(null)
                                            .map((d, i) => (
                                                <svg
                                                    key={i}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="size-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                    </div>

                                    <p className="mt-0.5 text-lg font-medium text-neutral-content">
                                        Paul Starr
                                    </p>
                                </div>
                            </div>

                            <p className="italic">
                                "The services provided are of very high quality
                                and service provided very comfortable and
                                friendly to make the customer feel at home and
                                want to go back for treatment again, really very
                                interesting experience and lots of fun "
                            </p>
                        </blockquote>
                    ))}
            </div>
        </section>
    )
}

const Mason = memo(() => {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            {[
                'Anesthesia',
                'Dialysis',
                'General Surgery',
                'Auxiliary Services',
                'ENT',
                'Dressing And Wound Care',
                'IV Access',
                'Medical Cardiology',
                'Gastroenterology',
                'Medical Respiratory',
                'Needles',
            ].map((data, i) => (
                <Link
                    to="/product"
                    search={{ categoryFilter: data }}
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
                </Link>
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
