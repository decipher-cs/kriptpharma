import { createFileRoute, useNavigate } from '@tanstack/react-router'
import medicineProducts from '../assets/pharma-range.json'
import Fuse from 'fuse.js'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import Breakout from '../components/Breakout'

const modules = import.meta.glob('../assets/backgrounds/*.webp', {
    eager: true,
})

const imagePaths = Object.values(modules).map((module) => {
    if (typeof module === 'object' && module && 'default' in module) {
        return module.default as string
    }
    return undefined
})

const fuse = new Fuse(medicineProducts, {
    keys: ['category', 'composition', 'form'],
})

const categories = [
    'beta lactams and penicillin antibiotics range',
    'cephalosporins range',
    'other antibiotics and anti-infectives range',
    'nsaidS ,painkillers , anti-pyretic muscle relaxants and anti-spasmodic range',
    'anti-psychotics, anti-depressants, anxiolytics, neuropathy and neuropsychiatry range',
    'cardiac, anti-hypertensives and diabetic range',
    'diabetic range',
    'antacids, anti-emetics range and ppi range',
    'anti-cold , anti-allergic , mucolytics and anti-tussive range',
    'vitamins and supplements range',
    'statins and anti-cholestorol range',
    'other approvals',
    'cefa group list',
    'pencillin group list',
    'penem group approved list',
    'dry non beta injections',
    'general liquid injection',
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
    const horizontalMenu = useRef<HTMLDivElement>(null)
    const middleMenuCard = useRef<HTMLAnchorElement>(null)

    useEffect(() => {
        const card = middleMenuCard.current
        if (!card) return
        card.scrollIntoView()
    }, [])

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
        urlCategoryFilter?.length ? urlCategoryFilter : [...categories]
    )

    const filteredMedicineData = useMemo(() => {
        return searchString.length > 1
            ? fuse.search(searchString).map((v) => v.item)
            : medicineProducts.filter((item) =>
                  visibleCategories.includes(
                      item.category.toLowerCase() as Category
                  )
              )
    }, [searchString, visibleCategories])

    const [maxRows, setMaxRows] = useState(11)

    return (
        <section className="space-y-10">
            <Breakout>
                <section
                    className="relative flex gap-4 overflow-x-auto px-2 py-5 md:px-7"
                    style={{
                        mask: 'linear-gradient(90deg, transparent, white 10%, white 90%, transparent)',
                    }}
                    ref={horizontalMenu}
                >
                    <button
                        className="btn btn-primary self-center"
                        aria-label="Go to end of list"
                        onClick={() => {
                            const menuContainer = horizontalMenu.current
                            if (!menuContainer) return
                            menuContainer.scroll({
                                behavior: 'smooth',
                                left: 99999,
                            })
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M3 5v14" />
                            <path d="M21 12H7" />
                            <path d="m15 18 6-6-6-6" />
                        </svg>
                    </button>
                    {categories.map((data, i) => (
                        <Link
                            search={(prev) => ({
                                ...prev,
                                categoryFilter: data,
                            })}
                            onClick={() => setVisibleCategories([data])}
                            key={i}
                            className="relative grid aspect-[2/1] shrink-0 basis-2/5 place-content-center rounded-lg sm:basis-1/4"
                            ref={
                                i === Math.floor(categories.length / 2) + 1
                                    ? middleMenuCard
                                    : null
                            }
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
                    <button
                        className="btn btn-primary self-center"
                        aria-label="Go to start of list"
                        onClick={() => {
                            const menuContainer = horizontalMenu.current
                            if (!menuContainer) return
                            menuContainer.scroll({
                                behavior: 'smooth',
                                left: -99999,
                            })
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m9 6-6 6 6 6" />
                            <path d="M3 12h14" />
                            <path d="M21 19V5" />
                        </svg>
                    </button>
                </section>
            </Breakout>

            <Breakout>
                <article className="mx-auto">
                    <section className="grid grid-cols-1 justify-items-center gap-2 sm:grid-cols-2">
                        <label className="input input-md input-bordered flex w-min items-center gap-2 sm:justify-self-start">
                            <span className="sr-only">Search the table</span>
                            <input
                                type="text"
                                placeholder="Search the table..."
                                className="placeholder:italic"
                                value={searchString}
                                maxLength={50}
                                onChange={(e) => {
                                    setSearchString(e.target.value)
                                    changeUrlParams(
                                        'searchString',
                                        e.target.value
                                    )
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

                        <details className="dropdown dropdown-end w-1/2 sm:justify-self-end">
                            <summary className="btn btn-ghost w-full border-neutral">
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
                                                        setVisibleCategories(
                                                            (p) =>
                                                                p.includes(item)
                                                                    ? p
                                                                    : [
                                                                          ...p,
                                                                          item,
                                                                      ]
                                                        )
                                                    } else if (
                                                        !e.target.checked
                                                    ) {
                                                        changeUrlParams(
                                                            'categoryFilter',
                                                            visibleCategories.filter(
                                                                (v) =>
                                                                    item !== v
                                                            )
                                                        )
                                                        setVisibleCategories(
                                                            (p) =>
                                                                p.includes(item)
                                                                    ? p.filter(
                                                                          (v) =>
                                                                              v !==
                                                                              item
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

                    <div className="overflow-x-auto">
                        <table className="table table-zebra table-pin-rows">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Composition</th>
                                    <th>Form</th>
                                    <th>Category</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredMedicineData
                                    .slice(0, maxRows)
                                    .map((data) => (
                                        <tr key={data.id} className="hover">
                                            <th>{data.id}</th>
                                            <td>{data.composition}</td>
                                            <td>{data.form}</td>
                                            <td>{data.category}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="join mt-4 flex *:basis-1/3">
                        <button
                            className="btn btn-ghost btn-outline join-item btn-sm sm:btn-md"
                            onClick={() =>
                                maxRows < filteredMedicineData.length
                                    ? setMaxRows((p) => p + 11)
                                    : null
                            }
                        >
                            Show More +
                        </button>
                        <button
                            className="btn btn-ghost btn-outline join-item btn-sm sm:btn-md"
                            onClick={() =>
                                setMaxRows(filteredMedicineData.length)
                            }
                        >
                            Show All
                        </button>
                        <button
                            className="btn btn-ghost btn-outline join-item btn-sm sm:btn-md"
                            onClick={() => setMaxRows(11)}
                        >
                            Show Less
                        </button>
                    </div>
                </article>
            </Breakout>
        </section>
    )
}
