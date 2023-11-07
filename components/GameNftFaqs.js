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
                                        What is an NFT game? {faq1show ? <span className={styles.plus}>  <Image quality={75} alt='Bitswits' src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} alt='Bitswits' src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq1show ? 'd-block' : 'd-none'} >
                                    <p>
                                        An NFT game is a type of video game where in-game assets, characters, or items are represented as unique, indivisible tokens on a blockchain. These tokens, known as NFTs, have verifiable ownership, rarity, and scarcity, allowing players to have true ownership of their in-game items.
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
                                        How do NFTs work in games? {faq2show ? <span className={styles.plus}>  <Image quality={75} alt='Bitswits' src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} alt='Bitswits' src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq2show ? 'd-block' : 'd-none'}>
                                    <p>
                                        In NFT games, specific in-game assets or items are represented as unique tokens on a blockchain. Each NFT has a distinct identifier and ownership record stored on the blockchain, which verifies its authenticity and scarcity.
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
                                        What is the benefit of using NFTs in game development? {faq3show ? <span className={styles.plus}>  <Image quality={75} alt='Bitswits' src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} alt='Bitswits' src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq3show ? 'd-block' : 'd-none'}>
                                    <p>
                                        NFTs enable true ownership of in-game assets, allowing players to buy, sell, and trade items with verifiable scarcity. This can create new revenue streams for game developers and provide players with a sense of ownership and investment in the game.
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
                                        Which blockchain platforms are commonly used for NFT game development? {faq4show ? <span className={styles.plus}>  <Image quality={75} alt='Bitswits' src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} alt='Bitswits' src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq4show ? 'd-block' : 'd-none'}>
                                    <p>
                                        Ethereum is one of the most popular blockchain platforms for NFTs due to its widespread adoption and support for smart contracts. Other platforms like Binance Smart Chain, Flow, and Polygon (formerly Matic) are also gaining traction in the NFT space.
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
                                        How do players interact with NFTs in a game? {faq5show ? <span className={styles.plus}>  <Image quality={75} alt='Bitswits' src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} alt='Bitswits' src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq5show ? 'd-block' : 'd-none'}>
                                    <p>
                                        Players interact with NFTs through digital wallets that support the blockchain on which the NFTs are created (e.g., Ethereum wallet for Ethereum-based NFTs). They can buy, sell, trade, and showcase their NFTs within the game ecosystem.
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
                                        What are some common use cases for NFTs in games? {faq6show ? <span className={styles.plus}>  <Image quality={75} alt='Bitswits' src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} alt='Bitswits' src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq6show ? 'd-block' : 'd-none'}>
                                    <ul>
                                        <li>Common use cases for NFTs in games include:Unique in-game assets like characters, skins, weapons, and accessories.</li>
                                        <li>Land ownership and virtual real estate in virtual worlds or metaverses.</li>
                                        <li>Collectible card games where each card is represented as an NFT.</li>
                                    </ul>
                                    <p>
                                        Player-created content, such as artwork or levels, that can be tokenized.
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