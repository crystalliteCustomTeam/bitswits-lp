import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Provideservices.module.css";

import bestgloba11 from '../../public/servnew/1.png'
import bestgloba12 from '../../public/servnew/2.png'
import bestgloba13 from '../../public/servnew/3.png'
import videopic from '../../public/servnew/videopic.png'

const Provideservices = (props) => {
    return (
        <>
            <section className={`${styles[props.assignClass]}`}>
                <Container>
                    <Row className="gx-5">
                        <Col lg={12}>
                            <h3 className="font_30 fontsfheavy newfycolr">Blockchain Development Services</h3>
                            <h2 className="newchoose letterspace_1 font-bold white">We Provide Blockchain Development Services</h2>
                            <p className="font_17 white fontsfregular pt-2 pb-2">Our software developers are highly proficient in building blockchain technologies from scratch and customizing existing <br /> blockchain solutions through software integrations, functionality modifications, and feature implementations.</p>
                        </Col>
                        <Col lg={7}>
                            <h3 className="font_30 font-bold newfycolr">Blockchain Technology Development</h3>
                            <p className="font_15 linehight_1 white fontsfregular pt-2">Bitswits is a leading development company that can help you hit the market with a newly developed Blockchain solution or revamp your existing systems. Our Blockchain Development promotes business growth while transforming companies and establishing improved business models with custom cryptocurrencies, consensus algorithms, individual nodes, and architectures.</p>

                            <div className={styles.blocknew}>
                                <div>
                                    <Image src={bestgloba11} alt="bitswits" />
                                </div>
                                <div>
                                    <h3 className="font_20 newfycolr font-bold pb-2">Blockchain Security</h3>
                                    <p className={`${styles.create} fontsfregular font_15 linehight_1 white`}>We create blockchain security software that identifies and addresses the fundamental elements of a cross-industry standard for shared and distributed ledgers while transforming how businesses conduct transactions globally.</p>
                                </div>
                            </div>
                            <div className={styles.blocknew}>
                                <div>
                                    <Image src={bestgloba12} alt="bitswits" />
                                </div>
                                <div>
                                    <h3 className="font_20 newfycolr font-bold pb-2">Public & Private Blockchain</h3>
                                    <p className={`${styles.create} fontsfregular font_15 linehight_1 white`}>We develop customized and protected private blockchain for businesses that process hundreds or thousands of transactions per second, as well as open, decentralized public blockchain that grants public access to the network.</p>
                                </div>
                            </div>
                            <div className={styles.blocknew}>
                                <div>
                                    <Image src={bestgloba13} alt="bitswits" />
                                </div>
                                <div>
                                    <h3 className="font_20 newfycolr font-bold pb-2">Decentralized Applications (Dapps)</h3>
                                    <p className={`${styles.create} fontsfregular font_15 linehight_1 white`}>We develop custom decentralized applications and integrate them into existing enterprise systems where businesses can leverage a protected, secure environment for collaboration and diverse business transactions.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div>
                                <Image src={videopic} alt="bitswits" className="img-fluid" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Provideservices;
