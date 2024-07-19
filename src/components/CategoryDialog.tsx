import React, { ChangeEvent, Ref } from 'react'

export default function CategoryDialog(props: {
    categories: { [key: string]: boolean }
    dialogRef: Ref<HTMLDialogElement>
    stateSetter: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>
}) {
    const { categories: categoryVisibility, dialogRef, stateSetter: setVisibleCategories } = props

    return (
        <dialog ref={dialogRef} className="modal">
            <div className="modal-box w-full">
                <h3 className="px-5 text-lg font-bold">Categories</h3>

                <div className="mt-3 max-h-[60svh] overflow-y-scroll px-3" autoFocus={true}>
                    {Object.entries(categoryVisibility).map(([category, isChecked], i) => (
                        <div className="form-control" key={category}>
                            <label className="label cursor-pointer  rounded-lg px-2 hover:bg-base-200">
                                <span className="label-text capitalize">{category}</span>
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    value={category}
                                    onChange={(e) =>
                                        setVisibleCategories((p) => ({
                                            ...p,
                                            [category]: e.target.checked,
                                        }))
                                    }
                                    checked={isChecked}
                                />
                            </label>
                        </div>
                    ))}
                </div>

                <div className="modal-action">
                    <div
                        onClick={() => {
                            setVisibleCategories((p) =>
                                Object.fromEntries(Object.keys(p).map((key) => [key, true]))
                            )
                        }}
                        className="btn"
                    >
                        Select All
                    </div>

                    <div
                        onClick={() => {
                            setVisibleCategories((p) =>
                                Object.fromEntries(Object.keys(p).map((key) => [key, false]))
                            )
                        }}
                        className="btn"
                    >
                        Clear All
                    </div>
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>

            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}
