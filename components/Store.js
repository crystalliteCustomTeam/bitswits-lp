import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Store.module.css'
//
import check from '../public/images/shopify/feather-check-circle.png'
import Shopyfold from '../public/images/shopify/Group_2028.png'


const Store = () => {
    return (
        <>
            <section className={`${styles.store}`}>
                <Container>
                    <Row>
                        <Col lg={12} className='mx-auto'>
                            <h2 className='font30 black fontf font-bold line60 text-center mb-0'>
                                Why Develop Your eCommerce Store With <span className='grdiant'>Shopify</span>?
                            </h2>
                            <p className='font16 font-regular fontf black center mb-5 mt-2'>Shopify offers a mobile-friendly platform with next generation technology stack. Taking advantage of high-speed shopping stores with Shopify and easy integration, your business can maximise its benefits and convert leads easily.</p>
                        </Col>

                        <Col lg={12}>
                            <div className={`${styles.featureList} d-flex`}>
                                <div className={`${styles.featureLeft}`}>
                                    <div className={`${styles.featuresNew} d-flex`}>
                                        <Image quality={75} src={check} alt="BitsWits" className='img-fluid' />
                                        <p>Easy Integration with <br /> Marketing Channels</p>
                                    </div>
                                    <div className={`${styles.featuresNew} d-flex`}>
                                        <Image quality={75} src={check} alt="BitsWits" className='img-fluid' />
                                        <p>Flexible &amp; Customizable <br /> Code</p>
                                    </div>
                                    <div className={`${styles.featuresNew} d-flex`}>
                                        <Image quality={75} src={check} alt="BitsWits" className='img-fluid' />
                                        <p>Guaranteed Uptime with <br /> fully Hosted eStore</p>
                                    </div>
                                    <div className={`${styles.featuresNew} d-flex`}>
                                        <Image quality={75} src={check} alt="BitsWits" className='img-fluid' />
                                        <p>Simplified Product Catalogue <br /> Management</p>
                                    </div>
                                </div>
                                <div className={`${styles.featureImg}`}>
                                    <Image quality={75} src={Shopyfold} alt="BitsWits" className='img-fluid' />
                                </div>
                                <div className={`${styles.featureLeft} ${styles.featureRight}`}>
                                    <div className={`${styles.featuresNew} d-flex`}>
                                        <Image quality={75} src={check} alt="BitsWits" className='img-fluid' />
                                        <p>Mobile App for <br /> Easy Accesss</p>
                                    </div>
                                    <div className={`${styles.featuresNew} d-flex`}>
                                        <Image quality={75} src={check} alt="BitsWits" className='img-fluid' />
                                        <p>Multiple Payment <br /> Gateway Integration</p>
                                    </div>
                                    <div className={`${styles.featuresNew} d-flex`}>
                                        <Image quality={75} src={check} alt="BitsWits" className='img-fluid' />
                                        <p>Tones of Theme <br /> and Plugins</p>
                                    </div>
                                    <div className={`${styles.featuresNew} d-flex`}>
                                        <Image quality={75} src={check} alt="BitsWits" className='img-fluid' />
                                        <p>Highly Secure Platform with <br /> Proactive Management</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Store