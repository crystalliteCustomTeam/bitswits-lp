import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Provideservices.module.css";

const Provideservices = (props) => {
    return (
        <>
            <section className={`${styles[props.assignClass]}`}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h3>Blockchain Development Services</h3>
                            <h2>We Provide Blockchain Development Services</h2>
                            <p>Our software developers are highly proficient in building blockchain technologies from scratch and customizing existing <br/> blockchain solutions through software integrations, functionality modifications, and feature implementations.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Provideservices;
