import Breakout from '../../components/Breakout'
import clsx from 'clsx'
import { useEffect, useRef } from 'react'
import Balancer from 'react-wrap-balancer'
import { animate, inView } from 'motion'
import { PiHandshake, PiShieldStar, PiShootingStar, PiSparkle } from 'react-icons/pi'
import video1 from '../../assets/videos/video1.webm'
import video2 from '../../assets/videos/video2.webm'
import video3 from '../../assets/videos/video3.webm'
import video4 from '../../assets/videos/video4.webm'
import video1Poster from '../../assets/videos/video-thumbnail1.webp'
import video2Poster from '../../assets/videos/video-thumbnail2.webp'
import video3Poster from '../../assets/videos/video-thumbnail3.webp'
import video4Poster from '../../assets/videos/video-thumbnail4.webp'

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

export function ReasonsToChooseUse() {
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
