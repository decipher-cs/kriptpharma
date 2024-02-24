import * as React from 'react'
import { Theme, styled } from '@mui/material/styles'
import { SxProps } from '@mui/system'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

const ProductHeroLayoutRoot = styled('section')(({ theme }) => ({
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        height: '80vh',
        minHeight: 500,
        maxHeight: 1300,
    },
}))

const Background = styled('div')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
})

interface ProductHeroLayoutProps {
    sxBackground: SxProps<Theme>
}

export default function ProductHeroLayout(props: React.HTMLAttributes<HTMLDivElement> & ProductHeroLayoutProps) {
    const { sxBackground, children } = props

    return (
        <ProductHeroLayoutRoot>
            <Container
                sx={{
                    mt: 3,
                    mb: 14,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <img
                    src='https://logos-world.net/wp-content/uploads/2021/03/Lamborghini-Logo.png'
                    alt='wonder'
                    width='147'
                    height='80'
                />
                {children}
                <Box
                    sx={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        backgroundColor: 'common.black',
                        opacity: 0.5,
                        zIndex: -1,
                    }}
                />
                <Background sx={sxBackground} />
                <Box
                    component='img'
                    src='https://www.pngmart.com/files/15/Arrow-Down-PNG-Free-Download.png'
                    height='30px'
                    width='30px'
                    alt='arrow down'
                    sx={{ position: 'absolute', bottom: 32 }}
                />
            </Container>
        </ProductHeroLayoutRoot>
    )
}