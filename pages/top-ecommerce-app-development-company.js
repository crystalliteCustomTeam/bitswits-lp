import Head from 'next/head'
import React from 'react';
//
const EcommerceAward = React.lazy(() => import('@/components/EcommerceAward'));
const EcommercePLatform = React.lazy(() => import('@/components/EcommercePLatform'));
const EcommerceSlider = React.lazy(() => import('@/components/EcommerceSlider'));
const EcommerceShoppingApp = React.lazy(() => import('@/components/EcommerceShoppingApp'));
const EcommerceBenefits = React.lazy(() => import('@/components/EcommerceBenefits'));
const EcommerceService = React.lazy(() => import('@/components/EcommerceService'));
const EcommerceApp = React.lazy(() => import('@/components/EcommerceApp'));
const EcommerceExperience = React.lazy(() => import('@/components/EcommerceExperience'));
const EcommerceScale = React.lazy(() => import('@/components/EcommerceScale'));


const Ecommerce = () => {

    return (
        <>
            <Head>
                <title>Top Ecommerce App Development Company - BitsWits.</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, BitsWits is your go-to destination for professional app developers who can help you bring your ideas to life" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>
            <EcommerceAward />
            <EcommercePLatform />
            <EcommerceSlider />
            <EcommerceShoppingApp />
            <EcommerceBenefits />
            <EcommerceService />
            <EcommerceApp />
            <EcommerceExperience />
            <EcommerceScale />
        </>
    )
}

export default Ecommerce