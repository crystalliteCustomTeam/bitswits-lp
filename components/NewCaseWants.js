import React from 'react'
import Image from 'next/image'
import styles from '@/styles/NewCaseWants.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//
import tick from '../public/images/new-case-page/tick.png'


const NewCaseWants = (props) => {

    return (
        <>
            <section className={`${styles.wants} ${styles[props.wantsClass]}`}>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6}>
                            {props.sections1.map((section, index) => (
                                <div key={index} className={styles.content}>
                                    <h3>{section.title}</h3>
                                    {section.textArray.map((text, textIndex) => (
                                        <p key={textIndex}>
                                            <Image src={tick} width={20} alt="BitsWits" className={`img-fluid`} />
                                            <span>{text}</span>
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </Col>
                        <Col lg={6}>
                            <div className={styles.wantImg}>
                                <Image quality={90} src={props.wantImg1} alt="BitsWits" className={`img-fluid`} />
                            </div>
                        </Col>
                    </Row>
                    <Row className='align-items-center my-5 py-5'>
                        <Col lg={6}>
                            <div>
                                <Image quality={90} src={props.wantImg2} alt="BitsWits" className={`img-fluid`} />
                            </div>
                        </Col>
                        <Col lg={6}>
                            {props.sections2.map((section, index) => (
                                <div key={index} className={styles.content}>
                                    <h3>{section.title}</h3>
                                    {section.textArray.map((text, textIndex) => (
                                        <p key={textIndex}>
                                            <Image src={tick} width={20} alt="BitsWits" className={`img-fluid`} />
                                            <span>{text}</span>
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </Col>
                    </Row>
                    <Row className='align-items-center'>
                        <Col lg={6}>
                            {props.sections3.map((section, index) => (
                                <div key={index} className={styles.content}>
                                    <h3>{section.title}</h3>
                                    {section.textArray.map((text, textIndex) => (
                                        <p key={textIndex}>
                                            <Image src={tick} width={20} alt="BitsWits" className={`img-fluid`} />
                                            <span>{text}</span>
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </Col>
                        <Col lg={6}>
                            <div className={styles.wantImg}>
                                <Image quality={90} src={props.wantImg3} alt="BitsWits" className={`img-fluid`} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default NewCaseWants;
