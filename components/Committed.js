import React from 'react'
import styles from '@/styles/Committed.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import grnArrow from '../public/images/wbd-icons/arrow-green.png'
import Image from 'next/image'

const Committed = () => {
    return (
        <section className={styles.commit}>
            <Container>
                <Row>
                    <Col xl={12}>
                        <h3 className='center font-bold mb-5'>Committed. Delivered. Services Unlocked by Team In USA</h3>
                    </Col>
                </Row>
                <Row>
                    <Col xl={4}>
                        <ul className={styles.space}>
                            <li className='font15'><Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' /> PPC-Pay per Click</li>
                            <li className='font15'><Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' /> Search Engine Optimisation</li>
                            <li className='font15'><Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' /> Search engine Marketing</li>
                            <li className='font15'><Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' /> CRO-Conversion rate Optimization</li>
                            <li className='font15'><Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' /> Google Paid Search</li>
                            <li className='font15'><Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' /> Bing Paid Search</li>
                            <li className='font15'><Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' /> Google Remarketing</li>
                            <li className='font15'><Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' /> Google Display Advertising</li>
                        </ul>
                    </Col>
                    <Col xl={4}>
                        <ul className={styles.space}>
                            <li className='font15'><Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' /> Google Shopping</li>
                            <li className='font15'><Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' /> Google Dynamic Product Remarketing</li>
                            <li className='font15'><Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' /> Google Video Advertising</li>
                            <li className='font15'><Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' /> Google Search Remarketing</li>
                            <li className='font15'><Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' /> Facebook Cold Display Advertising</li>
                            <li className='font15'><Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' /> Facebook Dynamic Adverts</li>
                            <li className='font15'><Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' /> Facebook Remarketing & Campaigns</li>
                            <li className='font15'><Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' /> Instagram Ads</li>
                        </ul>
                    </Col>
                    <Col xl={4}>
                        <ul className={styles.space}>
                            <li className='font15'><Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />  Linked In Advertising</li>
                            <li className='font15'><Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />  Twitter Ads</li>
                            <li className='font15'><Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />  Gmail Ads</li>
                            <li className='font15'><Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />  Google Call Only Campaigns</li>
                            <li className='font15'><Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />  Adsense</li>
                            <li className='font15'><Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />  Amazon/Ebay 3rd Party Seller Central</li>
                            <li className='font15'><Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />  Email Marketing</li>
                            <li className='font15'><Image quality={75} src={grnArrow} alt='BitsWits' className='img-fluid' />  Content Development & Marketing</li>
                        </ul>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default Committed