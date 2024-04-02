import { createFileRoute, useNavigate } from '@tanstack/react-router'
import medicineData from '../assets/medicine.json'
import Fuse from 'fuse.js'
import { useMemo, useState } from 'react'
import { Link } from '@tanstack/react-router'

const modules = import.meta.glob('../assets/backgrounds/*.webp', {
    eager: true,
})

const imagePaths = Object.values(modules).map((module) => {
    if (typeof module === 'object' && module && 'default' in module) {
        return module.default as string
    }
    return undefined
})

const fuse = new Fuse(medicineData, { keys: ['name', 'type'] })

/* This value had to be hardcoded due to uncertainty in the structure of the underlying data.
 * It'll stay this way untill the client can make up their mind on what they want to cateloge.
 * The developer has no say in this. */
const categories = [
    'General',
    'Injections & Infusion',
    'Powder / sachet / granuals / nano shot',
    'Ointments',
    'eye / ear / nasal',
    'Syrup',
    'Softgel',
    'CAPSULES',
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
        const filter: Category[] = []
        if (categoryFilter) {
            if (Array.isArray(categoryFilter)) {
                filter.push(
                    ...categoryFilter.filter((val) => categories.includes(val))
                )
            } else if (typeof categoryFilter === 'string') {
                categories.includes(categoryFilter as Category) &&
                    filter.push(categoryFilter as Category)
            }
        }
        return {
            searchString: (searchString ?? '') as string,
            categoryFilter: filter as Category[],
        }
    },
})

const Product = () => {
    const navigate = useNavigate()

    const changeUrlParams = (
        param: keyof ProductSearch,
        newValue: ProductSearch[keyof ProductSearch]
    ) => {
        navigate({
            search: (
                prev: ProductSearch | undefined
            ): Partial<ProductSearch> => ({
                ...prev,
                [param]: newValue,
            }),
        })
    }

    const { searchString: urlSearchString, categoryFilter: urlCategoryFilter } =
        Route.useSearch()
    const [searchString, setSearchString] = useState(urlSearchString ?? '')
    const [visibleCategories, setVisibleCategories] = useState<Category[]>(
        urlCategoryFilter ?? [...categories]
    )

    const filteredMedicineData = useMemo(() => {
        return searchString.length > 1
            ? fuse.search(searchString).map((d) => d.item)
            : medicineData.filter((item) =>
                  visibleCategories.includes(item.type as Category)
              )
    }, [searchString, visibleCategories])

    const [maxRows, setMaxRows] = useState(11)

    return (
        <section className="-mx-breath grid gap-10  lg:-mx-breath-lg">
            <section
                className="flex gap-4 overflow-x-auto px-2 py-5 md:px-7"
                style={{
                    mask: 'linear-gradient(90deg, transparent, white 10%, white 90%, transparent)',
                }}
            >
                {categories.map((data, i) => (
                    <Link
                        search={(prev) => ({ ...prev, categoryFilter: data })}
                        onClick={() => setVisibleCategories([data])}
                        key={i}
                        className="relative grid aspect-[2/1] shrink-0 basis-1/4 place-content-center rounded-lg"
                    >
                        <img
                            className="absolute inset-0 size-full rounded-lg object-cover object-center brightness-50"
                            src={imagePaths[i]}
                            alt=""
                        />
                        <h4 className="z-10 truncate p-1 text-sm font-bold text-neutral-100 md:text-xl">
                            {data.toUpperCase()}
                        </h4>
                    </Link>
                ))}
            </section>
            <article className="container mx-auto">
                <section className="flex flex-wrap justify-center gap-2 sm:justify-between">
                    <label className="input input-bordered flex items-center gap-2">
                        <span className="sr-only">Search the table</span>
                        <input
                            type="text"
                            placeholder="Search the table..."
                            className="placeholder:italic"
                            value={searchString}
                            maxLength={50}
                            onChange={(e) => {
                                setSearchString(e.target.value)
                                changeUrlParams('searchString', e.target.value)
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
                    <details className="dropdown dropdown-end basis-1/3">
                        <summary className="btn btn-ghost btn-outline w-full">
                            Filter
                            <svg
                                width="12px"
                                height="12px"
                                className="inline-block size-2 fill-current opacity-60"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 2048 2048"
                            >
                                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                            </svg>
                        </summary>
                        <ul className="menu dropdown-content z-30 mt-2 w-full rounded-box bg-base-300 shadow">
                            {categories.map((item, i) => (
                                <div className="form-control" key={i}>
                                    <label className="label cursor-pointer">
                                        <span className="label-text">
                                            {item}
                                        </span>
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    changeUrlParams(
                                                        'categoryFilter',
                                                        [
                                                            ...visibleCategories,
                                                            item,
                                                        ]
                                                    )
                                                    setVisibleCategories((p) =>
                                                        p.includes(item)
                                                            ? p
                                                            : [...p, item]
                                                    )
                                                } else if (!e.target.checked) {
                                                    changeUrlParams(
                                                        'categoryFilter',
                                                        visibleCategories.filter(
                                                            (v) => item !== v
                                                        )
                                                    )
                                                    setVisibleCategories((p) =>
                                                        p.includes(item)
                                                            ? p.filter(
                                                                  (v) =>
                                                                      v !== item
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
                        </ul>
                    </details>
                </section>
                <table className="table table-zebra table-pin-rows">
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
                        {filteredMedicineData.slice(0, maxRows).map((data) => (
                            <tr key={data.id} className="hover">
                                <th>{data.id}</th>
                                <td>{data.name}</td>
                                <td>{data.type}</td>
                                <td>{data.packaging}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="join flex *:basis-1/3">
                    <button
                        className="btn btn-ghost btn-outline join-item"
                        onClick={() =>
                            maxRows < filteredMedicineData.length
                                ? setMaxRows((p) => p + 11)
                                : null
                        }
                    >
                        Show More +
                    </button>
                    <button
                        className="btn btn-ghost btn-outline join-item"
                        onClick={() => setMaxRows(filteredMedicineData.length)}
                    >
                        Show All
                    </button>
                    <button
                        className="btn btn-ghost btn-outline join-item"
                        onClick={() => setMaxRows(11)}
                    >
                        Show Less
                    </button>
                </div>
            </article>
        </section>
    )
}
