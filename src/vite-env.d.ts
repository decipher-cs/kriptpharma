/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_FORM_MANAGMENT_API_KEY: string
    readonly VITE_CMS_API_KEY: string
    readonly VITE_CMS_SPACE: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
