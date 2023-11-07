import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/NewhomeFaqs.module.css'
import { Container, Row, Col } from 'react-bootstrap'
// import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react'
//images
// import arrow from '../public/images/icons/arrow.webp'
import arrow from '../public/newHomePageImages/pick.png'
import close from '../public/newHomePageImages/close.png'
import open from '../public/newHomePageImages/open.png'

const Game2dFaqs = () => {

    const [faq1show, setfaq1] = useState(false);
    const [faq2show, setfaq2] = useState(false);
    const [faq3show, setfaq3] = useState(false);
    const [faq4show, setfaq4] = useState(false);
    const [faq5show, setfaq5] = useState(false);
    const [faq6show, setfaq6] = useState(false);

    function faq1() {
        setfaq1(!faq1show);
        setfaq2(false);
        setfaq3(false);
        setfaq4(false);
        setfaq5(false);
        setfaq6(false);
    }
    function faq2() {

        setfaq1(false);
        setfaq2(!faq2show);
        setfaq3(false);
        setfaq4(false);
        setfaq5(false);
        setfaq6(false);
    }
    function faq3() {
        setfaq1(false);
        setfaq2(false);
        setfaq3(!faq3show);
        setfaq4(false);
        setfaq5(false);
        setfaq6(false);
    }
    function faq4() {
        setfaq1(false);
        setfaq2(false);
        setfaq3(false);
        setfaq4(!faq4show);
        setfaq5(false);
        setfaq6(false);
    }
    function faq5() {
        setfaq1(false);
        setfaq2(false);
        setfaq3(false);
        setfaq4(false);
        setfaq5(!faq5show);
        setfaq6(false);
    }
    function faq6() {
        setfaq1(false);
        setfaq2(false);
        setfaq3(false);
        setfaq4(false);
        setfaq5(false);
        setfaq6(!faq6show);
    }


    return (
        <>
            <section className={`${styles.faqs} newfaqsgloble`}>
                <Container>
                    <Row className={styles.comfort}>
                        <Col lg={12}>
                            <h2 className="white f-60 f-700">
                                FAQs
                            </h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <div className={`${faq1show ? 'touch' : ''} mb-4 mb-lg-0 mt-5`}>
                                <div onClick={faq1} className={styles.heading}>
                                    <h3>
                                        What is blockchain game development?  {faq1show ? <span className={styles.plus}>  <Image quality={75} alt='Bitswits' src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} alt='Bitswits' src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq1show ? 'd-block' : 'd-none'} >
                                    <p>
                                        Blockchain game development involves creating video games that leverage blockchain technology for various purposes, including asset ownership, secure transactions, and provably fair gameplay.
                                    </p>
                                    <div className="mt-2">
                                        <Link href="#">
                                            Let's Start
                                            <Image alt="bitswits" className='img-fluid'
                                                src={arrow}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className={`${faq2show ? 'touch' : ''} mb-4 mb-lg-0`}>
                                <div onClick={faq2} className={styles.heading}>
                                    <h3>
                                        How does blockchain technology work in games? {faq2show ? <span className={styles.plus}>  <Image quality={75} alt='Bitswits' src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} alt='Bitswits' src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq2show ? 'd-block' : 'd-none'}>
                                    <p>
                                        In games, blockchain technology is used to create, manage, and verify digital assets (such as in-game items, characters, or currencies) as non-fungible tokens (NFTs) or other types of blockchain-based assets. These assets are stored on a decentralized ledger, providing players with true ownership and transparency.
                                    </p>
                                    <div className="mt-2">
                                        <Link href="#">
                                            Let's Start
                                            <Image alt="bitswits" className='img-fluid'
                                                src={arrow}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className={`${faq3show ? 'touch' : ''} mb-4 mb-lg-0`}>
                                <div onClick={faq3} className={styles.heading}>
                                    <h3>
                                        What are the benefits of using blockchain in game development? {faq3show ? <span className={styles.plus}>  <Image quality={75} alt='Bitswits' src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} alt='Bitswits' src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq3show ? 'd-block' : 'd-none'}>
                                    <ul>
                                        <li>Using blockchain in game development offers benefits such as:True ownership of in-game assets for players.</li>
                                        <li>Immutable ownership records and transparency.</li>
                                        <li>Interoperability, allowing assets to be used across different games or platforms.</li>
                                    </ul>
                                    <p>
                                        Enabling player-driven economies and marketplaces.
                                    </p>
                                    <div className="mt-2">
                                        <Link href="#">
                                            Let's Start
                                            <Image alt="bitswits" className='img-fluid'
                                                src={arrow}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className={`${faq4show ? 'touch' : ''} mb-4 mb-lg-0`}>
                                <div onClick={faq4} className={styles.heading}>
                                    <h3>
                                        Which blockchain platforms are commonly used for blockchain game development? {faq4show ? <span className={styles.plus}>  <Image quality={75} alt='Bitswits' src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} alt='Bitswits' src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq4show ? 'd-block' : 'd-none'}>
                                    <p>
                                        Ethereum is one of the most widely used blockchain platforms for creating blockchain-based games. Other platforms like Binance Smart Chain, Flow, and Polygon (formerly Matic) are also gaining popularity in the blockchain gaming space.
                                    </p>
                                    <div className="mt-2">
                                        <Link href="#">
                                            Let's Start
                                            <Image alt="bitswits" className='img-fluid'
                                                src={arrow}


                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className={`${faq5show ? 'touch' : ''} mb-4 mb-lg-0`}>
                                <div onClick={faq5} className={styles.heading}>
                                    <h3>
                                        What is the role of smart contracts in blockchain game development? {faq5show ? <span className={styles.plus}>  <Image quality={75} alt='Bitswits' src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} alt='Bitswits' src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq5show ? 'd-block' : 'd-none'}>
                                    <p>
                                        Smart contracts are self-executing contracts with predefined rules and conditions written in code. In blockchain games, smart contracts handle functions like creating, transferring, and verifying ownership of in-game assets, as well as managing in-game transactions.

                                    </p>
                                    <div className="mt-2">
                                        <Link href="#">
                                            Let's Start
                                            <Image alt="bitswits" className='img-fluid'
                                                src={arrow}


                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className={faq6show ? 'touch' : ''}>
                                <div onClick={faq6} className={styles.heading}>
                                    <h3>
                                        How can players interact with blockchain-based assets in a game? {faq6show ? <span className={styles.plus}>  <Image quality={75} alt='Bitswits' src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} alt='Bitswits' src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq6show ? 'd-block' : 'd-none'}>
                                    <p>
                                        Players interact with blockchain-based assets through digital wallets that support the blockchain on which the assets are created (e.g., Ethereum wallet for Ethereum-based assets). They can buy, sell, trade, and use these assets within the game ecosystem.
                                    </p>
                                    <div className="mt-2">
                                        <Link href="#">
                                            Let's Start
                                            <Image alt="bitswits" className='img-fluid'
                                                src={arrow}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Link className={styles.about} href="#">LET'S CONNECT</Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Game2dFaqs