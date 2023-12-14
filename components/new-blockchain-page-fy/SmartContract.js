import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./SmartContract.module.css";

import bestgloba11 from '../../public/moniter/1.png'
import bestgloba12 from '../../public/moniter/2.png'
import bestgloba13 from '../../public/moniter/3.png'
import bestgloba14 from '../../public/moniter/4.png'
import bestgloba15 from '../../public/moniter/5.png'
import bestgloba16 from '../../public/moniter/6.png'
import videopic from '../../public/servnew/videopic.png'

const SmartContract = (props) => {
    return (
        <>
            <section className={`${styles[props.assignClass]}`}>
                <Container>
                    <Row className="gx-2 gy-5">
                        <Col lg={12}>
                            <h3 className="font_30 fontsfheavy newfycolr center">Blockchain Development Services</h3>
                            <h2 className="newchoose letterspace_1 font-bold white center">Custom AI Blockchain Development Services</h2>
                            <p className="linehight_2 font_17 white fontsfregular font-regular pt-1  center">Our developers can combine Artificial Intelligence (AI) and Blockchain to more effectively secure data, establish ownership, optimize <br /> smart contracts, and track goods. We integrate AI technology into Blockchain software to develop transformative solutions across <br /> various industries. Our AI Blockchain solutions provide advanced functionality and optimal benefits.</p>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.deve}>
                                <div>
                                    <h4 className="fontgilroybold white font_15">Data Analysis</h4>
                                    <p className="font_13 white fontsfregular linehight_2">Our experts can develop Blockchain software with AI algorithms that analyze large volumes of data recorded on the Blockchain to gather insights, patterns, and trends. AI can identify anomalies and predict future behavior using machine learning and data analytics strategies.</p>
                                </div>
                                <Image src={bestgloba11} className="img-fluid" alt='bitswits' />
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.deve}>
                                <div>
                                    <h4 className="fontgilroybold white font_15">Natural Language Processing</h4>
                                    <p className="font_13 white fontsfregular linehight_2">Our AI and Blockchain experts can incorporate natural language processing capabilities into your AI-powered Blockchain solution to enhance smart contracts to have the ability to understand human-readable language and enable greater accessibility of Blockchain technology. This streamlines business processes and reduces the need for manual intervention.</p>
                                </div>
                                <Image src={bestgloba12} className="img-fluid" alt='bitswits' />
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.deve}>
                                <div>
                                    <h4 className="fontgilroybold white font_15">Smart Contract Optimization</h4>
                                    <p className="font_13 white fontsfregular linehight_2">Our Blockchain development using AI includes smart contract optimization, which automates the process of contract creation, validation, and enforcement. AI analyzes contract templates, historical data, and legal regulations to generate more efficient and smart contracts. It improves contract performance, reduces errors, and enhances contract management processes.</p>
                                </div>
                                <Image src={bestgloba13} className="img-fluid" alt='bitswits' />
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.deve}>
                                <div>
                                    <h4 className="fontgilroybold white font_15">Security and Fraud Detection</h4>
                                    <p className="font_13 white fontsfregular linehight_2">We develop AI-powered security solutions to enhance the security of Blockchain networks. It can monitor network activity, detect suspicious behavior, and identify potential security threats or attacks. AI can assist in detecting fraudulent transactions, preventing unauthorized access, and ensuring the Blockchain network's integrity.</p>
                                </div>
                                <Image src={bestgloba14} className="img-fluid" alt='bitswits' />
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.deve}>
                                <div>
                                    <h4 className="fontgilroybold white font_15">Privacy and Confidentiality</h4>
                                    <p className="font_13 white fontsfregular linehight_2">We leverage AI techniques like federated learning, which can be applied to protect the privacy of data stored on the blockchain. AI algorithms enable computations on encrypted data, allowing privacy-preserving analysis while maintaining data confidentiality.</p>
                                </div>
                                <Image src={bestgloba15} className="img-fluid" alt='bitswits' />
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.deve}>
                                <div>
                                    <h4 className="fontgilroybold white font_15">AI-Enhanced Consensus Mechanisms</h4>
                                    <p className="font_13 white fontsfregular linehight_2">Our experts leverage AI algorithms to optimize consensus mechanisms within Blockchain networks. Using machine learning, AI can adapt the consensus protocol based on network conditions, transaction patterns, or node behavior. This improves scalability, efficiency, and fault tolerance within the Blockchain network.</p>
                                </div>
                                <Image src={bestgloba16} className="img-fluid" alt='bitswits' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default SmartContract;
