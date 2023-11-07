import Image from 'next/image'
import styles from '@/styles/shoppingapp.module.css'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

///
import RightArrow from 'public/ecommerce/r-arrow.svg'


const ShoppingApp = () => {
    return (
        <>
            <section className={styles.shoppingApp}>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <video autoPlay loop muted src='./ecommerce/ecommerce-solutions.mp4' className='w-100 h-100'></video>
                        </Col>
                        <Col lg={6}>
                            <p className='ecommercegredient font18 font-bold mb-0 mt-4 mt-lg-0'>Swipe, Shop, Smile with Our</p>
                            <h2 className='font50 ecommercegredient font-bold mb-0'>Custom Shopping App Development</h2>
                            <p className='font14 text-black font-medium'>Discover the power of BitsWits’ shopping app expertise! Our skilled eCommerce app developers focus on creating smooth user experience, personalized features, and secured payments to satisfy clients and provide extraordinary app experiences.</p>

                            <p className='font14 text-black font-medium'>Say goodbye to the genie in a lamp – our eCommerce app solutions grant all your wishes with just a tap!</p>

                            <Link href="javascript:;" className={`text-black font16 font-semibold ${styles.BtnBrightness}`}>
                                Begin Now!
                                <Image src={RightArrow} alt='right-arrow' className='ms-2' />
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ShoppingApp