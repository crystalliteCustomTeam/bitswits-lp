import React from 'react'
import { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import styles from '@/styles/Ourserviceshome.module.css'
import { Container, Row, Col } from 'react-bootstrap'


const Ourserviceshome = ({ services }) => {









    return (
        <>
            <section className={styles.ourservices}>
                <Container>
                    <Row className={styles.project}>
                        <Col lg={2}>
                            <h5 className='font20 fontf font-semibold mt-1 letterspace white'>Services</h5>
                        </Col>
                        <Col lg={7}>
                            <h2 className='font50 black fontf font-bold line60 white'> 
                            
                            Maintaining <span className='grdiant font-bold'>Digital Quality</span> with Our Collection of <span className='grdiant font-bold'>Customizable Services</span>
                            
                             </h2>
                        </Col>
                        <Col lg={3}>
                            <Link className={styles.bttns1} href="#">Book a Call</Link>
                        </Col>
                    </Row>
                    <Row className='mt-5 pb-5 ourservicesfaqs'>
                        <Col lg={6}>




                            {services.map((item) => (
                                <div>
                                    <div className={item.data == item.click1 ? 'white font20 font-medium padd border1 cursor2 ani' : 'white font20 font-medium padd border1 cursor3 ani'} onClick={() => item.fun(item.click1)}>
                                        {item.title}
                                    </div>

                                    {item.data == item.click1 &&
                                        <>
                                            <div className='lightgrey padd font13 ani newwidth' key={item.id}>
                                                {item.text}
                                            </div>
                                        </>
                                    }

                                </div>
                            ))
                            }




                        </Col>

                        
                        <Col lg={6} className='d-lg-block'>

                            {services.map((item) => (

                                <>
                                    {item.data == item.click1 &&
                                        <div className={styles.imgapost} key={item.id}>
                                            <Image alt="bitswits" src={item.img} className={item.data == item.click1 ? styles.bottom4 : styles.bottom4} />
                                        </div>
                                    }
                                </>

                            ))
                            }




                        </Col>


                    </Row>
                </Container>

            </section>
        </>
    )
}

export default Ourserviceshome