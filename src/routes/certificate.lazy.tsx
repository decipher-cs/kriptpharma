import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/certificate')({
    component: () => (
        <section className="text-center space-y-8">
            <h2 className="text-5xl text-center">Certificates</h2>

            <article className="grid gap-10 justify-items-center">
                {Array(3)
                    .fill(null)
                    .map((data, i) => (
                        <a
                            href="https://www.geckoandfly.com/wp-content/uploads/2019/07/certificate-template-41.jpg"
                            target="_blank"
                            key={i}
                            className="w-1/2"
                        >
                            <img
                                src="https://www.geckoandfly.com/wp-content/uploads/2019/07/certificate-template-41.jpg"
                                className="size-full"
                                alt="certificate of excellence"
                            />
                        </a>
                    ))}
            </article>
        </section>
    ),
})
