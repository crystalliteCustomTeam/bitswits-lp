import React from 'react'
import Image from 'next/image'
import styles from '@/styles/CaseWants.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//
import tick from '../public/images/case-monkey/tick.png'


const CaseWants = (props) => {

    return (
        <>
            <section className={`${styles.wants} ${styles[props.wantsClass]}`}>
                <Container>
                    <Row>
                        <Col lg={7}>
                            {props.sections.map((section, index) => (
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
                            <p className='mt-4'>{props.para}</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default CaseWants;
