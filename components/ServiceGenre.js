import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/ServiceGenre.module.css";


const ServiceGenre = (props) => {

    return (
        <>
            <section className={`${styles.ourserve} ${styles[props.addClass]}`}>
                <Container>
                    <Row className={styles.which}>
                        <Col xl={12}>
                            <p className='text-center font24 font-bold'>{props.subTitle}</p>
                            <h3 className='text-white text-center newchoose font-bold'>{props.title}</h3>
                        </Col>
                    </Row>
                    <Row className={` ${styles.play}`}>
                        {props.sections.map((section, index) => (
                            <Col xl={4} className={styles.compelling}>
                                <div key={index} className={styles.bod}>
                                    <Image quality={75} alt='BitsWits' src={section.gameicon} className='img-fluid' />
                                    <h3>{section.title}</h3>
                                    <p>{section.text}</p>
                                    <Link href='javascript:$zopim.livechat.window.show();'>LET's CONNECT</Link>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ServiceGenre