import heroVideo from '../../assets/hero-video.webm'
import heroVideoPoster from '../../assets/hero-image-poster.webp'
import { Link } from '@tanstack/react-router';

export default function Hero() {
    return (
        <section className="relative z-40 -mx-breath grid min-h-svh items-center overflow-x-hidden bg-cover *:col-start-1 *:row-start-1 lg:-mx-breath-lg">
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
