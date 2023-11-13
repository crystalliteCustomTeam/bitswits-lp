import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '@/styles/ecommerceplatform.module.css'
import Image from 'next/image'
import Link from 'next/link'


///images
import Shopify from 'public/ecommerce/shopify.svg'
import RightArrow from 'public/ecommerce/r-arrow.svg'

const EcommercePLatform = () => {
    return (
        <>
            <section className={styles.ecommerceSec}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h4 className='font20 text-white font-bold mb-0 text-white'>Top</h4>
                            <h2 className='font50 text-white font-bold mb-0'> Ecommerce Platforms!</h2>
                            <p className='font16 text-white mb-3'>Begin on a retail revolution with our diverse eCommerce development services.</p>
                            <div className={`d-flex ${styles.flexCard}`}>
                                <div className={`${styles.expendCard} ${styles.shopify}`}>
                                    <Image alt='BitsWits' src={Shopify} />
                                    <h4 className='text-white font18 font-semibold mt-2 mb-0'>Shopify</h4>
                                    <p className='text-white font12 mt-1'>Our team of app developers are expert in Shopify app development, website development, and storefronts customization making us the most valued mobile apps development company.</p>
                                    <Link href="javascript:;" className='text-white font16 font-semibold'>
                                        Call Now
                                        <Image src={RightArrow} alt='right-arrow' className='ms-2' />
                                    </Link>
                                    <div className={`d-flex align-items-center pt-2 gap-2 ${styles.btns}`}>
                                        <Link href="tel:;" className={styles.btn1}>
                                            Call Now: +1 833 500 6007
                                        </Link>
                                        <Link href="javascript:;" className={styles.btn1}>
                                            Start Live Chat
                                        </Link>
                                    </div>
                                </div>
                                <div className={`${styles.expendCard} ${styles.magento}`}>
                                    <Image alt='BitsWits' src={Shopify} />
                                    <h4 className='text-white font18 font-semibold mt-2 mb-0'>Magento/2.0</h4>
                                    <p className='text-white font12 mt-1'>As a Magento e-commerce development agency, BitsWits have built and launched thousands of stores. Hire Magento mobile app developers today and turn your brand into a digital success story.</p>
                                    <Link href="javascript:;" className='text-white font16 font-semibold'>
                                        Call Now
                                        <Image src={RightArrow} alt='right-arrow' className='ms-2' />
                                    </Link>
                                    <div className={`d-flex align-items-center pt-2 gap-2 ${styles.btns}`}>
                                        <Link href="tel:;" className={styles.btn1}>
                                            Call Now: +1 833 500 6007
                                        </Link>
                                        <Link href="javascript:;" className={styles.btn1}>
                                            Start Live Chat
                                        </Link>
                                    </div>
                                </div>
                                <div className={`${styles.expendCard} ${styles.WooCommerce}`}>
                                    <Image alt='BitsWits' src={Shopify} />
                                    <h4 className='text-white font18 font-semibold mt-2 mb-0'>WooCommerce</h4>
                                    <p className='text-white font12 mt-1'>Hire WooCommerce developers for ecommerce website development. Our expert team excels in WooCommerce plugin development, and creative custom. We offer our clients with flexible payment methods too.</p>
                                    <Link href="javascript:;" className='text-white font16 font-semibold'>
                                        Call Now
                                        <Image src={RightArrow} alt='right-arrow' className='ms-2' />
                                    </Link>
                                    <div className={`d-flex align-items-center pt-2 gap-2 ${styles.btns}`}>
                                        <Link href="tel:;" className={styles.btn1}>
                                            Call Now: +1 833 500 6007
                                        </Link>
                                        <Link href="javascript:;" className={styles.btn1}>
                                            Start Live Chat
                                        </Link>
                                    </div>
                                </div>
                                <div className={`${styles.expendCard} ${styles.OpenCart}`}>
                                    <Image alt='BitsWits' src={Shopify} />
                                    <h4 className='text-white font18 font-semibold mt-2 mb-0'>OpenCart</h4>
                                    <p className='text-white font12 mt-1'>BitsWits, the best OpenCart development company, offers apps and website development, theme customization, and vQmod-based extensions. Hire our skilled OpenCart developers and boost your online sales.</p>
                                    <Link href="javascript:;" className='text-white font16 font-semibold'>
                                        Call Now
                                        <Image src={RightArrow} alt='right-arrow' className='ms-2' />
                                    </Link>
                                    <div className={`d-flex align-items-center pt-2 gap-2 ${styles.btns}`}>
                                        <Link href="tel:;" className={styles.btn1}>
                                            Call Now: +1 833 500 6007
                                        </Link>
                                        <Link href="javascript:;" className={styles.btn1}>
                                            Start Live Chat
                                        </Link>
                                    </div>
                                </div>
                                <div className={`${styles.expendCard} ${styles.XCart}`}>
                                    <Image alt='BitsWits' src={Shopify} />
                                    <h4 className='text-white font18 font-semibold mt-2 mb-0'>XCart</h4>
                                    <p className='text-white font12 mt-1'>Experience excellence of X-Cart custom ecommerce development services with BitsWits. Get a fully customized user-friendly online shopping store with multiple payment gateways.</p>
                                    <Link href="javascript:;" className='text-white font16 font-semibold'>
                                        Call Now
                                        <Image src={RightArrow} alt='right-arrow' className='ms-2' />
                                    </Link>
                                    <div className={`d-flex align-items-center pt-2 gap-2 ${styles.btns}`}>
                                        <Link href="tel:;" className={styles.btn1}>
                                            Call Now: +1 833 500 6007
                                        </Link>
                                        <Link href="javascript:;" className={styles.btn1}>
                                            Start Live Chat
                                        </Link>
                                    </div>
                                </div>
                                <div className={`${styles.expendCard} ${styles.BigCommerce}`}>
                                    <Image alt='BitsWits' src={Shopify} />
                                    <h4 className='text-white font18 font-semibold mt-2 mb-0'>BigCommerce</h4>
                                    <p className='text-white font12 mt-1'>Your search for a BigCommerce development company ends here. From web development to maintenance, our professional BigCommerce developers will transform your ecommerce store into a money-making empire.</p>
                                    <Link href="javascript:;" className='text-white font16 font-semibold'>
                                        Call Now
                                        <Image src={RightArrow} alt='right-arrow' className='ms-2' />
                                    </Link>
                                    <div className={`d-flex align-items-center pt-2 gap-2 ${styles.btns}`}>
                                        <Link href="tel:;" className={styles.btn1}>
                                            Call Now: +1 833 500 6007
                                        </Link>
                                        <Link href="javascript:;" className={styles.btn1}>
                                            Start Live Chat
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        {/* <Row className={styles.flexCardTwo}>
                            <Col sm={6}>
                                <div className={`${styles.expendCard} ${styles.shopify}`}>
                                    <Image alt='BitsWits' src={Shopify} />
                                    <h4 className='text-white font18 font-semibold mt-2 mb-0'>Shopify</h4>
                                    <p className='text-white font12 mt-1'>Our team of app developers are expert in Shopify app development, website development, and storefronts customization making us the most valued mobile apps development company.</p>
                                    <Link href="javascript:;" className='text-white font16 font-semibold'>
                                        Call Now
                                        <Image src={RightArrow} alt='right-arrow' className='ms-2' />
                                    </Link>
                                    <div className={`d-flex align-items-center pt-2 gap-2 ${styles.btns}`}>
                                        <Link href="tel:;" className={styles.btn1}>
                                            Call Now: +1 833 500 6007
                                        </Link>
                                        <Link href="javascript:;" className={styles.btn1}>
                                            Start Live Chat
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className={`${styles.expendCard} ${styles.magento}`}>
                                    <Image alt='BitsWits' src={Shopify} />
                                    <h4 className='text-white font18 font-semibold mt-2 mb-0'>Magento/2.0</h4>
                                    <p className='text-white font12 mt-1'>As a Magento e-commerce development agency, BitsWits have built and launched thousands of stores. Hire Magento mobile app developers today and turn your brand into a digital success story.</p>
                                    <Link href="javascript:;" className='text-white font16 font-semibold'>
                                        Call Now
                                        <Image src={RightArrow} alt='right-arrow' className='ms-2' />
                                    </Link>
                                    <div className={`d-flex align-items-center pt-2 gap-2 ${styles.btns}`}>
                                        <Link href="tel:;" className={styles.btn1}>
                                            Call Now: +1 833 500 6007
                                        </Link>
                                        <Link href="javascript:;" className={styles.btn1}>
                                            Start Live Chat
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className={`${styles.expendCard} ${styles.WooCommerce}`}>
                                    <Image alt='BitsWits' src={Shopify} />
                                    <h4 className='text-white font18 font-semibold mt-2 mb-0'>WooCommerce</h4>
                                    <p className='text-white font12 mt-1'>Hire WooCommerce developers for ecommerce website development. Our expert team excels in WooCommerce plugin development, and creative custom. We offer our clients with flexible payment methods too.</p>
                                    <Link href="javascript:;" className='text-white font16 font-semibold'>
                                        Call Now
                                        <Image src={RightArrow} alt='right-arrow' className='ms-2' />
                                    </Link>
                                    <div className={`d-flex align-items-center pt-2 gap-2 ${styles.btns}`}>
                                        <Link href="tel:;" className={styles.btn1}>
                                            Call Now: +1 833 500 6007
                                        </Link>
                                        <Link href="javascript:;" className={styles.btn1}>
                                            Start Live Chat
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className={`${styles.expendCard} ${styles.OpenCart}`}>
                                    <Image alt='BitsWits' src={Shopify} />
                                    <h4 className='text-white font18 font-semibold mt-2 mb-0'>OpenCart</h4>
                                    <p className='text-white font12 mt-1'>BitsWits, the best OpenCart development company, offers apps and website development, theme customization, and vQmod-based extensions. Hire our skilled OpenCart developers and boost your online sales.</p>
                                    <Link href="javascript:;" className='text-white font16 font-semibold'>
                                        Call Now
                                        <Image src={RightArrow} alt='right-arrow' className='ms-2' />
                                    </Link>
                                    <div className={`d-flex align-items-center pt-2 gap-2 ${styles.btns}`}>
                                        <Link href="tel:;" className={styles.btn1}>
                                            Call Now: +1 833 500 6007
                                        </Link>
                                        <Link href="javascript:;" className={styles.btn1}>
                                            Start Live Chat
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className={`${styles.expendCard} ${styles.XCart}`}>
                                    <Image alt='BitsWits' src={Shopify} />
                                    <h4 className='text-white font18 font-semibold mt-2 mb-0'>XCart</h4>
                                    <p className='text-white font12 mt-1'>Experience excellence of X-Cart custom ecommerce development services with BitsWits. Get a fully customized user-friendly online shopping store with multiple payment gateways.</p>
                                    <Link href="javascript:;" className='text-white font16 font-semibold'>
                                        Call Now
                                        <Image src={RightArrow} alt='right-arrow' className='ms-2' />
                                    </Link>
                                    <div className={`d-flex align-items-center pt-2 gap-2 ${styles.btns}`}>
                                        <Link href="tel:;" className={styles.btn1}>
                                            Call Now: +1 833 500 6007
                                        </Link>
                                        <Link href="javascript:;" className={styles.btn1}>
                                            Start Live Chat
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className={`${styles.expendCard} ${styles.BigCommerce}`}>
                                    <Image alt='BitsWits' src={Shopify} />
                                    <h4 className='text-white font18 font-semibold mt-2 mb-0'>BigCommerce</h4>
                                    <p className='text-white font12 mt-1'>Your search for a BigCommerce development company ends here. From web development to maintenance, our professional BigCommerce developers will transform your ecommerce store into a money-making empire.</p>
                                    <Link href="javascript:;" className='text-white font16 font-semibold'>
                                        Call Now
                                        <Image src={RightArrow} alt='right-arrow' className='ms-2' />
                                    </Link>
                                    <div className={`d-flex align-items-center pt-2 gap-2 ${styles.btns}`}>
                                        <Link href="tel:;" className={styles.btn1}>
                                            Call Now: +1 833 500 6007
                                        </Link>
                                        <Link href="javascript:;" className={styles.btn1}>
                                            Start Live Chat
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row> */}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default EcommercePLatform