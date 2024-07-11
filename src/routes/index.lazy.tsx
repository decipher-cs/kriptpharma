import { Link, createLazyFileRoute } from '@tanstack/react-router'
import heroVideo from '../assets/hero-video.mp4'
import Breakout from '../components/Breakout'
import video1 from '../assets/videos/video1.mp4'
import video2 from '../assets/videos/video2.mp4'
import video3 from '../assets/videos/video3.mp4'
import video4 from '../assets/videos/video4.mp4'
import {
    PiEye,
    PiHandshake,
    PiMegaphone,
    PiRoadHorizon,
    PiShieldStar,
    PiShootingStar,
    PiSkipBack,
    PiSkipForward,
    PiSparkle,
} from 'react-icons/pi'
import icuBed2 from '../assets/featured/icu bed 2.webp'
import injections from '../assets/featured/injections.webp'
import tablet from '../assets/featured/tablet.webp'
import icuBed from '../assets/featured/icu bed.webp'
import otRoom from '../assets/featured/ot room.webp'
import wheelchair from '../assets/featured/wheelchair.webp'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
import { screens } from 'tailwindcss/defaultTheme'

export const Route = createLazyFileRoute('/')({
    component: () => <Index />,
})

const Index = () => {
    return (
        <div className="-mt-8 space-y-36">
            <Hero />

            <FeaturedProducts />

            <ReasonsToChooseUse />

            <MissionSection />
        </div>
    )
}

const Hero = () => {
    return (
        <section className="relative z-40 -mx-breath grid min-h-svh items-center overflow-x-hidden bg-white bg-cover *:col-start-1 *:row-start-1 lg:-mx-breath-lg">
            <div className="absolute inset-x-0 size-full brightness-[60%]">
                <video
                    // Do not remove or alter the id.
                    //
                    // The header in the root file makes use of this id
                    // in an intersection observer to
                    // change the visibily of text on navbar.
                    //
                    // If it seems like an anti-pattern,
                    // that's cause it is.
                    //
                    // TODO: Remove reliance of id attriubte for this.
                    id="hero-video"
                    className="inline-block size-full object-cover"
                    // TODO: Add poster which appears while video is loading
                    poster=""
                    autoPlay
                    disablePictureInPicture
                    disableRemotePlayback
                    loop
                    muted
                    preload="metadata"
                    playsInline
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>
            </div>

            <div className="hero-content mb-14 justify-self-center text-center">
                <div className="space-y-6 sm:space-y-10">
                    <h1
                        className="text-3xl font-bold text-transparent md:text-6xl"
                        style={{
                            backgroundImage: `linear-gradient(45deg,
                                    oklch(var(--p)),
                                    oklch(var(--s) )`,
                            backgroundClip: 'text',
                        }}
                    >
                        Kript Pharmaceuticals
                    </h1>
                    <p className="mx-auto max-w-[50ch] text-sm font-bold text-neutral-200 md:text-lg">
                        Discover trusted medications where quality meets care.
                        Empowering health and wellness with our comprehensive
                        range of pharmaceutical solutions.
                    </p>
                    <a
                        role="button"
                        href="#vision"
                        className="btn btn-primary mr-4 sm:btn-md md:btn-lg"
                    >
                        KNOW MORE
                    </a>
                    <Link
                        role="button"
                        to="/downloads"
                        className="btn btn-secondary sm:btn-md md:btn-lg"
                    >
                        CATALOGUE
                    </Link>
                </div>
            </div>
        </section>
    )
}

const featuredProductNames = [
    { name: 'Tablets', img: tablet },
    { name: 'Injection', img: injections },
    { name: 'ICU Bed', img: icuBed },
    { name: 'OT Equipment', img: otRoom },
    { name: 'Wheelchair', img: wheelchair },
    { name: 'Soft-Gel Capsules', img: icuBed2 },
    { name: 'Ointments', img: icuBed2 },
    { name: 'Delivery Bed', img: icuBed2 },
]

const FeaturedProducts = () => {
    const lgScreenQuery = window.matchMedia(`(min-width: ${screens.lg})`)
    const [isScreenLg, setIsScreenLg] = useState(lgScreenQuery.matches)
    const slider = useRef<Swiper | null>(null)

    useEffect(() => {
        const syncScreenChange = (e: MediaQueryListEvent) =>
            setIsScreenLg(e.matches)

        lgScreenQuery.addEventListener('change', syncScreenChange)
        return () => {
            lgScreenQuery.removeEventListener('change', syncScreenChange)
        }
    }, [lgScreenQuery])

    useEffect(() => {
        slider.current = new Swiper('.swiper', {
            loop: true,
            slidesPerView: isScreenLg ? 5 : 3,
            centeredSlides: true,
            autoHeight: true,
            spaceBetween: isScreenLg ? 50 : 30,
            autoplay: { delay: isScreenLg ? 2000 : 1000 },
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            speed: isScreenLg ? 1000 : 2000,
        })

        return () => {
            slider.current?.destroy()
        }
    }, [isScreenLg])
    return (
        <Breakout
            style={{
                mask: 'linear-gradient(90deg, transparent, white 10%, white 90%, transparent)',
            }}
        >
            <div className="swiper w-full hover:cursor-grab">
                <div className="swiper-wrapper select-none">
                    {featuredProductNames.map(
                        ({ name, img }, i) =>
                            img && (
                                <div className="swiper-slide" key={i}>
                                    <Link
                                        className="mb-7 grid justify-center"
                                        to="/downloads"
                                        onMouseOver={() =>
                                            slider.current?.autoplay.pause()
                                        }
                                        onMouseLeave={() =>
                                            slider.current?.autoplay.resume()
                                        }
                                    >
                                        <div className="relative aspect-square w-28 rounded-full border-4 border-primary sm:w-56">
                                            <img
                                                className="absolute inset-0 size-full rounded-full object-cover object-center"
                                                src={img}
                                                alt=""
                                            />
                                        </div>
                                        <h4 className="mt-3 whitespace-nowrap text-center">
                                            {name.toUpperCase()}
                                        </h4>
                                    </Link>
                                </div>
                            )
                    )}
                </div>
                <div className="swiper-button-prev">
                    <PiSkipBack size={30} />
                </div>
                <div className="swiper-button-next">
                    <PiSkipForward size={30} />
                </div>
                <div className="swiper-scrollbar"></div>
            </div>
        </Breakout>
    )
}

const reasonsToChooseUs = [
    {
        logo: <PiSparkle className="size-16" />,
        content: video1,
        title: `Commitment to Quality and Accessibility`,
        description: `We firmly believe in quality, and our goal is to make products accessible in every market at an affordable price to meet market needs.`,
    },
    {
        logo: <PiShootingStar className="size-16" />,
        content: video2,
        title: `Accreditations for Business Operations`,
        description: `We have required accreditations to conduct business in regulated, semi-regulated, and non-regulated markets. We are WHO-GMP-ISO certified`,
    },

    {
        logo: <PiShieldStar className="size-16" />,
        content: video3,
        title: `Expert Regulatory Support`,
        description: `We have a highly qualified regulatory team to fulfill registration requirements, prioritizing expedited registration processes.`,
    },

    {
        logo: <PiHandshake className="size-16" />,
        content: video4,
        title: `Building Lasting Relationships`,
        description: `We believe in building healthy and lasting relationships with our partners and customers, earning their loyalty to our brand. It is with this single belief that all our products, categorized into different segments, provide medical help to customers.`,
    },
]
const ReasonsToChooseUse = () => {
    return (
        <Breakout className="bg-base-200 py-24">
            <h2 className="mb-32 text-center text-4xl font-bold md:mb-48 lg:text-6xl">
                Why Choose Us?
            </h2>

            <article className="snap-start space-y-44 border-blue-400 md:space-y-12">
                {reasonsToChooseUs.map((data, i) => (
                    <div
                        key={data.title}
                        className={`flex snap-start flex-wrap items-center md:flex-nowrap ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}
                    >
                        <video
                            className={clsx(
                                `md:object-conver inline-block w-full overflow-hidden bg-primary object-cover max-md:h-[50svh] max-md:rounded-t-3xl md:aspect-[12/16] md:w-full md:max-w-lg`,
                                i % 2 === 0
                                    ? 'md:rounded-r-3xl'
                                    : 'md:rounded-l-3xl',
                                i % 2 === 0
                                    ? 'md:[mask:linear-gradient(-90deg,_rgb(0_0_0_/_100%)_10%,_transparent_90%)]'
                                    : 'md:[mask:linear-gradient(90deg,_rgb(0_0_0_/_100%)_10%,_transparent_90%)]',
                                '[mask:linear-gradient(180deg,_rgb(0_0_0_/_100%)_10%,_transparent_90%)]'
                            )}
                            autoPlay
                            disablePictureInPicture
                            disableRemotePlayback
                            loop
                            muted
                            preload="metadata"
                            playsInline
                            // TODO: Add poster which appears while video is loading
                            poster=""
                        >
                            <source src={data.content} type="video/mp4" />
                            Unsupported video
                        </video>
                        <div className="mx-auto max-w-prose space-y-8 justify-self-center px-8 max-md:text-center">
                            <div className="w-fit max-md:mx-auto">
                                {data.logo}
                            </div>
                            <h2 className="text-4xl/none font-bold">
                                {data.title}
                            </h2>
                            <p className="text-2xl">{data.description}</p>
                        </div>
                    </div>
                ))}
            </article>
        </Breakout>
    )
}

const MissionSection = () => {
    return (
        <Breakout className="justify-self-stretch">
            <article
                className="mx-auto grid max-w-screen-xl auto-rows-fr items-stretch justify-items-center px-breath py-10 lg:grid-cols-3"
                id="vision"
            >
                {[
                    {
                        title: 'Our Vision',
                        logo: <PiEye className="size-8" />,
                        description: (
                            <>
                                <li>
                                    To be one of the reliable, innovative,
                                    customer oriented and most admired
                                    Pharmaceutical Company in the global arena.
                                </li>
                                <li>
                                    To continually create value, bring pride to
                                    our customers and partners at large.
                                </li>

                                <li>
                                    To provide quality products with concern to
                                    Safety for human health.
                                </li>
                            </>
                        ),
                    },
                    {
                        title: 'Our Value',
                        logo: <PiRoadHorizon className="size-8" />,
                        description: (
                            <p>
                                We are committed to offer you wide variety of
                                quality pharmaceutical preparations of various
                                segments along with all desired documentation
                                for your regulatory requirements.
                            </p>
                        ),
                    },
                    {
                        title: 'Our Mission',
                        logo: <PiMegaphone className="size-8" />,
                        description: (
                            <>
                                <li>
                                    Manufacturing quality products with concern
                                    for safety, environment and health.
                                </li>
                                <li>
                                    Following best management practices and
                                    build success with excellence.
                                </li>
                                <li>
                                    To strive ceaselessly with a commitment
                                    towards Customer satisfaction.
                                </li>
                            </>
                        ),
                    },
                ].map((data, i) => (
                    <div
                        className="group max-w-prose border border-neutral-300 bg-base-100 transition-all hover:bg-primary hover:text-primary-content max-lg:first:rounded-t-3xl max-lg:last:rounded-b-3xl lg:first:rounded-l-3xl lg:last:rounded-r-3xl"
                        key={i}
                    >
                        <div className="grid h-full content-center space-y-5 p-8 lg:content-start">
                            {data.logo}
                            <h2 className="text-2xl font-bold">{data.title}</h2>
                            <ul className="list-inside list-disc text-lg/normal">
                                {data.description}
                            </ul>
                        </div>
                    </div>
                ))}
            </article>
        </Breakout>
    )
}
