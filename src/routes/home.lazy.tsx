import { createLazyFileRoute, Link, LinkProps } from '@tanstack/react-router'
import heroVideo from '../assets/hero-video.webm'
import heroVideoPoster from '../assets/hero-image-poster.webp'
import Breakout from '../components/Breakout'
import video1 from '../assets/videos/video1.webm'
import video2 from '../assets/videos/video2.webm'
import video3 from '../assets/videos/video3.webm'
import video4 from '../assets/videos/video4.webm'
import video1Poster from '../assets/videos/video-thumbnail1.webp'
import video2Poster from '../assets/videos/video-thumbnail2.webp'
import video3Poster from '../assets/videos/video-thumbnail3.webp'
import video4Poster from '../assets/videos/video-thumbnail4.webp'
import {
    PiEye,
    PiFactoryThin,
    PiHandshake,
    PiHandshakeThin,
    PiMegaphone,
    PiNotePencilThin,
    PiPaperPlaneThin,
    PiPlanetThin,
    PiRoadHorizon,
    PiShieldStar,
    PiShootingStar,
    PiSkipBack,
    PiSkipForward,
    PiSparkle,
    PiUsersThreeThin,
} from 'react-icons/pi'
import injections from '../assets/featured/injections.webp'
import tablet from '../assets/featured/tablet.webp'
import icuBed from '../assets/featured/icu bed.webp'
import otRoom from '../assets/featured/ot room.webp'
import wheelchair from '../assets/featured/wheelchair.webp'
import softGel from '../assets/featured/soft-gel.webp'
import deliveryBed from '../assets/featured/delivery-bed.webp'
import oitment from '../assets/featured/oitment.webp'
import clsx from 'clsx'
import { useEffect, useRef } from 'react'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
import { screens } from 'tailwindcss/defaultTheme'
import Balancer from 'react-wrap-balancer'
import useMediaQuery from '../hooks/useMediaQuery'
import { animate, inView } from 'motion'

export const Route = createLazyFileRoute('/home')({
    component: () => <Home />,
})

const Home = () => {
    return (
        <div className="-mt-8 space-y-10">
            <Hero />

            <FeaturedProducts />

            <ReasonsToChooseUse />

            <MissionSection />

            <Specialties />

            <CompanyStats />
        </div>
    )
}

const Hero = () => {
    return (
        <section className="relative z-40 -mx-breath grid min-h-svh items-center overflow-x-hidden bg-white bg-cover *:col-start-1 *:row-start-1 lg:-mx-breath-lg">
            <div className="absolute inset-x-0 size-full brightness-[60%]">
                <video
                    className="inline-block size-full object-cover"
                    poster={heroVideoPoster}
                    autoPlay
                    disablePictureInPicture
                    disableRemotePlayback
                    loop
                    muted
                    preload="none"
                    playsInline
                    aria-hidden={true}
                >
                    <source src={heroVideo} type="video/webm" />
                </video>
            </div>

            <div className="hero-content mb-14 justify-self-center text-center">
                <div className="space-y-6 sm:space-y-10">
                    <h1
                        className="text-4xl font-bold text-transparent sm:text-6xl md:text-7xl"
                        style={{
                            backgroundImage: `linear-gradient(45deg,
                                    oklch(var(--p)),
                                    oklch(var(--s) )`,
                            backgroundClip: 'text',
                        }}
                    >
                        Kript Pharmaceuticals
                    </h1>
                    <p className="mx-auto max-w-[55ch] text-sm font-bold text-neutral-200 md:text-lg">
                        One of the leading pharmaceutical suppliers from India that has been
                        providing pharmaceutical and nutraceutical OEM services for international
                        well-known brands for over
                    </p>
                    <Link
                        role="button"
                        to={'/contact' + '#form'}
                        className="btn btn-primary mr-4 uppercase sm:btn-md md:btn-lg"
                    >
                        Get a quote
                    </Link>
                    <Link
                        role="button"
                        to="/catalogue"
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
    { name: 'Tablets', img: tablet, href: '/product', search: { searchString: 'tablets' } },

    {
        name: 'Soft-Gel Capsules',
        img: softGel,
        href: '/product',
        search: { searchString: 'soft gel capsules' },
    },

    { name: 'Injection', img: injections, href: '/product', search: { searchString: 'injection' } },

    { name: 'ICU Bed', img: icuBed, href: '/equipment', search: { equipmentName: 'Hospital Bed' } },

    {
        name: 'OT Equipment',
        img: otRoom,
        href: '/equipment',
        search: { equipmentName: 'OT Table' },
    },

    {
        name: 'Wheelchair',
        img: wheelchair,
        href: '/equipment',
        search: { equipmentName: 'wheelchair' },
    },

    { name: 'Ointments', img: oitment, href: '/product', search: { searchString: 'ointments' } },

    {
        name: 'Delivery Bed',
        img: deliveryBed,
        href: '/equipment',
        search: { equipmentName: 'Delivery Bed' },
    },
] satisfies { href: LinkProps['to']; search?: LinkProps['search']; name: string; img: string }[]

const FeaturedProducts = () => {
    const { queryMatches: isScreenLg } = useMediaQuery(`(min-width: ${screens.lg})`)

    const slider = useRef<Swiper | null>(null)
    useEffect(() => {
        slider.current = new Swiper('.swiper-home', {
            effect: 'coverflow',
            slidesPerView: 2,
            breakpoints: {
                [screens.md.replace('px', '')]: {
                    slidesPerView: 3,
                },
            },
            coverflowEffect: {
                depth: 250,
                modifier: 1,
                rotate: 0,
                scale: 1,
                slideShadows: false,
            },
            pagination: {
                el: '.swiper-pagination',
            },
            initialSlide: Math.floor(featuredProductNames.length / 2) - 1,
            autoHeight: false,
            autoplay: { pauseOnMouseEnter: true, reverseDirection: false, delay: 2500 },
            loop: false,
            centeredSlides: true,
        })

        return () => {
            slider.current?.destroy()
        }
    }, [isScreenLg])
    return (
        <Breakout
            className="tooltip tooltip-bottom relative flex"
            data-tip={isScreenLg ? 'Auto Scroll Paused While Hovering' : 'Click to view more'}
        >
            <div
                className="btn btn-ghost hidden self-center md:inline-flex"
                onClick={() => slider.current?.slidePrev()}
                data-tip="previous"
            >
                <PiSkipBack size={30} />
            </div>

            <div className="swiper swiper-home hover:cursor-grab">
                <div className="swiper-wrapper select-none py-20">
                    {featuredProductNames.map(
                        ({ name, img, href, search }, i) =>
                            img && (
                                <div className="swiper-slide" key={i}>
                                    <Link
                                        className="sm: mx-auto flex aspect-[9/10] max-w-96 flex-col justify-between gap-5 overflow-hidden rounded-xl bg-transparent"
                                        to={href}
                                        search={search}
                                    >
                                        <div className="grow overflow-hidden">
                                            <img
                                                loading="lazy"
                                                className="inline-block aspect-square h-full rounded-full border border-primary object-cover"
                                                src={img}
                                                alt=""
                                            />
                                        </div>
                                        <h4 className="grid basis-1/4 place-content-center truncate text-xs sm:text-lg">
                                            {name.toUpperCase()}
                                        </h4>
                                    </Link>
                                </div>
                            )
                    )}
                </div>
                <div className="swiper-pagination"></div>
            </div>
            <div
                className="btn btn-ghost hidden self-center md:inline-flex"
                onClick={() => slider.current?.slideNext()}
            >
                <PiSkipForward size={30} />
            </div>
        </Breakout>
    )
}

const reasonsToChooseUs = [
    {
        logo: <PiSparkle className="size-16" />,
        content: video1,
        poster: video1Poster,
        title: `Commitment to Quality and Accessibility`,
        description: `We firmly believe in quality, and our goal is to make products accessible in every market at an affordable price to meet market needs.`,
    },
    {
        logo: <PiShootingStar className="size-16" />,
        content: video2,
        poster: video2Poster,
        title: `Accreditations for Business Operations`,
        description: `We have required accreditations to conduct business in regulated, semi-regulated, and non-regulated markets. We are WHO-GMP-ISO certified`,
    },

    {
        logo: <PiShieldStar className="size-16" />,
        content: video3,
        poster: video3Poster,
        title: `Expert Regulatory Support`,
        description: `We have a highly qualified regulatory team to fulfill registration requirements, prioritizing expedited registration processes.`,
    },

    {
        logo: <PiHandshake className="size-16" />,
        content: video4,
        poster: video4Poster,
        title: `Building Lasting Relationships`,
        description: `We believe in building healthy and lasting relationships with our partners and customers, earning their loyalty to our brand. It is with this single belief that all our products, categorized into different segments, provide medical help to customers.`,
    },
]
const ReasonsToChooseUse = () => {
    const transitionInOnScrollRef = useRef<(HTMLDivElement | null)[]>([null])

    const videoAppearOnScrollRef = useRef<(HTMLVideoElement | null)[]>([null])

    useEffect(() => {
        const container = videoAppearOnScrollRef.current
        if (!container) return

        container.forEach((el) => {
            if (el !== null)
                inView(el, (info) => {
                    animate(
                        info.target,
                        { opacity: 1 },
                        { delay: 0.4, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
                    )
                })
        })
    }, [])

    useEffect(() => {
        const container = transitionInOnScrollRef.current
        if (!container) return

        container.forEach((el) => {
            if (el !== null)
                inView(el, (info) => {
                    animate(
                        info.target,
                        { opacity: 1, transform: 'none' },
                        { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
                    )
                })
        })
    }, [])

    return (
        <Breakout className="bg-base-200 py-20">
            <h2 className="mb-20 text-center text-4xl font-bold lg:text-5xl">Why Choose Us?</h2>

            <article className="snap-start space-y-40 overflow-hidden border-blue-400 lg:space-y-0">
                {reasonsToChooseUs.map((data, i) => (
                    <div
                        key={data.title}
                        className={`flex snap-start flex-wrap items-center lg:flex-nowrap ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}
                    >
                        <video
                            className={clsx(
                                `lg:object-conver inline-block w-full overflow-hidden bg-primary object-cover opacity-0 max-lg:h-[50svh] max-lg:rounded-t-3xl lg:aspect-[12/15] lg:w-full lg:max-w-lg`,
                                i % 2 === 0 ? 'lg:rounded-r-3xl' : 'lg:rounded-l-3xl',
                                i % 2 === 0
                                    ? 'lg:[mask:linear-gradient(-90deg,_rgb(0_0_0_/_100%)_10%,_transparent_90%)]'
                                    : 'lg:[mask:linear-gradient(90deg,_rgb(0_0_0_/_100%)_10%,_transparent_90%)]',
                                '[mask:linear-gradient(180deg,_rgb(0_0_0_/_100%)_10%,_transparent_90%)]'
                            )}
                            ref={(ref) => videoAppearOnScrollRef.current.push(ref)}
                            autoPlay
                            disablePictureInPicture
                            disableRemotePlayback
                            loop
                            muted
                            preload="none"
                            playsInline
                            poster={data.poster}
                        >
                            <source src={data.content} type="video/webm" />
                            Unsupported video
                        </video>
                        <div
                            className={clsx(
                                'mx-auto max-w-prose space-y-8 justify-self-center px-8 text-neutral-800 max-lg:text-center',
                                'opacity-0',
                                i % 2 === 0 ? '-translate-x-full' : 'translate-x-full'
                            )}
                            ref={(ref) => transitionInOnScrollRef.current.push(ref)}
                        >
                            <div className="w-fit max-lg:mx-auto">{data.logo}</div>
                            <h2 className="text-4xl/none font-semibold">
                                <Balancer>{data.title}</Balancer>
                            </h2>
                            <p className="text-2xl text-neutral-700">
                                <Balancer>{data.description}</Balancer>
                            </p>
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

const Specialties = () => {
    return (
        <div className="grid gap-10 lg:grid-cols-3">
            {[
                { icon: <PiPlanetThin size={'100%'} />, title: 'Pharmaceuticals Export & Import' },
                { icon: <PiPaperPlaneThin size={'100%'} />, title: 'Research & Development' },
                {
                    icon: <PiNotePencilThin size={'100%'} />,
                    title: 'WHO-GMP Registered',
                },
            ].map((item, i) => (
                <div
                    key={i}
                    className="place-center grid place-content-center place-items-center gap-4"
                >
                    <span className="flex aspect-square max-w-32 place-content-center rounded-full bg-primary p-4 text-primary-content">
                        {item.icon}
                    </span>
                    <h6> {item.title} </h6>
                </div>
            ))}
        </div>
    )
}

const CompanyStats = () => {
    return (
        <Breakout className="flex flex-col divide-solid bg-primary py-5 text-primary-content max-lg:divide-y lg:flex-row lg:divide-x">
            {[
                { icon: <PiUsersThreeThin size={65} />, stat: '100+', title: 'Current Employees' },
                {
                    icon: <PiFactoryThin size={65} />,
                    stat: '3+',
                    title: 'Invested Large Pharmaceeutical Manufacturing Company',
                },
                { icon: <PiHandshakeThin size={65} />, stat: '200+', title: 'Partners' },
            ].map((item, i) => (
                <div key={i} className="inline-flex basis-1/3 flex-col items-center text-center">
                    <span> {item.icon} </span>
                    <h6>
                        <em className="text-6xl font-bold">{item.stat}</em>
                        <br />
                        {item.title}
                    </h6>
                </div>
            ))}
        </Breakout>
    )
}
