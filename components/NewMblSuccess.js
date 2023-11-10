import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/NewMblSuccess.module.css";
//
import team1 from '../public/newMobilePageImages/bg-f.png'


const Newsuccess = (props) => {


    return (
        <>

            <section className={`${styles.happens} ${styles[props.assignClass]}`}>

                <Container>
                    <Row>
                        <Col xl={12}>
                            <div>
                                <h5 className='grdiant'>Ready For Success?</h5>
                                <h2 className='f-80 font-bold white center mb-5'>Brace Yourself for What Happens Next</h2>
                            </div>
                        </Col>
                        <Col xl={12} className='mx-auto'>
                            <div className={styles.mainBox}>
                                {props.successSteps.map((step, index) => (
                                    <div key={index} className={`${styles.sucssBox} ${index === 1 ? styles.box2 : ''}`}>
                                        <span className='f-60 font-bold grdiant mb-0'>{step.number}</span>
                                        <span className='font30 font-bold white mb-0'>{step.title}</span>
                                        <span className='font16 white'>{step.text}</span>
                                        <Link href={step.link} className={styles.sucssBtn}>{step.buttonText}</Link>
                                    </div>
                                ))}
                                <Image quality={75} src={team1} alt='BitsWits' className={`${styles.befImg} img-fluid`} />
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>

        </>
    )
}

export default Newsuccess