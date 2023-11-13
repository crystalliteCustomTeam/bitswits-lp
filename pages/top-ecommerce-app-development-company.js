import Head from 'next/head'
import React from 'react';
//
import EcommerceAward from '@/components/EcommerceAward';
import EcommercePLatform from '@/components/EcommercePLatform';
import EcommerceShoppingApp from '@/components/EcommerceShoppingApp';
import EcommerceBenefits from '@/components/EcommerceBenefits';
import EcommerceService from '@/components/EcommerceService';
import EcommerceApp from '@/components/EcommerceApp';
import EcommerceExperience from '@/components/EcommerceExperience';
import EcommerceScale from '@/components/EcommerceScale';
import EcommerceSlider from '@/components/EcommerceSlider';


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