import React from 'react'
import styles from "@/styles/awardsrecognition.module.css";
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image';
import fold1 from '../public/images/mobilelpfinal/fold2/1.png'
import fold2 from '../public/images/mobilelpfinal/fold2/2.png'
import fold3 from '../public/images/mobilelpfinal/fold2/3.png'
import fold4 from '../public/images/mobilelpfinal/fold2/4.png'
import fold5 from '../public/images/mobilelpfinal/fold2/5.png'
import fold6 from '../public/images/mobilelpfinal/fold2/6.png'
import mobilelpfinal from '../public/images/mobilelpfinal/op.png'



const Awardsrecognition = () => {

    return (
        <>
            <section className={styles.award}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.thriving}>
                                <h3>Awards <span>&</span> Recognition</h3>
                                <p>Thriving on accelerating the path to disruption and value creation in all directions has enabled us to <br></br> receive acknowledgment and recognition by leading ratings and review platforms.</p>
                            </div>
                            <div className={styles.imgfold}>
                                <Image alt="BitsWits" src={fold1} className='img-fluid' quality={95} />
                                <Image alt="BitsWits" src={fold2} className='img-fluid' quality={95} />
                                <Image alt="BitsWits" src={fold3} className='img-fluid' quality={95} />
                                <Image alt="BitsWits" src={fold4} className='img-fluid' quality={95} />
                                <Image alt="BitsWits" src={fold5} className='img-fluid' quality={95} />
                                <Image alt="BitsWits" src={fold6} className='img-fluid' quality={95} />
                            </div>
                            <div className={styles.newpost}>
                                <Image src={mobilelpfinal} className='img-fluid' quality={95} />
                            </div>
                            <div className={styles.donothing}>
                                <p className={styles.welcome}>Welcome to our world of <span>innovative app</span> creation. At BitsWits, we don't just create a mobile app, we transform your vision into a <span>digital masterpiece</span>. With a blend of creativity and technical skill, we're recognized as the best <span>app making company</span> dedicated to elevating your business.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>



        </>
    )
}

export default Awardsrecognition