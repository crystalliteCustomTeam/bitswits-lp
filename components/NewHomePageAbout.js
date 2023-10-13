import React from 'react'
import styles from "@/styles/NewHomeAbout.module.css";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
//
import AboutImage from "@/public/newHomePageImages/about_image.png"
import comma from "@/public/newHomePageImages/comma.png"
import { useState } from 'react';

const NewHomeAbout = () => {



    const [isHovered, setIsHovered] = useState('');

    function fun1(vale) {

        setIsHovered(vale);

    }
    function fun2(vale1) {

        setIsHovered(vale1);

    }



    return (
        <>

            <section className={styles.newHomeBg}>

                <Container>

                    <Row>
                        <Col lg={12} className={styles.hover1}>
                            <h2 className='text-white f-40 font-bold text-center'>Our Client’s Feedback Has Been</h2>
                            <h2 className='grdiant f-60 font-bold text-center'>Nothing Short Of Amazing!</h2>


                            < div className={` ${styles.client} sec_image text-center`}>
                                <Image quality={75} src={AboutImage} alt='Banner' className={styles.secImage} />


                                <div onMouseEnter={() => fun1('active')}
                                    onMouseLeave={() => fun2('secImage1')} className={isHovered == 'active' ? styles.active : styles.secImage1}>
                                    <Image src={comma} className='img-fluid' />
                                    <h4> We're very satisfied with the results of our working relationship with BitsWits. We were able to create a high-quality mobile app that not only met our specifications but exceeded them in every way. The entire team was friendly and professional throughout the entire process, and we would definitely recommend their services to anyone looking for a reliable custom app development company. <Image src={comma} className='img-fluid' /></h4>
                                    <h5 className='mt-4'>Chavi Miles</h5>
                                    <p>CO-FOUNDER BLISS TRAVEL</p>
                                </div>

                                <div onMouseEnter={() => fun1('active1')}
                                    onMouseLeave={() => fun2('secImage2')} className={isHovered == 'active1' ? styles.active1 : styles.secImage2}>
                                    <Image src={comma} className='img-fluid' />
                                    <h4>BitsWits was a lifesaver for our business. We needed to create an app that could be used on multiple platforms, but we didn’t have a lot of technical know-how or additional development resources. Their team made it easy for us and delivered exactly what we needed. They stayed on top of our project and kept us informed throughout the process. We wouldn't hesitate to recommend them for any of your app development needs! <Image src={comma} className='img-fluid' /></h4>
                                    <h5 className='mt-4'>Bryce Carlos</h5>
                                    <p>CEO / FOUNDER SOUL SOUND</p>
                                </div>

                                <div onMouseEnter={() => fun1('active2')}
                                    onMouseLeave={() => fun2('secImage3')} className={isHovered == 'active2' ? styles.active2 : styles.secImage3}>
                                    <Image src={comma} className='img-fluid' />
                                    <h4>We hired mobile app developers to create a completely new mobile app for our company. The team at BitsWits was really professional, efficient, and knowledgeable in the latest technologies and trends. We couldn't be happier with the results and will definitely be recommending them to anyone looking for top-notch mobile app development company. <Image src={comma} className='img-fluid' /></h4>
                                    <h5 className='mt-4'>Aden Ward</h5>
                                    <p>CO-FOUNDER PRO HEALTH</p>
                                </div>


                                <div onMouseEnter={() => fun1('active3')}
                                    onMouseLeave={() => fun2('secImage4')} className={isHovered == 'active3' ? styles.active3 : styles.secImage4}>
                                    <Image src={comma} className='img-fluid' />
                                    <h4>Hiring Flutter app developers from BitsWits was one of the best decisions I have ever made. They are highly skilled and knowledgeable professionals who understand customer needs and deliver well-crafted solutions to us. Overall, we are extremely satisfied with their service and highly recommend them to anyone looking for reliable and cost-effective Flutter solutions. <Image src={comma} className='img-fluid' /></h4>
                                    <h5 className='mt-4'>Winnie Brooks</h5>
                                    <p>FOUNDER AND CEO GLOW SPA</p>
                                </div>


                                <div onMouseEnter={() => fun1('active4')}
                                    onMouseLeave={() => fun2('secImage5')} className={isHovered == 'active4' ? styles.active4 : styles.secImage5}>
                                    <Image src={comma} className='img-fluid' />
                                    <h4>BitsWits have done a great job making an attractive and eye-catching IOS application. I am grateful to the team for delivering this application perfectly on very short notice. Thanks a lot. <Image src={comma} className='img-fluid' /></h4>
                                    <h5 className='mt-4'>Andrew Drake</h5>
                                    <p>FOUNDER / CEO MARK PLACE</p>
                                </div>

                                <div onMouseEnter={() => fun1('active5')}
                                    onMouseLeave={() => fun2('secImage6')} className={isHovered == 'active5' ? styles.active5 : styles.secImage6}>
                                    <Image src={comma} className='img-fluid' />
                                    <h4>The rider app developed by Bitswits transformed our ride-hailing service. The UI/UX is unmatched and our users love it! <Image src={comma} className='img-fluid' /></h4>
                                    <h5 className='mt-4'>Rajesh K</h5>

                                </div>

                                <div onMouseEnter={() => fun1('active6')}
                                    onMouseLeave={() => fun2('secImage7')} className={isHovered == 'active6' ? styles.active6 : styles.secImage7}>
                                    <Image src={comma} className='img-fluid' />
                                    <h4>Our company's data visualization took a leap forward with the BI app from Bitswits. Accurate analytics and sleek presentation! <Image src={comma} className='img-fluid' /></h4>
                                    <h5 className='mt-4'>Sophia T</h5>
                                </div>


                                <div onMouseEnter={() => fun1('active7')}
                                    onMouseLeave={() => fun2('secImage8')} className={isHovered == 'active7' ? styles.active7 : styles.secImage8}>
                                    <Image src={comma} className='img-fluid' />
                                    <h4>Making informed business decisions is easier than ever with the BI app from Bitswits. Data visualization at its best! <Image src={comma} className='img-fluid' /></h4>
                                    <h5 className='mt-4'>Samuel R</h5>
                                </div>


                                <div onMouseEnter={() => fun1('active8')}
                                    onMouseLeave={() => fun2('secImage9')} className={isHovered == 'active8' ? styles.active8 : styles.secImage9}>
                                    <Image src={comma} className='img-fluid' />
                                    <h4>he social media app developed by Bitswits stands out in a crowded market. Fresh features and a user-centric approach! <Image src={comma} className='img-fluid' /></h4>
                                    <h5 className='mt-4'>Natasha Z.</h5>
                                </div>


                            </div >



                            <div onMouseEnter={() => fun1('active')}
                                onMouseLeave={() => fun2('secImage1')}
                                className={styles.james}></div>

                            <div onMouseEnter={() => fun1('active1')}
                                onMouseLeave={() => fun2('secImage2')}
                                className={styles.james1}></div>


                            <div onMouseEnter={() => fun1('active2')}
                                onMouseLeave={() => fun2('secImage3')}
                                className={styles.james2}></div>


                            <div onMouseEnter={() => fun1('active3')}
                                onMouseLeave={() => fun2('secImage4')}
                                className={styles.james3}></div>


                            <div onMouseEnter={() => fun1('active4')}
                                onMouseLeave={() => fun2('secImage5')}
                                className={styles.james4}></div>


                            <div onMouseEnter={() => fun1('active5')}
                                onMouseLeave={() => fun2('secImage6')}
                                className={styles.james5}></div>


                            <div onMouseEnter={() => fun1('active6')}
                                onMouseLeave={() => fun2('secImage7')}
                                className={styles.james6}></div>


                            <div onMouseEnter={() => fun1('active7')}
                                onMouseLeave={() => fun2('secImage8')}
                                className={styles.james7}></div>


                            <div onMouseEnter={() => fun1('active8')}
                                onMouseLeave={() => fun2('secImage9')}
                                className={styles.james8}></div>

                        </Col>
                    </Row>

                </Container>
            </section >


        </>
    )
}

export default NewHomeAbout