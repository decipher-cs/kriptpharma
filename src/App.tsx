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

function Index() {
    return (
        <React.Fragment>
            <AppAppBar />

            <BrowserRouter future={{ v7_startTransition: true }}>
                <Routes>
                    <Route path='' element={<Home />} />
                    <Route path='products' element={<AllProducts />} />
                    <Route path='products/:id' element={<Item />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>

            <AppFooter />
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
