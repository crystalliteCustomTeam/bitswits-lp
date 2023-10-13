import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Cab.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import publication1 from '/public/images/tab/tab.jpg'
import publication2 from '/public/images/tab/1.jpg'
import publication3 from '/public/images/tab/2.jpg'
import publication4 from '/public/images/tab/3.jpg'

const Analysis = () => {




    const [activeTab1, setActiveTab1] = useState('tab1');
    function fun1(tabs1) {
        setActiveTab1(tabs1);
    }


    return (
        <>

            <section className={styles.seen}>


                <Container>
                    <Row className={` ${styles.almost} gy-4 justify-content-between`}>
                        <Col xl={12}>
                            <h3 className='font50 white fontf font-bold center'>OUR <span className='grdiant'>EXEMPLARY APPROACH</span> </h3>
                            <h2 className='font20 white fontf font-bold center'>Our Holistic <span className='grdiant'>UI/UX Design</span> Process</h2>
                            <p className='font16 white fontf font-medium center'>Our human-centered design studio follows the <span className='grdiant'>ABCD approach</span> to commit to product excellence</p>
                        </Col>

                        <Col xl={12} className='mb-5'>
                            <div className={styles.analpost}>
                                <div className={activeTab1 == 'tab1' ? styles.active : '' } onClick={() => fun1('tab1')} href="#">A</div>
                                <div className={activeTab1 == 'tab2' ? styles.active : '' } onClick={() => fun1('tab2')} href="#">B</div>
                                <div className={activeTab1 == 'tab3' ? styles.active : '' } onClick={() => fun1('tab3')} href="#">C</div>
                                <div className={activeTab1 == 'tab4' ? styles.active : '' } onClick={() => fun1('tab4')} href="#">D</div>
                            </div>

                        </Col>
                    </Row>

                    {activeTab1 == 'tab1' &&

                        <Row className={` ${styles.almost} gy-4 justify-content-between`}>
                            <Col md={6}>
                                <h2 className='font40 white fontf font-bold'>Analysis </h2>
                                <p className='font14 white fontf font-medium'>The analysis involves breaking down the user experience into smaller parts to understand better what works and what doesn't. This process helps us identify problems, uncover potential solutions, and pinpoint areas that need improvement.</p>
                                <h3 className='font20 white fontf font-bold mt-4'>The analysis step includes</h3>
                                <ul className='p-0 mt-4'>
                                    <li className='font14 white fontf font-medium'>1. User Research</li>
                                    <li className='font14 white fontf font-medium'>2. Competitive Analysis</li>
                                    <li className='font14 white fontf font-medium'>3. Task Analysis</li>
                                    <li className='font14 white fontf font-medium'>4. Creating User Profiles</li>
                                    <li className='font14 white fontf font-medium'>5. Establishing Project Constraints Such as Budget, Timeline, And Platform Requirements.</li>
                                </ul>
                            </Col>
                            <Col md={5}>
                                <Image quality={75} src={publication1} width="717" height="589" alt="bitswits" className="img-fluid" />
                            </Col>
                        </Row>
                    }

                    {activeTab1 == 'tab2' &&
                        <Row className={` ${styles.almost} gy-4 justify-content-between`}>
                            <Col md={6}>
                                <h2 className='font40 white fontf font-bold'>Brainstorming </h2>
                                <p className='font14 white fontf font-medium'>BitsWits, we prioritize this step to ensure that the design process is set up for success. Our brainstorming sessions provide an opportunity to think outside the box and develop creative ideas and solutions while tapping into the collective wisdom of our team and coming up with unique ways to approach problems.</p>

                                <ul className='p-0 mt-4'>
                                    <li className='font14 white fontf font-medium'>1. Identifying Scope and Objectives</li>
                                    <li className='font14 white fontf font-medium'>2. Market Research</li>
                                    <li className='font14 white fontf font-medium'>3. Goals Of the Project</li>
                                    <li className='font14 white fontf font-medium'>4. Competitive Analysis</li>
                                    <li className='font14 white fontf font-medium'>5. Understanding User Needs</li>
                                    <li className='font14 white fontf font-medium'>6. User Interviews</li>
                                    <li className='font14 white fontf font-medium'>7. Developing low-fidelity sketches</li>
                                    <li className='font14 white fontf font-medium'>8. Developing Use Cases and Stories</li>
                                </ul>
                            </Col>
                            <Col md={5}>
                                <Image quality={75} src={publication2} width="717" height="589" alt="bitswits" className="img-fluid" />
                            </Col>
                        </Row>
                    }
                    {activeTab1 == 'tab3' &&
                        <Row className={` ${styles.almost} gy-4 justify-content-between`}>
                            <Col md={6}>
                                <h2 className='font40 white fontf font-bold'>Create </h2>
                                <p className='font14 white fontf font-medium'>We work with you to create a unique, custom design that reflects your vision and meets your goals. From developing wireframes and prototypes to designing logos and illustrations, our process helps us create exactly what you're looking for.</p>

                                <ul className='p-0 mt-4'>
                                    <li className='font14 white fontf font-medium'>1. Collecting And Analyzing Requirements</li>
                                    <li className='font14 white fontf font-medium'>2. Designing Wireframes and Mock-Ups</li>
                                    <li className='font14 white fontf font-medium'>3. Developing Personas: A Clearer Image of The User Journey</li>
                                    <li className='font14 white fontf font-medium'>4. Creating Prototypes</li>
                                    <li className='font14 white fontf font-medium'>5. Researching User Behaviors: User Behavior Patterns and Individual Preferences</li>
                                    <li className='font14 white fontf font-medium'>6. Conducting Usability Tests</li>
                                </ul>
                            </Col>
                            <Col md={5}>
                                <Image quality={75} src={publication3} width="717" height="589" alt="bitswits" className="img-fluid" />
                            </Col>
                        </Row>
                    }
                    {activeTab1 == 'tab4' &&
                        <Row className={` ${styles.almost} gy-4 justify-content-between`}>
                            <Col md={6}>
                                <h2 className='font40 white fontf font-bold'>Design/Deploy </h2>
                                <p className='font14 white fontf font-medium'>It is where our client's vision comes to life, making sure that all of the elements come together seamlessly to create an interactive experience that meets their expectations. We prevent errors before they happen and make sure that all elements of the design are harmonious and consistent.</p>

                                <ul className='p-0 mt-4'>
                                    <li className='font14 white fontf font-medium'>1. User Testing</li>
                                    <li className='font14 white fontf font-medium'>2. Interaction Design Tweaks</li>
                                    <li className='font14 white fontf font-medium'>3. sability Tuning: Adding Helpful Tooltips, Adjusting Spacing, Etc.</li>
                                    <li className='font14 white fontf font-medium'>4. Accessibility Testing</li>
                                    <li className='font14 white fontf font-medium'>5. Visual Design Tuning: Adding Color Accents, Adjusting Fonts for Optimal Readability Etc.</li>
                                    <li className='font14 white fontf font-medium'>6. Device Testing</li>
                                    <li className='font14 white fontf font-medium'>7. Iterations</li>
                                </ul>
                            </Col>
                            <Col md={5}>
                                <Image quality={75} src={publication4} width="717" height="589" alt="bitswits" className="img-fluid" />
                            </Col>
                        </Row>
                    }
                </Container>


            </section>


        </>
    )
}

export default Analysis