export type ApiProductData = {
    items: Array<{
        sys: {
            id: string
        }
        fields: {
            composition: string
            form: {
                sys: {
                    id: string
                }
            }
            category: {
                sys: {
                    id: string
                }
            }
        }
    }>
    includes: {
        Entry: Array<{
            sys: {
                id: string
            }
            fields: {
                name?: string
                type?: string
            }
        }>
    }
}

export type TransformedProductData = {
    form: string
    category: string
    composition: string
}[]

export type ProductDataField = keyof ApiProductData['items'][number]['fields']
