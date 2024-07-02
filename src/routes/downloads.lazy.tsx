import { createLazyFileRoute } from '@tanstack/react-router'
import furniturePdf from '../assets/furniture-catalogue.pdf'
import pharmaRangePdf from '../assets/pharma-range.pdf'

export const Route = createLazyFileRoute('/downloads')({
    component: () => <Download />,
})

const Download = () => {
    return (
        <section className="">
            <div className="card mx-auto bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Download Our Catalogue</h2>
                    <div className="card-actions">
                        <a
                            className="btn hover:btn-primary"
                            href={pharmaRangePdf}
                            target="_blank"
                        >
                            Pharmaceutical Range
                        </a>
                        <a
                            className="btn hover:btn-primary"
                            href={furniturePdf}
                            target="_blank"
                        >
                            {'Furniture & Equipment'}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
