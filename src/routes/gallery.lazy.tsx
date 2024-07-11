import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
import { createLazyFileRoute } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'

const modules = import.meta.glob('../assets/gallery/*.*', {
    eager: true,
})

const imagePaths = Object.values(modules).map((module) => {
    if (typeof module === 'object' && module && 'default' in module) {
        const path = module.default
        if (typeof path === 'string') {
            const parts = path.split('/')
            const filename = parts[parts.length - 1]
                .replace(/\.[\w]*$/g, '')
                .replace(/%20/g, ' ')
            return { path, filename }
        }
    }
})

export const Route = createLazyFileRoute('/gallery')({
    component: () => <Gallery />,
})

const Gallery = () => {
    const slider = useRef<Swiper | null>(null)
    useEffect(() => {
        slider.current = new Swiper('.swiper-gallery', {
            loop: true,
            slidesPerView: 1,
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
            autoplay: { delay: 2500 },
        })

        return () => {
            slider.current?.destroy()
        }
    }, [])

    return (
        <section className="flex flex-col gap-4">
            <div className="swiper-gallery h-[80svh] w-full">
                <div className="swiper-wrapper select-none">
                    {imagePaths.map(
                        (img, i) =>
                            img && (
                                <img
                                    className="swiper-slide inline-block object-contain"
                                    key={i}
                                    src={img.path}
                                    alt={img.filename}
                                    onMouseOver={() =>
                                        slider.current?.autoplay.pause()
                                    }
                                    onMouseLeave={() =>
                                        slider.current?.autoplay.resume()
                                    }
                                />
                            )
                    )}
                </div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-scrollbar"></div>
            </div>
        </section>
    )
}
