import { PropsWithChildren, createContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
type ThemeContextT = {
    theme: Theme
    toggleTheme: () => void
    changeTheme: (value: Theme) => void
}
export const ThemeContext = createContext<ThemeContextT | null>(null)

export default function ThemeProvider(props: PropsWithChildren) {
    const [theme, setTheme] = useState<Theme>('dark')
    const toggleTheme = () => {
        setTheme((p) => (p === 'dark' ? 'light' : 'dark'))
        window.localStorage.setItem(
            'theme',
            theme === 'dark' ? 'light' : 'dark'
        )
    }
    const changeTheme = (value: Theme) => {
        setTheme(value)
        window.localStorage.setItem('theme', value)
    }

    useEffect(() => {
        const storedTheme = window.localStorage.getItem('theme')
        if (storedTheme === 'dark' || storedTheme === 'light')
            changeTheme(storedTheme)
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
