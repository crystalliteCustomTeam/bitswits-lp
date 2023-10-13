import React from 'react'
import styles from '@/styles/3dExperience.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import Image from 'next/image'
import tab1 from '../public/3d-game-development/images/tab1.png'
import tab2 from '../public/3d-game-development/images/tab2.png'
import tab3 from '../public/3d-game-development/images/tab3.png'
import tab4 from '../public/3d-game-development/images/tab4.png'
import tab5 from '../public/3d-game-development/images/tab5.png'
import tab6 from '../public/3d-game-development/images/tab6.png'
import tab7 from '../public/3d-game-development/images/tab7.png'
import tab8 from '../public/3d-game-development/images/tab8.png'
import tab9 from '../public/3d-game-development/images/tab9.png'
import var1 from '../public/3d-game-development/images/variation/01.png'
import var2 from '../public/3d-game-development/images/variation/02.png'
import var3 from '../public/3d-game-development/images/variation/03.png'
import var4 from '../public/3d-game-development/images/variation/04.png'
import var5 from '../public/3d-game-development/images/variation/05.png'
import var6 from '../public/3d-game-development/images/variation/06.png'
import var7 from '../public/3d-game-development/images/variation/07.png'
import var8 from '../public/3d-game-development/images/variation/08.png'
import var9 from '../public/3d-game-development/images/variation/09.png'
import var10 from '../public/3d-game-development/images/variation/10.png'
import var11 from '../public/3d-game-development/images/variation/11.png'
import var12 from '../public/3d-game-development/images/variation/12.png'



const Experience = () => {

    const [activeTab1, setActiveTab1] = useState('tab1');
    function fun1(tabs1) {
        setActiveTab1(tabs1);
    }

    const [selectedService, setSelectedService] = useState('tab1');

    const handleSelectChange = (event) => {
        setSelectedService(event.target.value);
    };

    return (
        <>
            <section className={styles.tech}>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <p className='f-20 font-bold text-white text-center mb-0'>3D GAMES VARIATIONS</p>
                            <h2 className={`${styles.work}`}>Types Of Thrilling 3D Experiences That We
                                Bring To The Table</h2>
                        </Col>

                        <Col xl={6} className='mb-5 d-lg-block d-none'>
                            <div className={styles.tabs}>
                                <Row>
                                    <Col lg={4} className='mb-3'>
                                        <div className={`${activeTab1 == 'tab1' ? styles.active : ''} text-center ${styles.tabBox}`} onClick={() => fun1('tab1')} href="#">
                                            <Image quality={75} src={tab1} className={styles.tabImage} />
                                            <span> 3D Action <br></br>Games</span>
                                        </div>
                                    </Col>
                                    <Col lg={4} className='mb-3'>
                                        <div className={`${activeTab1 == 'tab2' ? styles.active : ''} text-center ${styles.tabBox}`} onClick={() => fun1('tab2')} href="#">
                                            <Image quality={75} src={tab2} className={styles.tabImage} />
                                            <span>3D Adventure <br></br>Games</span>
                                        </div>
                                    </Col>
                                    <Col lg={4} className='mb-3'>
                                        <div className={`${activeTab1 == 'tab3' ? styles.active : ''} text-center ${styles.tabBox}`} onClick={() => fun1('tab3')} href="#">
                                            <Image quality={75} src={tab3} className={styles.tabImage} />
                                            <span>3D PvP Battle <br></br>Games</span>
                                        </div>
                                    </Col>
                                    <Col lg={4} className='mb-3'>
                                        <div className={`${activeTab1 == 'tab4' ? styles.active : ''} text-center ${styles.tabBox}`} onClick={() => fun1('tab4')} href="#">
                                            <Image quality={75} src={tab4} className={styles.tabImage} />
                                            <span>3D Card <br></br>Games</span>
                                        </div>
                                    </Col>
                                    <Col lg={4} className='mb-3'>
                                        <div className={`${activeTab1 == 'tab5' ? styles.active : ''} text-center ${styles.tabBox}`} onClick={() => fun1('tab5')} href="#">
                                            <Image quality={75} src={tab5} className={styles.tabImage} />
                                            <span> 3D Racing <br></br>Games</span>
                                        </div>
                                    </Col>
                                    <Col lg={4} className='mb-3'>
                                        <div className={`${activeTab1 == 'tab6' ? styles.active : ''} text-center ${styles.tabBox}`} onClick={() => fun1('tab6')} href="#">
                                            <Image quality={75} src={tab6} className={styles.tabImage} />
                                            <span> 3D Arcade <br></br>Games</span>
                                        </div>
                                    </Col>
                                    <Col lg={4} className='mb-3'>
                                        <div className={`${activeTab1 == 'tab7' ? styles.active : ''} text-center ${styles.tabBox}`} onClick={() => fun1('tab7')} href="#">
                                            <Image quality={75} src={tab7} className={styles.tabImage} />
                                            <span> 3D Educational <br></br>Games</span>
                                        </div>
                                    </Col>
                                    <Col lg={4} className='mb-3'>
                                        <div className={`${activeTab1 == 'tab8' ? styles.active : ''} text-center ${styles.tabBox}`} onClick={() => fun1('tab8')} href="#">
                                            <Image quality={75} src={tab8} className={styles.tabImage} />
                                            <span> 3D Board <br></br>Games</span>
                                        </div>
                                    </Col>
                                    <Col lg={4} className='mb-3'>
                                        <div className={`${activeTab1 == 'tab9' ? styles.active : ''} text-center ${styles.tabBox}`} onClick={() => fun1('tab9')} href="#">
                                            <Image quality={75} src={tab9} className={styles.tabImage} />
                                            <span>3D Casino <br></br>Games</span>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className={`${activeTab1 == 'tab10' ? styles.active : ''} text-center ${styles.tabBox}`} onClick={() => fun1('tab10')} href="#">
                                            <Image quality={75} src={tab7} className={styles.tabImage} />
                                            <span> 3D Fantasy Sports</span>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className={`${activeTab1 == 'tab11' ? styles.active : ''} text-center ${styles.tabBox}`} onClick={() => fun1('tab11')} href="#">
                                            <Image quality={75} src={tab8} className={styles.tabImage} />
                                            <span>3D Simulation <br></br>Games</span>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className={`${activeTab1 == 'tab12' ? styles.active : ''} text-center ${styles.tabBox}`} onClick={() => fun1('tab12')} href="#">
                                            <Image quality={75} src={tab9} className={styles.tabImage} />
                                            <span>3D Sports <br></br>Games</span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                        </Col>

                        <Col xl={6} className="">

                            {activeTab1 == 'tab1' &&


                                <div className={styles.newyork}>
                                    <div>
                                        <Image quality={75} src={var1} className='img-fluid' />
                                    </div>
                                </div>

                            }



                            {activeTab1 == 'tab2' &&


                                <div className={styles.newyork}>

                                    <div>
                                        <Image quality={75} src={var2} className='img-fluid' />
                                    </div>

                                </div>

                            }

                            {activeTab1 == 'tab3' &&

                                <div className={styles.newyork}>
                                    <div>
                                        <Image quality={75} src={var3} className='img-fluid' />
                                    </div>
                                </div>

                            }


                            {activeTab1 == 'tab4' &&


                                <div className={styles.newyork}>
                                    <div>
                                        <Image quality={75} src={var4} className='img-fluid' />
                                    </div>
                                </div>

                            }

                            {activeTab1 == 'tab5' &&

                                <div className={styles.newyork}>
                                    <div>
                                        <Image quality={75} src={var5} className='img-fluid' />
                                    </div>

                                </div>

                            }

                            {activeTab1 == 'tab6' &&

                                <div className={styles.newyork}>
                                    <div>
                                        <Image quality={75} src={var6} className='img-fluid' />
                                    </div>
                                </div>

                            }

                            {activeTab1 == 'tab7' &&


                                <div className={styles.newyork}>
                                    <div>
                                        <Image quality={75} src={var7} className='img-fluid' />
                                    </div>
                                </div>


                            }



                            {activeTab1 == 'tab8' &&


                                <div className={styles.newyork}>
                                    <div>
                                        <Image quality={75} src={var8} className='img-fluid' />
                                    </div>
                                </div>

                            }

                            {activeTab1 == 'tab9' &&

                                <div className={styles.newyork}>
                                    <div>
                                        <Image quality={75} src={var9} className='img-fluid' />
                                    </div>
                                </div>

                            }


                            {activeTab1 == 'tab10' &&


                                <div className={styles.newyork}>
                                    <div>
                                        <Image quality={75} src={var10} className='img-fluid' />
                                    </div>

                                </div>

                            }

                            {activeTab1 == 'tab11' &&

                                <div className={styles.newyork}>
                                    <div>
                                        <Image quality={75} src={var11} className='img-fluid' />
                                    </div>
                                </div>

                            }

                            {activeTab1 == 'tab12' &&

                                <div className={styles.newyork}>
                                    <div>
                                        <Image quality={75} src={var12} className='img-fluid' />
                                    </div>
                                </div>

                            }


                        </Col>
                    </Row>
                    {/* <Row className={`${styles.tabsRow} tabsRow d-lg-none d-block `}>
                        <Col xl={6}>
                            <div className={styles.navTabs}>
                                <select
                                    id="serviceSelect"
                                    className={`form-select mb-3 ${styles.selectTabs}`}
                                    value={selectedService}
                                    onChange={handleSelectChange}
                                >
                                    <option className='opt' value="tab1">3D Action Games</option>
                                    <option className='opt' value="tab2">3D Adventure Games</option>
                                    <option className='opt' value="tab3">3D PvP Battle Games</option>
                                    <option className='opt' value="tab4">3D Card Games</option>
                                    <option className='opt' value="tab5">3D Racing Games</option>
                                    <option className='opt' value="tab6">3D Arcade Games</option>
                                    <option className='opt' value="tab7">3D Educational Games</option>
                                    <option className='opt' value="tab8">3D Board Games</option>
                                    <option className='opt' value="tab9">3D Casino Games</option>
                                    <option className='opt' value="tab10">3D Fantasy Sports</option>
                                    <option className='opt' value="tab11">3D Simulation Games</option>
                                    <option className='opt' value="tab12">3D Sports Games</option>
                                </select>
                            </div>
                        </Col>
                        <Col xl={6}>
                            <MDBTabsContent>
                                <MDBTabsPane show={selectedService === 'tab1'}>
                                    <div className={styles.tabPanContent}>
                                        <Image quality={75} src={var1} className='img-fluid' />
                                    </div>
                                </MDBTabsPane>

                                <MDBTabsPane show={selectedService === 'tab2'}>
                                    <div className={styles.tabPanContent}>
                                        <Image quality={75} src={var2} className='img-fluid' />
                                    </div>
                                </MDBTabsPane>

                                <MDBTabsPane show={selectedService === 'tab3'}>
                                    <div className={styles.tabPanContent}>
                                        <Image quality={75} src={var3} className='img-fluid' />
                                    </div>
                                </MDBTabsPane>

                                <MDBTabsPane show={selectedService === 'tab4'}>
                                    <div className={styles.tabPanContent}>
                                        <Image quality={75} src={var4} className='img-fluid' />
                                    </div>
                                </MDBTabsPane>

                                <MDBTabsPane show={selectedService === 'tab5'}>
                                    <div className={styles.tabPanContent}>
                                        <Image quality={75} src={var5} className='img-fluid' />
                                    </div>
                                </MDBTabsPane>

                                <MDBTabsPane show={selectedService === 'tab6'}>
                                    <div className={styles.tabPanContent}>
                                        <Image quality={75} src={var6} className='img-fluid' />
                                    </div>
                                </MDBTabsPane>

                                <MDBTabsPane show={selectedService === 'tab7'}>
                                    <div className={styles.tabPanContent}>
                                        <Image quality={75} src={var7} className='img-fluid' />
                                    </div>
                                </MDBTabsPane>

                                <MDBTabsPane show={selectedService === 'tab8'}>
                                    <div className={styles.tabPanContent}>
                                        <Image quality={75} src={var8} className='img-fluid' />
                                    </div>
                                </MDBTabsPane>

                                <MDBTabsPane show={selectedService === 'tab9'}>
                                    <div className={styles.tabPanContent}>
                                        <Image quality={75} src={var9} className='img-fluid' />
                                    </div>
                                </MDBTabsPane>

                                <MDBTabsPane show={selectedService === 'tab10'}>
                                    <div className={styles.tabPanContent}>
                                        <Image quality={75} src={var10} className='img-fluid' />
                                    </div>
                                </MDBTabsPane>

                                <MDBTabsPane show={selectedService === 'tab11'}>
                                    <div className={styles.tabPanContent}>
                                        <Image quality={75} src={var11} className='img-fluid' />
                                    </div>
                                </MDBTabsPane>

                                <MDBTabsPane show={selectedService === 'tab12'}>
                                    <div className={styles.tabPanContent}>
                                        <Image quality={75} src={var12} className='img-fluid' />
                                    </div>
                                </MDBTabsPane>
                            </MDBTabsContent>
                        </Col>
                    </Row> */}
                </Container>
            </section>
        </>
    )
}

export default Experience