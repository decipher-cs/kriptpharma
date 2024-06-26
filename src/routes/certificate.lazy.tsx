import { createLazyFileRoute } from '@tanstack/react-router'
import certificateImg from '../assets/certificate.webp'

export const Route = createLazyFileRoute('/certificate')({
    component: () => (
        <section className="space-y-8 text-center">
            <h2 className="text-center text-2xl sm:text-5xl">Certificates</h2>

            <article className="grid justify-items-center gap-10">
                {Array(3)
                    .fill(null)
                    .map((i) => (
                        <a
                            href={certificateImg}
                            target="_blank"
                            key={i}
                            className="w-full md:w-2/3"
                        >
                            <img
                                src={certificateImg}
                                className="size-full"
                                alt="certificate of excellence"
                            />
                        </a>
                    ))}
            </article>
        </section>
    ),
})
