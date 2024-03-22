import * as React from 'react'
import ProductCategories from './modules/views/ProductCategories'
import ProductSmokingHero from './modules/views/ProductSmokingHero'
import AppFooter from './modules/views/AppFooter'
import ProductHero from './modules/views/ProductHero'
import ProductValues from './modules/views/ProductValues'
import ProductHowItWorks from './modules/views/ProductHowItWorks'
import ProductCTA from './modules/views/ProductCTA'
import AppAppBar from './modules/views/AppAppBar'
import withRoot from './modules/withRoot'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AllProducts } from './modules/views/AllProducts'
import { Item } from './modules/views/Item'
import { PageNotFound } from './modules/views/PageNotFound'
import { Box } from '@mui/system'

function Index() {
    return (
        <React.Fragment>
            <BrowserRouter future={{ v7_startTransition: true }}>
                <AppAppBar />

                <Routes>
                    <Route path='' element={<Home />} />
                    <Route
                        path='product'
                        element={
                            <PaddedPage>
                                <AllProducts />
                            </PaddedPage>
                        }
                    />
                    <Route
                        path='product/:id'
                        element={
                            <PaddedPage>
                                <Item />
                            </PaddedPage>
                        }
                    />
                    <Route
                        path='*'
                        element={
                            <PaddedPage>
                                <PageNotFound />
                            </PaddedPage>
                        }
                    />
                </Routes>

                <AppFooter />
            </BrowserRouter>
        </React.Fragment>
    )
}

export default withRoot(Index)

const Home = () => {
    return (
        <>
            <ProductHero />
            <ProductValues />
            <ProductCategories />
            <ProductHowItWorks />
            <ProductCTA />
            <ProductSmokingHero />
        </>
    )
}

const PaddedPage = ({ children }: React.PropsWithChildren) => {
    return (
        <Box
            sx={{
                px: 3,
                py: 4,
                minHeight: '100svh',
                minWidth: '100vw',
            }}
        >
            {children}
        </Box>
    )
}
