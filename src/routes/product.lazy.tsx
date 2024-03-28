import { createFileRoute, useNavigate } from '@tanstack/react-router'
import medicineData from '../assets/medicine.json'
import Fuse from 'fuse.js'
import { useMemo, useState } from 'react'

const fuse = new Fuse(medicineData, { keys: ['name', 'type'] })

const categories = [
    'injectables',
    'infusion',
    'powder',
    'ointments',
    'syrup',
    'softgel',
    'capsules',
    'tablets',
] as const

type Category = (typeof categories)[number]

type ProductSearch = {
    searchString: string
    categoryFilter: Category[]
}

export const Route = createFileRoute('/product')({
    component: () => <Product />,
    validateSearch: (search: Record<string, unknown>): ProductSearch => {
        const { searchString, categoryFilter } = search
        const filter = []
        if (Array.isArray(categoryFilter)) {
            filter.push(
                ...categoryFilter.filter((val) => categories.includes(val))
            )
        } else if (typeof categoryFilter === 'string') {
            filter.push(
                categories.includes(categoryFilter as Category)
                    ? categories
                    : []
            )
        }
        return {
            searchString: searchString as string,
            categoryFilter: filter,
        }
    },
})

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

    const { searchString: urlSearchString, categoryFilter: urlCategoryFilter } =
        Route.useSearch()

    const navigate = useNavigate()

    const [searchString, setSearchString] = useState(urlSearchString ?? '')

    const [visibleCategories, setVisibleCategories] = useState<Category[]>(
        urlCategoryFilter ?? categories
    )

    const filteredMedicineData = useMemo(
        () =>
            searchString.length > 1
                ? fuse.search(searchString).map((d) => d.item)
                : medicineData,
        [searchString]
    )

    return (
        <section className="grid gap-10">
            <span className="flex items-start gap-7">
                <label className="flex items-center gap-2">
                    <span className="sr-only">Search</span>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="input input-ghost block w-full placeholder:italic"
                        value={searchString}
                        maxLength={50}
                        onChange={(e) => {
                            setSearchString(e.target.value)
                            navigate({
                                search: (prev) => ({
                                    ...prev,
                                    searchString: e.target.value,
                                }),
                            })
                        }}
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-4 opacity-70"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </label>
                <div className="collapse collapse-arrow basis-1/2 bg-base-200">
                    <input type="checkbox" />
                    <h5 className="collapse-title text-xl font-medium">
                        Filter
                    </h5>
                    <div className="collapse-content">
                        {categories.map((item, i) => (
                            <div className="form-control" key={i}>
                                <label className="label cursor-pointer">
                                    <span className="label-text">{item}</span>
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                navigate({
                                                    search: (prev) => ({
                                                        ...prev,
                                                        categoryFilter: [
                                                            ...visibleCategories,
                                                            item,
                                                        ],
                                                    }),
                                                })
                                                setVisibleCategories((p) =>
                                                    p.includes(item)
                                                        ? p
                                                        : [...p, item]
                                                )
                                            } else if (!e.target.checked) {
                                                navigate({
                                                    search: (prev) => ({
                                                        ...prev,
                                                        categoryFilter:
                                                            visibleCategories.filter(
                                                                (v) =>
                                                                    item !== v
                                                            ),
                                                    }),
                                                })
                                                setVisibleCategories((p) =>
                                                    p.includes(item)
                                                        ? p.filter(
                                                              (v) => v !== item
                                                          )
                                                        : p
                                                )
                                            }
                                        }}
                                        checked={visibleCategories.includes(
                                            item
                                        )}
                                    />
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </span>
            <article className="-mx-breath max-h-svh  max-w-10xl overflow-x-auto lg:-mx-breath-lg">
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
            </article>
        </section>
    )
}
