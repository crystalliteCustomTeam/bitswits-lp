import Head from 'next/head'
import React from 'react';
import { Container,Row } from 'react-bootstrap';






export default function privacypolicy() {




    return (
        <>
            <Head>
                <title>privacy policy - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, Bitswits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>


           <Container className='mt-5 mb-5'>
            <Row>
            <h3 className='font30 font-bold fontf'>Personal Information:</h3>
            <p className='font16 font-500 fontf'>When you interact with us, we automatically receive and store certain types of information, such as the content you view, the date and time that you view this content, the products you purchase, or your location information associated with your IP address. We use the information we collect to serve you more relevant advertisements (referred to as “Retargeting”). This is statistical information used to monitor the usage of our website and for advertising purposes. This information does not include personal information. a) Personally Identifiable Information: BitsWits Consulting will not rent or sell your personally identifiable information to others. We may store personal information in locations outside the direct control of BitsWits Consulting (for instance on servers or databases co-located with hosting providers). Any personally identifiable information you elect to make publicly available on our sites, such as posting comments on our blog page, will be available to others. If you remove information that you have made public on our site, copies may remain viewable in cached and archived pages of our site, or if other users have copied or saved that information. Our blog is managed by a third party application that may require you to register to post a comment. We do not have access or control of the information posted on the blog. You will need to contact or login into the third party application if you want the personal information that was posted to the comments section removed. To learn how the third party application uses your information, please visit their privacy policy. All personal information used within our contact form will be used by the internal team at BitsWits for communication purposes. b) Non-Personally Identifiable Information: Non-Personally Identifiable Information: We may share non-personally identifiable information (such as anonymous usage data, referring/exit pages and URLs, platform types, number of clicks, etc,) with interested third parties to help them understand the usage patterns for certain BitsWits Consulting services.</p>

            <h3 className='font30 font-bold fontf'>Cookies</h3>
            <p className='font16 font-500 fontf'>As you browse bitswits.co, advertising cookies will be placed on your computer so that we can understand what you are interested in. Our display advertising partner, then enables us to present you with retargeting advertising on other sites based on your previous interaction with bitswits.co. The techniques our partners employ do not collect personal information such as your name, email address, postal address or telephone number. You can visit this page to opt out of AdRoll and their partner's targeted advertising.</p>

            <h3 className='font30 font-bold fontf'>Security</h3>
            <p className='font16 font-500 fontf'>We implement a secure processing server on our site when collecting information to ensure a high level of security for your personal information entered such as bank details and credit card information.</p>
            </Row>
           </Container>
        </>
    )
}
