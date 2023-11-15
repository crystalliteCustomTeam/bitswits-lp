import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Loader.module.css";


const Loader = () => {
    return (
        <>

            <section className={styles.loader}>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <div>
                                <p>Loading...</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Loader
