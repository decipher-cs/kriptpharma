import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import Typography from '../components/Typography'
import { useNavigate } from 'react-router-dom'
import { CircularProgress } from '@mui/material'

export const PageNotFound = () => {
    const [progress, setProgress] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        const timeout = 4000
        const intervalId = setInterval(() => {
            if (progress >= 100) {
                navigate('/')
                setProgress(0)
            } else setProgress(p => p + 100 * (1000 / timeout))
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [progress])
    return (
        <Box sx={{ display: 'grid', width: '100%', height: '100%', justifyItems: 'center', p: 10, gap: 5 }}>
            <Typography variant='h1'>404</Typography>
            <Typography variant='h5'>This page doesn't exist</Typography>
            <Typography variant='body2'>You will be redirected in {progress}...</Typography>
            <CircularProgress variant='determinate' value={progress} />
        </Box>
    )
}
