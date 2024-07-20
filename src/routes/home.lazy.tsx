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
    PiHandshake,
    PiHandSwipeRight,
    PiMegaphone,
    PiRoadHorizon,
    PiShieldStar,
    PiShootingStar,
    PiSkipBack,
    PiSkipForward,
    PiSparkle,
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

export const Route = createLazyFileRoute('/home')({
    component: () => <Home />,
})

const Home = () => {
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
                    className="inline-block size-full object-cover"
                    poster={heroVideoPoster}
                    autoPlay
                    disablePictureInPicture
                    disableRemotePlayback
                    loop
                    muted
                    preload="none"
                    playsInline
                >
                    <source src={heroVideo} type="video/webm" />
                </video>
            </div>

            <div className="hero-content mb-14 justify-self-center text-center">
                <div className="space-y-6 sm:space-y-10">
                    <h1
                        // className="text-3xl font-bold text-transparent md:text-6xl"
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
                    <p className="mx-auto max-w-[50ch] text-sm font-bold text-neutral-200 md:text-lg">
                        Discover trusted medications where quality meets care. Empowering health and
                        wellness with our comprehensive range of pharmaceutical solutions.
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
    { name: 'Tablets', img: tablet, href: '/product', search: { searchString: 'tablets' } },

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

    {
        name: 'Soft-Gel Capsules',
        img: softGel,
        href: '/product',
        search: { searchString: 'soft gel capsules' },
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
            slidesPerView: 3,
            coverflowEffect: {
                depth: 250,
                modifier: 1,
                rotate: 0,
                scale: 1,
                slideShadows: false,
                stretch: isScreenLg ? 0 : -60,
            },
            pagination: {
                el: '.swiper-pagination',
            },
            initialSlide: Math.floor(featuredProductNames.length / 2) - 1,
            autoHeight: false,
            autoplay: { pauseOnMouseEnter: true, reverseDirection: false },
            loop: false,
            centeredSlides: true,
            centeredSlidesBounds: true,
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
                className="btn btn-ghost hidden self-center rounded-none md:inline-flex"
                onClick={() => slider.current?.slidePrev()}
                data-tip="previous"
            >
                <PiSkipBack size={30} className="text-primary-content" />
            </div>

            <div className="absolute -top-20 w-full text-neutral-500 md:hidden">
                <PiHandSwipeRight size={50} className="mx-auto" />
                swipe
            </div>
            <div className="swiper swiper-home hover:cursor-grab">
                <div className="swiper-wrapper select-none py-20">
                    {featuredProductNames.map(
                        ({ name, img, href, search }, i) =>
                            img && (
                                <div className="swiper-slide" key={i}>
                                    <Link
                                        className="sm:w-54 mx-auto flex aspect-[9/10] w-40 flex-col justify-between overflow-hidden rounded-xl bg-base-100 lg:w-80"
                                        to={href}
                                        search={search}
                                        style={{
                                            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                                        }}
                                    >
                                        <div className="grow overflow-hidden">
                                            <img
                                                loading="lazy"
                                                className="inline-block size-full overflow-hidden rounded-t-xl object-cover"
                                                src={img}
                                                alt=""
                                            />
                                        </div>
                                        <h4 className="grid basis-1/4 place-content-center font-semibold">
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
                className="btn btn-ghost hidden self-center rounded-none md:inline-flex"
                onClick={() => slider.current?.slideNext()}
            >
                <PiSkipForward size={30} className="text-primary-content" />
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
                                i % 2 === 0 ? 'md:rounded-r-3xl' : 'md:rounded-l-3xl',
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
                            preload="none"
                            playsInline
                            poster={data.poster}
                        >
                            <source src={data.content} type="video/webm" />
                            Unsupported video
                        </video>
                        <div className="mx-auto max-w-prose space-y-8 justify-self-center px-8 max-md:text-center">
                            <div className="w-fit max-md:mx-auto">{data.logo}</div>
                            <h2 className="text-4xl/none font-bold">
                                <Balancer>{data.title}</Balancer>
                            </h2>
                            <p className="text-2xl">
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
                            <p>
                                We are committed to offer you wide variety of quality pharmaceutical
                                preparations of various segments along with all desired
                                documentation for your regulatory requirements.
                            </p>
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
