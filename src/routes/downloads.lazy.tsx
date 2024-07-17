import { createLazyFileRoute } from '@tanstack/react-router'
import furniturePdf from '../assets/downloadable-pdf/furniture-catalogue.pdf'
import pharmaRangePdf from '../assets/downloadable-pdf/pharma-range.pdf'
import { memo } from 'react'

export const Route = createLazyFileRoute('/downloads')({
    component: memo(() => <Download />),
})

const Download = () => {
    return (
        <section className="flex flex-wrap justify-center gap-8">
            <div className="card card-compact w-96 bg-base-300">
                <div className="card-body">
                    <h2 className="card-title">Pharmaceutical Range</h2>
                    <p>Check out our latest collection of pharmaceutical products</p>
                    <div className="card-actions justify-end">
                        <a
                            className="btn"
                            href={pharmaRangePdf}
                            target="_blank"
                            aria-label="download pharmaceutical range catalogue pdf"
                        >
                            View PDF
                        </a>
                    </div>
                </div>
            </div>

            <div className="card card-compact w-96 bg-base-300">
                <div className="card-body">
                    <h2 className="card-title">Furniture and Equipment</h2>
                    <p>Check out our latest collection of pharmaceutical equipment and furniture</p>
                    <div className="card-actions justify-end">
                        <a
                            className="btn"
                            href={furniturePdf}
                            target="_blank"
                            aria-label="download equipment and furniture catalogue pdf"
                        >
                            View PDF
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
