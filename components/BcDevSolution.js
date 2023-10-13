import React from 'react'
import Image from 'next/image'
import styles from '@/styles/BcDevSolution.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//images
import icon1 from '../public/images/BlockchainDvelpment/solutions/Blockchain-App-Development.png'
import icon2 from '../public/images/BlockchainDvelpment/solutions/Blockchain-Security-Solutions.png'
import icon3 from '../public/images/BlockchainDvelpment/solutions/Blockchain-Game-Development.png'
import icon4 from '../public/images/BlockchainDvelpment/solutions/Smart-Contract-Development.png'
import icon5 from '../public/images/BlockchainDvelpment/solutions/DApp-Development.png'
import icon6 from '../public/images/BlockchainDvelpment/solutions/IEO-ICO-Services-and-Solutions.png'
import icon7 from '../public/images/BlockchainDvelpment/solutions/Crypto-Wallet-App-development.png'
import icon8 from '../public/images/BlockchainDvelpment/solutions/NFT-Launch-Pad-App-development.png'
import icon9 from '../public/images/BlockchainDvelpment/solutions/FinTech-App-Development.png'
import icon10 from '../public/images/BlockchainDvelpment/solutions/NFT-Market-Place-Development.png'
import icon11 from '../public/images/BlockchainDvelpment/solutions/DAO-Development.png'
import icon12 from '../public/images/BlockchainDvelpment/solutions/Custom-Blockchain.png'

const BcDevSolution = () => {
    return (
        <>
            <section className={styles.bcDevSolution}>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className={styles.head}>
                                <h2 className='font40 black fontf font-bold line50'>
                                    Our Blockchain Development Services and Solutions
                                </h2>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.head}>
                                <p className='font18 black fontf font-medium line30'>
                                    A scalable architecture that is secure to serve in every way possible. Creating complete transparency by bringing the best blockchain development practices that allow you to scale with the world. Bringing digital disruption at your fingertips enabling your enterprise to reach new heights. Contributing to developing a sustainable data mobility system we make robust solutions.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className={`${styles.soluRow} mt-5`}>
                        <Col lg={3} md={6}>
                            <div className={`${styles.soluCard} ${styles.one}`}>
                                <div className={`${styles.imgBox}`}>
                                    <Image quality={75} src={icon1} alt='BitsWits' className='img-fluid' />
                                </div>
                                <h5 className='font24 fontf font-bold line30'>
                                    Blockchain App Development Solutions
                                </h5>
                                <p>
                                    Our Blockchain app development services help business leaders understand and implement Blockchain as part of their operations and business model for superior efficiency and security.
                                </p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className={`${styles.soluCard} ${styles.two}`}>
                                <div className={`${styles.imgBox}`}>
                                    <Image quality={75} src={icon2} alt='BitsWits' className='img-fluid' />
                                </div>
                                <h5 className='font24 fontf font-bold line30'>
                                    Blockchain Security Solutions
                                </h5>
                                <p>
                                    Hire highly versatile blockchain developers to develop scalable and trusted Blockchain Applications that feature multiple plug-ins and integration of functionalities for vast industry niches.
                                </p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className={`${styles.soluCard} ${styles.three}`}>
                                <div className={`${styles.imgBox}`}>
                                    <Image quality={75} src={icon3} alt='BitsWits' className='img-fluid' />
                                </div>
                                <h5 className='font24 fontf font-bold line30'>
                                    Blockchain Game Development
                                </h5>
                                <p>
                                    Let us help you build the most stable gaming infrastructures enabled by blockchain technology that cultivates a multitude of users due its scalable and profitably sustaining nature.
                                </p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className={`${styles.soluCard} ${styles.four}`}>
                                <div className={`${styles.imgBox}`}>
                                    <Image quality={75} src={icon4} alt='BitsWits' className='img-fluid' />
                                </div>
                                <h5 className='font24 fontf font-bold line30'>
                                    Smart Contract Development
                                </h5>
                                <p>
                                    Hire Blockchain developers in USA who are adroit in smart contract development, having crafted a slew of immutable smart contracts guaranteeing conflict-free business operations and transactions.
                                </p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className={`${styles.soluCard} ${styles.five}`}>
                                <div className={`${styles.imgBox}`}>
                                    <Image quality={75} src={icon5} alt='BitsWits' className='img-fluid' />
                                </div>
                                <h5 className='font24 fontf font-bold line30'>
                                    DApp Development
                                </h5>
                                <p>
                                    Advance into the modern enterprise era of decentralization by leveraging the benefits of our Dapp development services for maximizing business proficiency.
                                </p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className={`${styles.soluCard} ${styles.six}`}>
                                <div className={`${styles.imgBox}`}>
                                    <Image quality={75} src={icon6} alt='BitsWits' className='img-fluid' />
                                </div>
                                <h5 className='font24 fontf font-bold line30'>
                                    IEO & ICO Services and Solutions
                                </h5>
                                <p>
                                    Our comprehensive IEO & ICO services present smart strategies for investors, and generate crypto assets for distribution and promotion across intended markets using secure technologies.
                                </p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className={`${styles.soluCard} ${styles.one}`}>
                                <div className={`${styles.imgBox}`}>
                                    <Image quality={75} src={icon7} alt='BitsWits' className='img-fluid' />
                                </div>
                                <h5 className='font24 fontf font-bold line30'>
                                    Crypto Wallet App development
                                </h5>
                                <p>
                                    We develop robust Crypto wallets that are highly compatible with diverse cryptocurrencies as well as digital assets comprising advancing cold and hot storage features.
                                </p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className={`${styles.soluCard} ${styles.two}`}>
                                <div className={`${styles.imgBox}`}>
                                    <Image quality={75} src={icon8} alt='BitsWits' className='img-fluid' />
                                </div>
                                <h5 className='font24 fontf font-bold line30'>
                                    NFT Launch Pad App development
                                </h5>
                                <p>
                                    We ensure a seamless trading experience for your users and build a securely compatible platform that is supported by cutting edge tools and blockchain fundamentals.
                                </p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className={`${styles.soluCard} ${styles.three}`}>
                                <div className={`${styles.imgBox}`}>
                                    <Image quality={75} src={icon9} alt='BitsWits' className='img-fluid' />
                                </div>
                                <h5 className='font24 fontf font-bold line30'>
                                    FinTech App Development
                                </h5>
                                <p>
                                    Creating an entire ecosystem of rapid fast data processing networks on a secure infrastructure enabled by blockchain technologies and solutions helping you achieve modern productivity.
                                </p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className={`${styles.soluCard} ${styles.four}`}>
                                <div className={`${styles.imgBox}`}>
                                    <Image quality={75} src={icon10} alt='BitsWits' className='img-fluid' />
                                </div>
                                <h5 className='font24 fontf font-bold line30'>
                                    NFT Market Place Development
                                </h5>
                                <p>
                                    Exhibiting and shining light on the aspiring innovation age you need smart marketplace solutions that are transparent and feature-rich for users as well as experts to buy, trade, and mint limitless NFTs.
                                </p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className={`${styles.soluCard} ${styles.five}`}>
                                <div className={`${styles.imgBox}`}>
                                    <Image quality={75} src={icon11} alt='BitsWits' className='img-fluid' />
                                </div>
                                <h5 className='font24 fontf font-bold line30'>
                                    DAO Development
                                </h5>
                                <p>
                                    Fabricate an autonomous voting system for equitable and eliminate the traditional process of decision making, adapt decentralized solutions for your legal body and construct a trust economy.
                                </p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className={`${styles.soluCard} ${styles.six}`}>
                                <div className={`${styles.imgBox}`}>
                                    <Image quality={75} src={icon12} alt='BitsWits' className='img-fluid' />
                                </div>
                                <h5 className='font24 fontf font-bold line30'>
                                    Custom Blockchain
                                </h5>
                                <p>
                                    Empower your organization using enterprise-grade blockchain solutions increasing data traceability, security and eliminating the need of third party authorizing entities completely.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BcDevSolution