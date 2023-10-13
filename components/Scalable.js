import React from 'react'
import styles from '@/styles/Scalable.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import lang1 from '/public/images/tabsimg/lang/1.webp'
import lang2 from '/public/images/tabsimg/lang/2.webp'
import lang3 from '/public/images/tabsimg/lang/3.webp'
import lang4 from '/public/images/tabsimg/lang/4.webp'
import lang5 from '/public/images/tabsimg/lang/5.webp'
import lang6 from '/public/images/tabsimg/lang/6.webp'
import lang7 from '/public/images/tabsimg/lang/7.webp'
import lang8 from '/public/images/tabsimg/lang/8.webp'


import data1 from '/public/images/tabsimg/data/1.webp'
import data2 from '/public/images/tabsimg/data/2.webp'
import data3 from '/public/images/tabsimg/data/3.webp'
import data4 from '/public/images/tabsimg/data/4.webp'
import data5 from '/public/images/tabsimg/data/5.webp'
import data6 from '/public/images/tabsimg/data/6.webp'
import data7 from '/public/images/tabsimg/data/7.webp'
import data8 from '/public/images/tabsimg/data/8.webp'

import frame1 from '/public/images/tabsimg/frame/1.webp'
import frame2 from '/public/images/tabsimg/frame/2.webp'
import frame3 from '/public/images/tabsimg/frame/3.webp'
import frame4 from '/public/images/tabsimg/frame/4.webp'
import frame5 from '/public/images/tabsimg/frame/5.webp'
import frame6 from '/public/images/tabsimg/frame/6.webp'
import frame7 from '/public/images/tabsimg/frame/7.webp'
import frame8 from '/public/images/tabsimg/frame/8.webp'


const Scalable = () => {


    const [activeTab, setActiveTab] = useState('tab1');
    function handleTabChange(tab) {
        setActiveTab(tab);
    }

    return (
        <>
            <section className={styles.scalve}>
                <Container>
                    <Row>
                        <Col>
                            <div className='center'>
                                <h3 className='f-30 f-700 black t-center'>TECHNOLOGY</h3>
                                <h2 className='f-50 f-700 black t-center ling34 pt-2 pb-2'>
                                    Bring Out The Best Of Your <span className='grdiant'>Mobile Application</span>  With Our Scalable Technology Stack</h2>
                                <p className='f-16 f-600 black t-center ling34'>
                                    Experience the Success of Your Mobile Apps with Our Powerful Tech Stack
                                </p>
                            </div>
                        </Col>
                    </Row>



                    <div className={styles.tabspullon}>
                        <Link className={activeTab === 'tab1' ? styles.active : ''} onClick={() => handleTabChange('tab1')} href='javascript:;'>LANGUAGES</Link>
                        <Link className={activeTab === 'tab2' ? styles.active : ''} onClick={() => handleTabChange('tab2')} href='javascript:;'>DATABASES</Link>
                        <Link className={activeTab === 'tab3' ? styles.active : ''} onClick={() => handleTabChange('tab3')} href='javascript:;'>FRAMEWORKS</Link>
                    </div>

                    {activeTab === 'tab1' &&

                        <div>
                            <p className='font16 font-medium center black'>At BitsWits, we create customized mobile apps that deliver exceptional user experiences. To achieve this, we utilize a range of programming languages such as Java, Swift, Kotlin, and React Native, among others. Our team of skilled app developers uses the latest tools and frameworks to build efficient, scalable apps that cater to your unique business needs. Whether you're looking for an iOS or Android app, our focus on quality and innovation ensures that your app is developed with the best programming languages for your specific requirements.</p>
                            <div className={styles.correct}>
                                <Image quality={75} src={lang1} className='img-fluid' />
                                <Image quality={75} src={lang2} className='img-fluid' />
                                <Image quality={75} src={lang3} className='img-fluid' />
                                <Image quality={75} src={lang4} className='img-fluid' />
                                <Image quality={75} src={lang5} className='img-fluid' />
                                <Image quality={75} src={lang6} className='img-fluid' />
                                <Image quality={75} src={lang7} className='img-fluid' />
                                <Image quality={75} src={lang8} className='img-fluid' />
                            </div>
                        </div>

                    }
                    {activeTab === 'tab2' &&

                        <div>
                            <p className='font16 font-medium center black'>
                                At BitsWits, we understand that choosing the correct database is an essential part of the app development process that's why we use a range of databases, including SQL and NoSQL databases such as MySQL, MongoDB, and Firebase, among others. Our team of expert developers leverages the latest database technologies to design robust, reliable backend systems that power your mobile app. From data modeling to performance optimization, we ensure your app's database is optimized for your specific business requirements, providing seamless integration and unparalleled user experiences.
                            </p>

                            <div className={styles.correct}>
                                <Image quality={75} src={data1} className='img-fluid' />
                                <Image quality={75} src={data2} className='img-fluid' />
                                <Image quality={75} src={data3} className='img-fluid' />
                                <Image quality={75} src={data4} className='img-fluid' />
                                <Image quality={75} src={data5} className='img-fluid' />
                                <Image quality={75} src={data6} className='img-fluid' />
                                <Image quality={75} src={data7} className='img-fluid' />
                                <Image quality={75} src={data8} className='img-fluid' />
                            </div>

                        </div>

                    }
                    {activeTab === 'tab3' &&

                        <div>
                            <p className='font16 font-medium center black'>Our team of experts uses a variety of frameworks to develop mobile apps and leverage the latest frameworks, such as React Native, Flutter, and Xamarin, among others, to build cross-platform mobile apps that work seamlessly across various devices and operating systems. We also utilize popular frameworks such as AngularJS and Vue.js to create potent web applications that integrate seamlessly with your mobile app. Our focus on innovation ensures that your app is developed using the best framework for your unique business needs, delivering exceptional user experiences and driving business growth.</p>
                            <div className={styles.correct}>
                                <Image quality={75} src={frame1} className='img-fluid' />
                                <Image quality={75} src={frame2} className='img-fluid' />
                                <Image quality={75} src={frame3} className='img-fluid' />
                                <Image quality={75} src={frame4} className='img-fluid' />
                                <Image quality={75} src={frame5} className='img-fluid' />
                                <Image quality={75} src={frame6} className='img-fluid' />
                                <Image quality={75} src={frame7} className='img-fluid' />
                                <Image quality={75} src={frame8} className='img-fluid' />
                            </div>
                        </div>

                    }


                </Container>
            </section>


        </>
    )
}

export default Scalable