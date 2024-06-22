import { createLazyFileRoute } from '@tanstack/react-router'
import Breakout from '../components/Breakout'
import useTheme from '../hooks/useTheme'

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
    const { theme } = useTheme()

    return (
        <section className="mx-auto grid gap-10">
            <div className="flex w-full flex-wrap items-center gap-8 justify-self-center sm:justify-around">
                <h1 className="justify-self-start text-nowrap text-3xl font-extrabold sm:text-5xl">
                    About Us
                </h1>

                <p className="max-w-[80ch] text-lg/relaxed md:text-xl/relaxed">
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

            <article className="mx-auto flex flex-wrap justify-center gap-10">
                {stampUrls.map((url) => (
                    <img
                        src={url}
                        key={url}
                        className={`h-28 md:h-40 ${theme === 'light' ? 'invert' : 'invert-0'}`}
                        alt=""
                    />
                ))}
            </article>
        </section>
    )
}
