import { createLazyFileRoute } from '@tanstack/react-router'
import furniturePdf from '../assets/furniture-catalogue.pdf'
import pharmaRangePdf from '../assets/pharma-range.pdf'
import { useState } from 'react'

export const Route = createLazyFileRoute('/downloads')({
    component: () => <Download />,
})

const Download = () => {
    const [selectedPdf, setSelectedPdf] = useState(furniturePdf)
    return (
        <section className="">
            <div className="flex *:basis-1/2">
                <article className="border">
                    <h4>Hospital and Furniture Equipement</h4>
                    <button
                        className="btn btn-lg"
                        onClick={() => setSelectedPdf(furniturePdf)}
                    >
                        View
                    </button>
                </article>

                <article className="border">
                    <h4>Pharma Range</h4>
                    <button
                        className="btn btn-lg"
                        onClick={() => setSelectedPdf(pharmaRangePdf)}
                    >
                        View
                    </button>
                </article>
            </div>

            <embed src={selectedPdf} height={800} width={'100%'} />
        </section>
    )
}
