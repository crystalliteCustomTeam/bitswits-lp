import React, { useState } from 'react';
import Image from 'next/image'
import styles from '@/styles/TechStack.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FaAngleDown } from "react-icons/fa";
//images
import icon1 from '../public/images/BlockchainDvelpment/framwork/framework.png'
import icon2 from '../public/images/BlockchainDvelpment/tools/tools.png'
import icon3 from '../public/images/BlockchainDvelpment/language/lang.png'
//framworks
import fram1 from '../public/images/BlockchainDvelpment/framwork/Ethereum.png'
import fram2 from '../public/images/BlockchainDvelpment/framwork/Hyperledger.png'
import fram3 from '../public/images/BlockchainDvelpment/framwork/Polygon.png'
import fram4 from '../public/images/BlockchainDvelpment/framwork/Binance.png'
import fram5 from '../public/images/BlockchainDvelpment/framwork/Avalanche.png'
import fram6 from '../public/images/BlockchainDvelpment/framwork/Tron.png'
import fram7 from '../public/images/BlockchainDvelpment/framwork/solana.png'
import fram8 from '../public/images/BlockchainDvelpment/framwork/bchain-Corda.png'
//tools
import tool1 from '../public/images/BlockchainDvelpment/tools/HardHat.png'
import tool2 from '../public/images/BlockchainDvelpment/tools/Truffle.png'
import tool3 from '../public/images/BlockchainDvelpment/tools/Remix-IDE.png'
import tool4 from '../public/images/BlockchainDvelpment/tools/Ganache.png'
import tool5 from '../public/images/BlockchainDvelpment/tools/Ethereum.png'
import tool6 from '../public/images/BlockchainDvelpment/tools/Metamask.png'
import tool7 from '../public/images/BlockchainDvelpment/tools/docker-logo.png'
//language
import lang1 from '../public/images/BlockchainDvelpment/language/Solidity.png'
import lang2 from '../public/images/BlockchainDvelpment/language/Kotlin.png'
import lang3 from '../public/images/BlockchainDvelpment/language/Web3-JS.png'
import lang4 from '../public/images/BlockchainDvelpment/language/Ethers-JS.png'
import lang5 from '../public/images/BlockchainDvelpment/language/JavaScript.png'
import lang6 from '../public/images/BlockchainDvelpment/language/Hyperledger.png'
import lang7 from '../public/images/BlockchainDvelpment/language/mongo-db.png'




const TechStack = () => {

    const [show, tab] = useState(true);
    const [show1, tab1] = useState(false);
    const [show2, tab2] = useState(false);

    function framework() {
        tab(true);
        tab1(false);
        tab2(false);
    }

    function tools() {
        tab(false);
        tab1(true);
        tab2(false);
    }

    function lang() {
        tab(false);
        tab1(false);
        tab2(true);
    }

    const [selectedOption, setSelectedOption] = useState('Frameworks');
    const [selectedImgBox, setSelectedImgBox] = useState('one'); // Default value for imgBox
    const [showDropdown, setShowDropdown] = useState(false);

    const handleOptionSelect = (option, imgBox) => {
        setSelectedOption(option);
        setSelectedImgBox(imgBox);
        setShowDropdown(false); // Close the dropdown after selecting an option
    };

    const toggleDropdown = () => {
        setShowDropdown((prevState) => !prevState);
    };


    return (
        <>
            <section className={`${styles.techStack} techStack`}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='text-center mb-3 mb-md-5'>
                                <h2 className='font40 black fontf font-bold line60'>
                                    Our Blockchain App Development Tech-Stack
                                </h2>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.head}>
                                <h3 className='font24 black fontf font-bold line35'>
                                    Empowering businesses through establishing a scalable ecosystem utilizing top-notch technology and human resoruces.
                                </h3>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.head}>
                                <p className='font18 lscolor fontf font-medium line25'>
                                    Aligning our goals with the core ethos of blockchain technology; to circulate the data and authenticate using secure and scalable technology. A data flow that cannot be altered and one that is immune to digital threats, hence improving reliability and efficiency. Explore our solutions and services that meet your development demands with convenience.
                                </p>
                            </div>
                        </Col>
                        <Col lg={8} className='mx-auto mt-5'>
                            {/*=============== Desktop tabs ===============*/}

                            <div className={styles.tabs}>
                                <div onClick={framework} className={show ? styles.boxBtn : styles.boxCard} >
                                    <div className={`${styles.techCard} ${styles.card1}`}>
                                        <div className={`${styles.imgBox} ${styles.one}`}>
                                            <Image quality={75} src={icon1} alt='Bitswits' className='img-fluid' />
                                        </div>
                                        <h5 className='font18 black fontf font-medium line30'>Frameworks</h5>
                                    </div>
                                </div>

                                <div onClick={tools} className={show1 ? styles.boxBtn : styles.boxCard} >
                                    <div className={`${styles.techCard} ${styles.card2}`}>
                                        <div className={`${styles.imgBox} ${styles.two}`}>
                                            <Image quality={75} src={icon2} alt='Bitswits' className='img-fluid' />
                                        </div>
                                        <h5 className='font18 black fontf font-medium line30'>Tools</h5>
                                    </div>
                                </div>

                                <div onClick={lang} className={show2 ? styles.boxBtn : styles.boxCard} >
                                    <div className={`${styles.techCard} ${styles.card3}`}>
                                        <div className={`${styles.imgBox} ${styles.three}`}>
                                            <Image quality={75} src={icon3} alt='Bitswits' className='img-fluid' />
                                        </div>
                                        <h5 className='font18 black fontf font-medium line30'>Languages</h5>
                                    </div>
                                </div>
                            </div>

                            {/*=============== Mobile tabs ===============*/}

                            <div className={styles.mobileDropdown} onClick={toggleDropdown}>
                                <div className={`${styles.techCard} ${styles.card1}`}>
                                    <div className={`${styles.imgBox} ${styles[selectedImgBox]}`}>
                                        <Image quality={75} src={icon1} alt='Bitswits' className='img-fluid' />
                                    </div>
                                    <h5 className='font18 black fontf font-medium line30'>{selectedOption}</h5>
                                </div>
                                <FaAngleDown />
                            </div>

                            {/*=============== Mobile Dropdown Options ===============*/}

                            {showDropdown && (
                                <div className={styles.mobileOptions}>
                                    <div onClick={() => handleOptionSelect('Frameworks', 'one')} className={selectedOption === 'Frameworks' ? styles.boxBtn : styles.boxCard}>
                                        <div className={`${styles.techCard} ${styles.card1}`}>
                                            <div className={`${styles.imgBox} ${styles.one}`}>
                                                <Image quality={75} src={icon1} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <h5 className='font18 black fontf font-medium line30'>Frameworks</h5>
                                        </div>
                                    </div>

                                    <div onClick={() => handleOptionSelect('Tools', 'two')} className={selectedOption === 'Tools' ? styles.boxBtn : styles.boxCard}>
                                        <div className={`${styles.techCard} ${styles.card2}`}>
                                            <div className={`${styles.imgBox} ${styles.two}`}>
                                                <Image quality={75} src={icon2} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <h5 className='font18 black fontf font-medium line30'>Tools</h5>
                                        </div>
                                    </div>

                                    <div onClick={() => handleOptionSelect('Languages', 'three')} className={selectedOption === 'Languages' ? styles.boxBtn : styles.boxCard}>
                                        <div className={`${styles.techCard} ${styles.card3}`}>
                                            <div className={`${styles.imgBox} ${styles.three}`}>
                                                <Image quality={75} src={icon3} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <h5 className='font18 black fontf font-medium line30'>Languages</h5>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </Col>
                        {/*=============== tab content ===============*/}

                        <Col lg={12}>
                            {/*=============== Desktop tab content ===============*/}

                            <div className={`${styles.tabContent} ${styles.deskTab}`}>

                                {show ?

                                    <Row>
                                        <Col lg={6}>
                                            <div className={styles.contnt}>
                                                <h3 className='font24 black fontf font-bold line35 mb-3'>
                                                    As a leading Blockchain Development company we synergize cutting edge technologies to create the best solutions for you.
                                                </h3>
                                                <p className='font18 lscolor fontf font-medium line25'>
                                                    We eliminate the complexity of the product and simplify every process from development to deployment as well as maintenance by utilizing the best blockchain frameworks.
                                                </p>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <ul className={styles.tabCntntImg}>
                                                <li>
                                                    <Image quality={75} src={fram1} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={fram2} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={fram3} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={fram4} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={fram5} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={fram6} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={fram7} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={fram8} alt='Bitswits' className='img-fluid' />
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    :
                                    ''
                                }


                                {show1 ?

                                    <Row>
                                        <Col lg={6}>
                                            <div className={styles.contnt}>
                                                <h3 className='font24 black fontf font-bold line35 mb-3'>
                                                    As a leading Blockchain Development company we synergize cutting edge technologies to create the best solutions for you.
                                                </h3>
                                                <p className='font18 lscolor fontf font-medium line25'>
                                                    Implementing a secure and scalable data-centric operation do need the use of top-notch blockchain tools and we are experienced in utilizing the right tools for you.
                                                </p>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <ul className={styles.tabCntntImg}>
                                                <li>
                                                    <Image quality={75} src={tool1} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={tool2} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={tool3} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={tool4} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={tool5} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={tool6} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={tool7} alt='Bitswits' className='img-fluid' />
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    :
                                    ''
                                }


                                {show2 ?

                                    <Row>
                                        <Col lg={6}>
                                            <div className={styles.contnt}>
                                                <h3 className='font24 black fontf font-bold line35 mb-3'>
                                                    As a leading Blockchain Development company we synergize cutting edge technologies to create the best solutions for you.
                                                </h3>
                                                <p className='font18 lscolor fontf font-medium line25'>
                                                    The uniqueness is in the cruciality of these technically mechanically enhanced parameters that allow us to deliver high end blockchain solutions.
                                                </p>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <ul className={styles.tabCntntImg}>
                                                <li>
                                                    <Image quality={75} src={lang1} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={lang2} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={lang3} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={lang4} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={lang5} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={lang6} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={lang7} alt='Bitswits' className='img-fluid' />
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    :
                                    ''
                                }

                            </div>

                            {/*=============== Mobile tab content ===============*/}

                            <div className={`${styles.tabContent} ${styles.mblTab}`}>
                                {selectedOption === 'Frameworks' && (
                                    <Row>
                                        <Col lg={6}>
                                            <div className={styles.contnt}>
                                                <h3 className='font24 black fontf font-bold line35 mb-3'>
                                                    As a leading Blockchain Development company we synergize cutting edge technologies to create the best solutions for you.
                                                </h3>
                                                <p className='font18 lscolor fontf font-medium line25'>
                                                    We eliminate the complexity of the product and simplify every process from development to deployment as well as maintenance by utilizing the best blockchain frameworks.
                                                </p>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <ul className={styles.tabCntntImg}>
                                                <li>
                                                    <Image quality={75} src={fram1} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={fram2} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={fram3} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={fram4} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={fram5} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={fram6} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={fram7} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={fram8} alt='Bitswits' className='img-fluid' />
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                )}

                                {selectedOption === 'Tools' && (
                                    <Row>
                                        <Col lg={6}>
                                            <div className={styles.contnt}>
                                                <h3 className='font24 black fontf font-bold line35 mb-3'>
                                                    As a leading Blockchain Development company we synergize cutting edge technologies to create the best solutions for you.
                                                </h3>
                                                <p className='font18 lscolor fontf font-medium line25'>
                                                    Implementing a secure and scalable data-centric operation do need the use of top-notch blockchain tools and we are experienced in utilizing the right tools for you.
                                                </p>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <ul className={styles.tabCntntImg}>
                                                <li>
                                                    <Image quality={75} src={tool1} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={tool2} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={tool3} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={tool4} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={tool5} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={tool6} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={tool7} alt='Bitswits' className='img-fluid' />
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                )}

                                {selectedOption === 'Languages' && (
                                    <Row>
                                        <Col lg={6}>
                                            <div className={styles.contnt}>
                                                <h3 className='font24 black fontf font-bold line35 mb-3'>
                                                    As a leading Blockchain Development company we synergize cutting edge technologies to create the best solutions for you.
                                                </h3>
                                                <p className='font18 lscolor fontf font-medium line25'>
                                                    The uniqueness is in the cruciality of these technically mechanically enhanced parameters that allow us to deliver high end blockchain solutions.
                                                </p>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <ul className={styles.tabCntntImg}>
                                                <li>
                                                    <Image quality={75} src={lang1} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={lang2} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={lang3} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={lang4} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={lang5} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={lang6} alt='Bitswits' className='img-fluid' />
                                                </li>
                                                <li>
                                                    <Image quality={75} src={lang7} alt='Bitswits' className='img-fluid' />
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                )}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default TechStack