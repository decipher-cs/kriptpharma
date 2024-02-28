import Box from '@mui/material/Box'
// import Link from '@mui/material/Link'
import Link from '@mui/material/Link'
import AppBar from '../components/AppBar'
import Toolbar from '../components/Toolbar'
import { DarkModeRounded } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import logo from '../../assets/kriptpharma-logo.png'
import { useNavigate } from 'react-router-dom'

const rightLink = {
    fontSize: 16,
    color: 'common.white',
    ml: 3,
}

function AppAppBar() {
    const navigate = useNavigate()
    return (
        <div>
            <AppBar position='fixed'>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ flex: 1 }} />
                    <Box component={'img'} src={logo} sx={{ mr: 2 }} />
                    <Link variant='h6' underline='none' color='inherit' href='/' sx={{ fontSize: 24 }}>
                        {'kript'}
                    </Link>
                    <Link
                        variant='h6'
                        underline='none'
                        color={theme => theme.palette.secondary.dark}
                        href='/'
                        sx={{ fontSize: 24 }}
                        onClick={e => {
                            e.preventDefault()
                            navigate('/')
                        }}
                    >
                        {'pharma'}
                    </Link>
                    <Box sx={{ flex: 1 }} />
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    )
}

export default AppAppBar
