import React from 'react'
import styles from '@/styles/Aboutnewdesign.module.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image'
import icon1 from '../public/images/map/map.png'


const Aboutnewdesign = () => {



    return (
        <>
            <section className={styles.aboutus}>

                <Container>
                    <Row className='aboutfold'>

                        <Col lg={12}>

                            <Image quality={75} src={icon1} className='img fluid w-100 h-auto' />


                            <h3 className={styles.about}>About BitsWits</h3>



                            <p className='font16 fontf font-medium black line2'>

                                We at, BitsWits, the top mobile application development agency have established ourselves as a reliable <br></br> partner for leading start-ups around the world. Our team dedicated to enabling growth by providing multiple <br></br> range of design and development services.

                            </p>

                            <p className='font16 fontf font-medium black line2'>


                                Our mobile app developers and designers' goal is to achieve productive outcomes to help our clients succeed <br></br> in the highly competitive digital world.

                            </p>









                        </Col>
                    </Row>
                </Container>


            </section>


        </>
    )
}

export default Aboutnewdesign