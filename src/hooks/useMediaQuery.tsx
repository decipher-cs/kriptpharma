import { useEffect, useState } from 'react'

export default function useMediaQuery(mediaQuery: string) {
    const query = window.matchMedia(mediaQuery)

    const [queryMatches, setQueryMatches] = useState(query.matches)

    useEffect(() => {
        const syncScreenChange = (e: MediaQueryListEvent) => setQueryMatches(e.matches)

        query.addEventListener('change', syncScreenChange)
        return () => {
            query.removeEventListener('change', syncScreenChange)
        }
    }, [query])
    return { queryMatches }
}
