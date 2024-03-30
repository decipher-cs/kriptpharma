import { createLazyFileRoute, Link } from '@tanstack/react-router'
import Breakout from '../components/Breakout'

const stamps = import.meta.glob('../assets/stamps/*.*', {
    eager: true,
})

const stampUrls = Object.values(stamps).map((module) => {
    if (typeof module === 'object' && module && 'default' in module) {
        return module.default as string
    }
    return undefined
})

const modules = import.meta.glob('../assets/backgrounds/*.webp', {
    eager: true,
})

const imagePaths = Object.values(modules).map((module) => {
    if (typeof module === 'object' && module && 'default' in module) {
        return module.default as string
    }
    return undefined
})

export const Route = createLazyFileRoute('/about')({
    component: () => <About />,
})

const About = () => {
    return (
        <section className="mx-auto grid gap-10">
            <div className="flex w-full flex-wrap items-center justify-around gap-8 justify-self-center">
                <h1 className="text-nowrap  text-3xl font-extrabold sm:text-5xl">
                    About Us
                </h1>

                <p className="max-w-[80ch] text-xl/relaxed">
                    Top Indian Pharmaceuticals Company. Kript Pharmaceuticals is
                    ISO certified with self owned manufacturing units in
                    excise-free zones. The company has dedicated itself to bring
                    fine quality drug formulations catering to wider demands.
                    Being patient-centric in our approach, we have always kept
                    the needs of consumer’s priority. This has enabled us to
                    meet demands across nation. We welcome people across India
                    to become our Business associate. It is our proud earning
                    that we’re a family of 200+. Currently, we look forward to
                    expand greater healthcare facilities in uncovered locations.
                    Our associates have been enjoying the best advantages by
                    owning over 350+ products that cover multiple segments of
                    nutraceuticals, neurology, derma, ophthalmic, cardiac
                    diabetic etc.
                </p>
            </div>

            <Breakout className="justify-self-stretch bg-base-200">
                <article className="mx-auto max-w-screen-xl space-y-8 px-breath py-10">
                    {[
                        {
                            title: 'Our Vision',
                            description:
                                'To uphold our social responsibilities of delivering highest standard healthcare services.',
                        },
                        {
                            title: 'Our Value',
                            description:
                                'Our Business Values with clients are as simple as LIFELONG “Business Relations',
                        },
                        {
                            title: 'Our Mission',
                            description:
                                'We at Kript Pharmaceuticals believes that complete customer satisfaction is the key to expand business everywhere.',
                        },
                    ].map((data, i) => (
                        <div
                            key={i}
                            className="mx-auto flex flex-col gap-6 rounded-lg border border-base-content text-center md:flex-row md:items-center md:text-left md:*:basis-1/3 lg:text-left"
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
                                    src={imagePaths[i]}
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
            <article className="mx-auto flex h-40 gap-10">
                {stampUrls.map((url) => (
                    <img src={url} key={url} className="w-auto" />
                ))}
            </article>
        </section>
    )
}
