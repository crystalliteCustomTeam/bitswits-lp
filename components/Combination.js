import React from 'react'
import styles from '@/styles/Combination.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

const Combination = (props) => {
    return (
        <>

            <section className={styles.integration}>

                <Container>
                    <Row className={styles.integrtxt}>
                        <Col md={12}>
                            <h3>
                                {props.subtitle}
                            </h3>
                            <h2>
                                {props.title}
                            </h2>
                            <p className='mb-4 mt-4'>
                                {props.text}
                            </p>
                            {props.text2 &&
                                <p className='mb-5'>
                                    {props.text2}
                                </p>
                            }

<div className='mt-5'>
                            <Link className={ `${styles.sbtn}`} href="#"> {props.btn} </Link>
</div>
                        </Col>
                    </Row>
                </Container>

            </section>

        </>
    )
}

export default Combination