import { useContext } from 'react'
import { ThemeContext } from '../context/theme'

export default function useTheme() {
    const theme = useContext(ThemeContext)
    if (!theme) throw Error('Theme cannot be used outside context')
    return theme
}
