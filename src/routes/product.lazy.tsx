import {
    Router,
    createFileRoute,
    useNavigate,
    createLazyFileRoute,
    createRouter,
} from '@tanstack/react-router'
import medicineData from '../assets/medicine.json'
import Fuse from 'fuse.js'
import { useState } from 'react'

const fuse = new Fuse(medicineData, { keys: ['name', 'type'] })

type ProductSearch = {
    searchString: string
}

export const Route = createFileRoute('/product')({
    component: () => <Product />,
    validateSearch: (search: Record<string, unknown>): ProductSearch => {
        const { searchString } = search
        return { searchString: searchString as string }
    },
})

const category = [
    'injectables',
    'infusion',
    'powder',
    'ointments',
    'syrup',
    'softgel',
    'capsules',
    'tablets',
] as const

const Item = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
                <img
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

const Product = () => {
    // const applyFilter = (val: string, filter: string[]) => {
    //     const result =
    //         val.length >= 1
    //             ? fuse
    //                   .search(val)
    //                   .map((item) => item.item)
    //                   .filter(
    //                       (item) =>
    //                           filter.includes(item.type) ||
    //                           filter.includes(item.division)
    //                   )
    //             : medicineData.filter(
    //                   (item) =>
    //                       filter.includes(item.type) ||
    //                       filter.includes(item.division)
    //               )
    //     // setProducts(result)
    // }

    const { searchString: urlSearchString } = Route.useSearch()

    const navigate = useNavigate()

    const [searchString, setSearchString] = useState(urlSearchString ?? '')

    const filteredMedicineData =
        searchString.length > 1
            ? fuse.search(searchString).map((d) => d.item)
            : medicineData

    return (
        <section>
            <input
                type="text"
                placeholder="Search..."
                className="input input-bordered w-full max-w-xs mx-auto block"
                value={searchString}
                maxLength={50}
                onChange={(e) => {
                    setSearchString(e.target.value)
                    navigate({
                        search: { searchString: e.target.value },
                    })
                }}
            />
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Packaging</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredMedicineData.map((data) => (
                            <tr key={data.id} className="hover">
                                <th>{data.id}</th>
                                <td>{data.name}</td>
                                <td>{data.type}</td>
                                <td>{data.packaging}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
