import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/OurProject.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
//images
import health from '../public/images/digital/health.png'
import fintech from '../public/images/digital/fintech.png'
import realState from '../public/images/digital/real-state.png'
import eCommerce from '../public/images/digital/ecommerce.png'
import fitness from '../public/images/digital/fitness.png'
import restaurant from '../public/images/digital/resturant.png'
import travel from '../public/images/digital/travel.png'
import sports from '../public/images/digital/sports.png'
import social from '../public/images/digital/social.png'
import business from '../public/images/digital/business.png'
import education from '../public/images/digital/education.png'
import entertanmnt from '../public/images/digital/entertnment.png'
import logistic from '../public/images/digital/logistic.png'


const Digital = () => {

    var projectslider = {
        dots: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '90px',
        variableWidth: false,
    };

    var ourproject1 = {
        dots: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (
        <>
            <section className={styles.ourProject}>
                <Container>
                    <Row className={styles.project}>
                        <Col lg={2}>
                            <h5 className='font20 fontf font-semibold mt-1 letterspace white mb-0'>Solutions</h5>
                        </Col>
                        <Col lg={7}>
                            <h2 className='font50 black fontf font-bold line60 white mb-0'>
                                Crossing Industry Frontiers: <span className='grdiant font-bold'>Custom Digital Product Solutions</span> for Diverse Fields
                            </h2>
                        </Col>
                        <Col lg={3}>
                            <Link className={`${styles.bttns1} mt-3 mt-lg-0 mb-4 mb-lg-0`} href="#">
                                Connect Now!
                            </Link>
                        </Col>
                        <Col lg={12}>
                            <div className={styles.line}></div>
                            <Slider {...projectslider} className={`${styles.newproject} ${styles.solutn} solutn newproject`}>
                                <div className={styles.slideBox}>
                                    <Row className='align-items-center'>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <h3 className='font40 fontf font-semibold white mb-4'>Health and Fitness</h3>
                                                <ul className={styles.slidLst}>

                                                    <li>Custom workout plans – Mass gain and weight loss.</li>
                                                    <li>Nutrition plans for calorie surplus and deficit. </li>
                                                    <li>Video demonstrations.</li>
                                                    <li>Virtual classes and workshops.</li>
                                                    <li>Appointment booking with fitness trainers and nutritionists.</li>
                                                    <li>Health diaries. </li>

                                                </ul>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="#" className='white'>
                                                        Call Us Today!
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image alt="bitswits" className='img-fluid'
                                                    src={health}

                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.slideBox}>
                                    <Row className='align-items-center'>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <h3 className='font40 fontf font-semibold white mb-4'>Banking and Finance </h3>
                                                <ul className={styles.slidLst}>

                                                    <li>Account management, transfer, and payment apps for mobile banking.</li>
                                                    <li>Portfolio management and investment tracking.</li>
                                                    <li>Chatbots for customer support and financial guidance.</li>
                                                    <li>Personal financial applications.</li>
                                                    <li>Security measures and fraud detection.</li>


                                                </ul>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="#" className='white'>
                                                        Call Us Today!
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image alt="bitswits" className='img-fluid'
                                                    src={fintech}

                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.slideBox}>
                                    <Row className='align-items-center'>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <h3 className='font40 fontf font-semibold white mb-4'>Real Estate</h3>
                                                <ul className={styles.slidLst}>


                                                    <li>Apps for searching and choosing properties from real estate listings.</li>
                                                    <li>3D models and virtual property tours.</li>
                                                    <li>CRM programs.</li>
                                                    <li>Mortgage calculators and financial planning tools.</li>
                                                    <li>Integration of local facilities and knowledge. </li>

                                                </ul>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="#" className='white'>
                                                        Call Us Today!
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image alt="bitswits" className='img-fluid'
                                                    src={realState}

                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.slideBox}>
                                    <Row className='align-items-center'>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <h3 className='font40 fontf font-semibold white mb-4'>E-Commerce</h3>
                                                <ul className={styles.slidLst}>
                                                    <li>Online Store Development.</li>
                                                    <li>Mobile Commerce Apps.</li>
                                                    <li>Responsive Design.</li>
                                                    <li>Shopping Cart and Checkout.</li>
                                                    <li>Product Catalog Management.</li>
                                                    <li>Discounts and Promotion.</li>
                                                    <li>Social Media Integration.</li>
                                                </ul>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="#" className='white'>
                                                        Call Us Today!
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image alt="bitswits" className='img-fluid'
                                                    src={eCommerce}

                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className={styles.slideBox}>
                                    <Row className='align-items-center'>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <h3 className='font40 fontf font-semibold white mb-4'>Food Ordering Services</h3>
                                                <ul className={styles.slidLst}>

                                                    <li>Simple ordering and live tracking on food apps.</li>
                                                    <li>Discounts and loyalty programs for regular customers.</li>
                                                    <li>POS system integration.</li>
                                                    <li>Pre-orders for meals and plans.</li>
                                                    <li>Latest payment methods.</li>
                                                    <li>Integration with point systems and loyalty applications.</li>



                                                </ul>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="#" className='white'>
                                                        Call Us Today!
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image alt="bitswits" className='img-fluid'
                                                    src={restaurant}

                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.slideBox}>
                                    <Row className='align-items-center'>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <h3 className='font40 fontf font-semibold white mb-4'>Travel and Hospitality </h3>
                                                <ul className={styles.slidLst}>


                                                    <li>Systems for reviewing and ratings.</li>
                                                    <li>Multi-language support for international travelers.</li>
                                                    <li>Mobile applications for making reservations for trips, lodging, and activities.</li>
                                                    <li>Location-based navigational aids and interactive maps.</li>
                                                    <li>Personalized offers and loyalty programs to attract travelers.</li>

                                                </ul>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="#" className='white'>
                                                        Call Us Today!
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image alt="bitswits" className='img-fluid'
                                                    src={travel}

                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.slideBox}>
                                    <Row className='align-items-center'>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <h3 className='font40 fontf font-semibold white mb-4'>On-Demand Applications</h3>
                                                <ul>
                                                    <li>Real-time tracking through GPS.</li>
                                                    <li>Ratings and reviews for transparency and accountability.</li>
                                                    <li>Service selection.</li>
                                                    <li>Secured payment gateways.</li>
                                                    <li>In-App chat.</li>
                                                    <li>Geofencing – features based on a specific location.</li>
                                                    <li>Order history and instant alerts.</li>


                                                </ul>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="#" className='white'>
                                                        Call Us Today!
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image alt="bitswits" className='img-fluid'
                                                    src={sports}

                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.slideBox}>
                                    <Row className='align-items-center'>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <h3 className='font40 fontf font-semibold white mb-4'>Media Publishing </h3>
                                                <ul className={styles.slidLst}>
                                                    <li>Audio content subscription and streaming.</li>
                                                    <li>Animated infographics, tools, and visual storytelling.</li>
                                                    <li>Content curation for community involvement.</li>
                                                    <li>Apps for distributing articles, movies, and multimedia content.</li>
                                                    <li>Paywalls and subscription models.</li>

                                                </ul>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="#" className='white'>
                                                        Call Us Today!
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image alt="bitswits" className='img-fluid'
                                                    src={social}

                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.slideBox}>
                                    <Row className='align-items-center'>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <h3 className='font40 fontf font-semibold white mb-4'>B2B Solutions </h3>
                                                <ul className={styles.slidLst}>



                                                    <li>Enterprise software with smooth communication.</li>
                                                    <li>Supply chain management applications.</li>
                                                    <li>Customer management platforms.</li>
                                                    <li>Collaborative tools for teamwork and project management.</li>
                                                    <li>Analytics dashboards.</li>
                                                    <li>Secured document storage and sharing.</li>


                                                </ul>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="#" className='white'>
                                                        Call Us Today!
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image alt="bitswits" className='img-fluid'
                                                    src={business}

                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.slideBox}>
                                    <Row className='align-items-center'>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <h3 className='font40 fontf font-semibold white mb-4'>Education and E-Learning </h3>
                                                <ul className={styles.slidLst}>

                                                    <li>Gamification features to improve learning.</li>
                                                    <li>Instant feedback on tests and quizzes.</li>
                                                    <li>Performance reports for learners.</li>
                                                    <li>Online training course for learning.</li>
                                                    <li>Tests, quizzes, and assignments. </li>
                                                    <li>Video conferencing and virtual classroom tools.</li>


                                                </ul>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="#" className='white'>
                                                        Call Us Today!
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image alt="bitswits" className='img-fluid'
                                                    src={education}

                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.slideBox}>
                                    <Row className='align-items-center'>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <h3 className='font40 fontf font-semibold white mb-4'>Ride Apps </h3>
                                                <ul className={styles.slidLst}>

                                                    <li>Easy booking for pick-up and drop-off.</li>
                                                    <li>Driver profiles for safety.</li>
                                                    <li>Real-time tracking with transparency.</li>
                                                    <li>Estimated arrival time.</li>
                                                    <li>Multiple ride options.</li>
                                                    <li>Ridesharing and split fares.</li>


                                                </ul>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="#" className='white'>
                                                        Call Us Today!
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image alt="bitswits" className='img-fluid'
                                                    src={entertanmnt}

                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles.slideBox}>
                                    <Row className='align-items-center'>
                                        <Col lg={6}>
                                            <div className={styles.slideCntnt}>
                                                <h3 className='font40 fontf font-semibold white mb-4'>Delivery Apps </h3>
                                                <ul className={styles.slidLst}>


                                                    <li>Live tracking of progress and location.</li>
                                                    <li>No-contact delivery for convenience.</li>
                                                    <li>Order customization.</li>
                                                    <li>Instant notifications for order confirmation and delivery status.</li>
                                                    <li>Delivery history and view past orders.</li>


                                                </ul>
                                                <div className='mt-4 mb-3 mb-lg-0'>
                                                    <Link href="#" className='white'>
                                                        Call Us Today!
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className={styles.slideImg}>
                                                <Image alt="bitswits" className='img-fluid'
                                                    src={logistic}

                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Slider>
                        </Col>
                    </Row>

                    {/*============= mobile slider ==============*/}

                    <Slider {...ourproject1} className='sidenewlong slution mt-5'>
                     
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <h3 className='font40 fontf font-semibold white mb-4'>Banking and Finance </h3>
                                        <ul className={styles.slidLst}>

                                            <li>Account management, transfer, and payment apps for mobile banking.</li>
                                            <li>Portfolio management and investment tracking.</li>
                                            <li>Chatbots for customer support and financial guidance.</li>
                                            <li>Personal financial applications.</li>
                                            <li>Security measures and fraud detection.</li>


                                        </ul>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="#" className='white'>
                                                Call Us Today!
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image alt="bitswits" className='img-fluid'
                                            src={fintech}

                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <h3 className='font40 fontf font-semibold white mb-4'>Real Estate</h3>
                                        <ul className={styles.slidLst}>


                                            <li>Apps for searching and choosing properties from real estate listings.</li>
                                            <li>3D models and virtual property tours.</li>
                                            <li>CRM programs.</li>
                                            <li>Mortgage calculators and financial planning tools.</li>
                                            <li>Integration of local facilities and knowledge. </li>



                                        </ul>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="#" className='white'>
                                                Call Us Today!
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image alt="bitswits" className='img-fluid'
                                            src={realState}

                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <h3 className='font40 fontf font-semibold white mb-4'>E-Commerce</h3>
                                        <ul className={styles.slidLst}>


                                            <li>Online Store Development.</li>
                                            <li>Mobile Commerce Apps.</li>
                                            <li>Responsive Design.</li>
                                            <li>Shopping Cart and Checkout.</li>
                                            <li>Product Catalog Management.</li>
                                            <li>Discounts and Promotion.</li>
                                            <li>Social Media Integration.</li>


                                        </ul>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="#" className='white'>
                                                Call Us Today!
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image alt="bitswits" className='img-fluid'
                                            src={eCommerce}

                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <h3 className='font40 fontf font-semibold white mb-4'>Health and Fitness</h3>
                                        <ul className={styles.slidLst}>


                                            <li>Custom workout plans – Mass gain and weight loss.</li>
                                            <li>Nutrition plans for calorie surplus and deficit. </li>
                                            <li>Video demonstrations.</li>
                                            <li>Virtual classes and workshops.</li>
                                            <li>Appointment booking with fitness trainers and nutritionists.</li>
                                            <li>Health diaries. </li>


                                        </ul>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="#" className='white'>
                                                Call Us Today!
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image alt="bitswits" className='img-fluid'
                                            src={fitness}

                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <h3 className='font40 fontf font-semibold white mb-4'>Food Ordering Services</h3>
                                        <ul className={styles.slidLst}>


                                            <li>Simple ordering and live tracking on food apps.</li>
                                            <li>Discounts and loyalty programs for regular customers.</li>
                                            <li>POS system integration.</li>
                                            <li>Pre-orders for meals and plans.</li>
                                            <li>Latest payment methods.</li>
                                            <li>Integration with point systems and loyalty applications.</li>



                                        </ul>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="#" className='white'>
                                                Call Us Today!
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image alt="bitswits" className='img-fluid'
                                            src={restaurant}

                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <h3 className='font40 fontf font-semibold white mb-4'>Travel and Hospitality </h3>
                                        <ul className={styles.slidLst}>

                                            <li>Systems for reviewing and ratings.</li>
                                            <li>Multi-language support for international travelers.</li>
                                            <li>Mobile applications for making reservations for trips, lodging, and activities.</li>
                                            <li>Location-based navigational aids and interactive maps.</li>
                                            <li>Personalized offers and loyalty programs to attract travelers.</li>


                                        </ul>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="#" className='white'>
                                                Call Us Today!
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image alt="bitswits" className='img-fluid'
                                            src={travel}

                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <h3 className='font40 fontf font-semibold white mb-4'>On-Demand Applications</h3>
                                        <ul className={styles.slidLst}>

                                            <li>Real-time tracking through GPS.</li>
                                            <li>Ratings and reviews for transparency and accountability.</li>
                                            <li>Service selection.</li>
                                            <li>Secured payment gateways.</li>
                                            <li>In-App chat.</li>
                                            <li>Geofencing – features based on a specific location.</li>
                                            <li>Order history and instant alerts.</li>



                                        </ul>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="#" className='white'>
                                                Call Us Today!
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image alt="bitswits" className='img-fluid'
                                            src={sports}

                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <h3 className='font40 fontf font-semibold white mb-4'>Media Publishing </h3>
                                        <ul className={styles.slidLst}>


                                            <li>Audio content subscription and streaming.</li>
                                            <li>Animated infographics, tools, and visual storytelling.</li>
                                            <li>Content curation for community involvement.</li>
                                            <li>Apps for distributing articles, movies, and multimedia content.</li>
                                            <li>Paywalls and subscription models.</li>


                                        </ul>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="#" className='white'>
                                                Call Us Today!
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image alt="bitswits" className='img-fluid'
                                            src={social}

                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <h3 className='font40 fontf font-semibold white mb-4'>B2B Solutions </h3>
                                        <ul className={styles.slidLst}>

                                            <li>Enterprise software with smooth communication.</li>
                                            <li>Supply chain management applications.</li>
                                            <li>Customer management platforms.</li>
                                            <li>Collaborative tools for teamwork and project management.</li>
                                            <li>Analytics dashboards.</li>
                                            <li>Secured document storage and sharing.</li>


                                        </ul>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="#" className='white'>
                                                Call Us Today!
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image alt="bitswits" className='img-fluid'
                                            src={business}

                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <h3 className='font40 fontf font-semibold white mb-4'>Education and E-Learning </h3>
                                        <ul className={styles.slidLst}>

                                            <li>Gamification features to improve learning.</li>
                                            <li>Instant feedback on tests and quizzes.</li>
                                            <li>Performance reports for learners.</li>
                                            <li>Online training course for learning.</li>
                                            <li>Tests, quizzes, and assignments. </li>
                                            <li>Video conferencing and virtual classroom tools.</li>


                                        </ul>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="#" className='white'>
                                                Call Us Today!
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image alt="bitswits" className='img-fluid'
                                            src={education}

                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <h3 className='font40 fontf font-semibold white mb-4'>Ride Apps </h3>
                                        <ul className={styles.slidLst}>


                                            <li>Easy booking for pick-up and drop-off.</li>
                                            <li>Driver profiles for safety.</li>
                                            <li>Real-time tracking with transparency.</li>
                                            <li>Estimated arrival time.</li>
                                            <li>Multiple ride options.</li>
                                            <li>Ridesharing and split fares.</li>



                                        </ul>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="#" className='white'>
                                                Call Us Today!
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image alt="bitswits" className='img-fluid'
                                            src={entertanmnt}

                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.slideBox}>
                            <Row>
                                <Col lg={6}>
                                    <div className={styles.slideCntnt}>
                                        <h3 className='font40 fontf font-semibold white mb-4'>Delivery Apps </h3>
                                        <ul className={styles.slidLst}>

                                            <li>Live tracking of progress and location.</li>
                                            <li>No-contact delivery for convenience.</li>
                                            <li>Order customization.</li>
                                            <li>Instant notifications for order confirmation and delivery status.</li>
                                            <li>Delivery history and view past orders.</li>


                                        </ul>
                                        <div className='mt-4 mb-3 mb-lg-0'>
                                            <Link href="#" className='white'>
                                                Call Us Today!
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className={styles.slideImg}>
                                        <Image alt="bitswits" className='img-fluid'
                                            src={logistic}

                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </Container>
            </section >
        </>
    )
}

export default Digital
