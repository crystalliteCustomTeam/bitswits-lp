import React from 'react'
import styles from '@/styles/Looking.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import { RxArrowRight } from 'react-icons/rx'
import ourportfolio3 from '../public/images/lookingfor/loop.png'
import ourportfolio31 from '../public/images/lookingfor/loop2.png'
import ourportfolio32 from '../public/images/lookingfor/loop3.png'
import uiux from '../public/images/lookingfor/uiux.png'
import ai from '../public/images/lookingfor/ai.png'
import web from '../public/images/lookingfor/web.png'
import blockchain from '../public/images/lookingfor/blockchain.png'
import gamedev from '../public/images/lookingfor/gamedev.png'

// blockchain

import icon1 from '../public/images/lookingfor/blockchain/1.svg'
import icon2 from '../public/images/lookingfor/blockchain/2.svg'
import icon3 from '../public/images/lookingfor/blockchain/3.svg'
import icon4 from '../public/images/lookingfor/blockchain/4.svg'


// game development
import gameicon1 from '../public/images/lookingfor/gamedevelopment/1.svg'
import gameicon2 from '../public/images/lookingfor/gamedevelopment/2.svg'
import gameicon3 from '../public/images/lookingfor/gamedevelopment/3.svg'
import gameicon4 from '../public/images/lookingfor/gamedevelopment/4.svg'
import gameicon5 from '../public/images/lookingfor/gamedevelopment/5.svg'



// mobileapp development
import mobileappicon1 from '../public/images/lookingfor/mobileapp/1.svg'
import mobileappicon2 from '../public/images/lookingfor/mobileapp/2.svg'
import mobileappicon3 from '../public/images/lookingfor/mobileapp/3.svg'


// websitedevelopment development
import websitedevelopmenticon1 from '../public/images/lookingfor/websitedevelopment/1.svg'
import websitedevelopmenticon2 from '../public/images/lookingfor/websitedevelopment/2.svg'
import websitedevelopmenticon3 from '../public/images/lookingfor/websitedevelopment/3.svg'
import websitedevelopmenticon4 from '../public/images/lookingfor/websitedevelopment/4.svg'

// aidevelopment
import aidevelopmenticon1 from '../public/images/lookingfor/aidevelopement/1.svg'
import aidevelopmenticon2 from '../public/images/lookingfor/aidevelopement/2.svg'
import aidevelopmenticon3 from '../public/images/lookingfor/aidevelopement/3.svg'
import aidevelopmenticon4 from '../public/images/lookingfor/aidevelopement/4.svg'

// uiuxdevelopement
import uiuxdevelopementicon1 from '../public/images/lookingfor/uiuxdevelopement/1.svg'
import uiuxdevelopementicon2 from '../public/images/lookingfor/uiuxdevelopement/2.svg'
import uiuxdevelopementicon3 from '../public/images/lookingfor/uiuxdevelopement/3.svg'
import uiuxdevelopementicon4 from '../public/images/lookingfor/uiuxdevelopement/4.svg'



import Image from 'next/image'
import { useState } from 'react'


const Lookingfor = () => {


    const [gameshow, gameapp] = useState(true);
    const [gameshow1, gameapp1] = useState(false);
    const [gameshow2, gameapp2] = useState(false);
    const [gameshow3, gameapp3] = useState(false);
    const [gameshow4, gameapp4] = useState(false);

    const [gameshow6, gameapp6] = useState(false);

    function game() {


        gameapp(true);
        gameapp1(false);
        gameapp2(false);
        gameapp3(false);
        gameapp4(false);

        gameapp6(false);
    }
    function game1() {

        gameapp(false);
        gameapp1(true);
        gameapp2(false);
        gameapp3(false);
        gameapp4(false);

        gameapp6(false);
    }
    function game2() {

        gameapp(false);
        gameapp1(false);
        gameapp2(true);
        gameapp3(false);
        gameapp4(false);

        gameapp6(false);
    }
    function game3() {

        gameapp(false);
        gameapp1(false);
        gameapp2(false);
        gameapp3(true);
        gameapp4(false);

        gameapp6(false);
    }

    function game4() {

        gameapp(false);
        gameapp1(false);
        gameapp2(false);
        gameapp3(false);
        gameapp4(true);

        gameapp6(false);
    }



    function game6() {

        gameapp(false);
        gameapp1(false);
        gameapp2(false);
        gameapp3(false);
        gameapp4(false);

        gameapp6(true);
    }

    return (
        <>
            <section className={styles.lookingfor}>
                <Container>
                    <Row className={styles.project}>
                        <Col lg={2}>
                            <h5 className='font20 fontf font-semibold mt-1 letterspace black'>Need</h5>
                        </Col>
                        <Col lg={7}>
                            <h2 className='font65 black fontf font-bold line60 black'> Looking for Stellar <span className='grdiant font-bold'> Mobile App Experiences</span>?  </h2>
                        </Col>
                        <Col lg={3}>
                            <Link className={styles.bttns1} href="#">Book a Call</Link>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col lg={12}>


                            <div className={styles.devlp}>
                                <div onClick={game} className={gameshow ? styles.btnblack : styles.game} >Mobile App Development</div>
                                <div onClick={game2} className={gameshow2 ? styles.btnblack : styles.game}>Web Applications </div>
                                <div onClick={game1} className={gameshow1 ? styles.btnblack : styles.game}>Game Development</div>
                                <div onClick={game3} className={gameshow3 ? styles.btnblack : styles.game}>Blockchain Solutions</div>
                                <div onClick={game6} className={gameshow6 ? styles.btnblack : styles.game}>UI/UX Design</div>
                                <div onClick={game4} className={gameshow4 ? styles.btnblack : styles.game}>Artificial Intelligence </div>

                            </div>
                        </Col>
                    </Row>

                    {gameshow ?

                        <Row>
                            <Col lg={6}>

                                <h3 className='fontf black font-bold font30 mt-5'>

                                    Our Full-suite of <span className='grdiant font-bold'>Mobile App Development Services</span>
                                </h3>
                                <p className='fontf black font-medium font15'>

                                    Our <span className='grdiant font-bold'>mobile app developers</span> provide trustworthy <span className='grdiant font-bold'>application development services</span> that stand out in quality and affordability in the market.
                                </p>

                                <div className={styles.way}>
                                    <div className={styles.servbold}><Image alt="bitswits" src={mobileappicon1} className='img-fluid' /></div>
                                    <div className={styles.servbold}><Image alt="bitswits" src={mobileappicon2} className='img-fluid' /></div>
                                    <div className={styles.servbold}><Image alt="bitswits" src={mobileappicon3} className='img-fluid' /></div>

                                </div>



                                <div className={`${styles.devlp1} mt-4 mb-4`}>
                                    <div className={styles.game2}>
                                        <h3 className='fontf black font-bold font20'>Timeframe</h3>
                                        <p className='fontf black font-medium font15'>3 - 6 Months</p>

                                    </div>
                                    <div className={styles.game1}>
                                        <h3 className='fontf black font-bold font20'>Services</h3>
                                        <ul className={styles.roadmap}>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Custom Mobile App Development</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />iOS App Development </li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Cross-Platform App Development </li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> React Native Apps</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Augmented Reality devices</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} /> Wearable Mobile Applications </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className={styles.livechat}>
                                    <Link className={styles.btn1} href="#">Call Us Now! </Link>
                                    <Link className={styles.btn1} href="#">Connect and Chat!</Link>
                                </div>

                            </Col>
                            <Col lg={6} className='d-none d-lg-block'>
                                <div className={styles.output}>
                                    <Image alt="bitswits" src={ourportfolio3} className='img-fluid' />
                                </div>
                            </Col>
                        </Row>
                        :
                        ''
                    }






                    {gameshow1 ?

                        <Row>
                            <Col lg={6}>

                                <h3 className='fontf black font-bold font30 mt-5'> BitsWits: Where Gaming Concepts Blends with Adventures </h3>
                                <p className='fontf black font-medium font15'> Join us in a BitsWits universe, a world where game ideas meld naturally, and adventures play out to the amusement of each player. Set off on a trip where inventiveness and creativity converge to create delighting experiences that will keep you captivated for days. </p>

                                <div className={styles.way}>
                                    <div className={styles.servbold}><Image alt="bitswits" src={gameicon1} className='img-fluid' /></div>
                                    <div className={styles.servbold}><Image alt="bitswits" src={gameicon2} className='img-fluid' /></div>
                                    <div className={styles.servbold}><Image alt="bitswits" src={gameicon3} className='img-fluid' /></div>
                                    <div className={styles.servbold}><Image alt="bitswits" src={gameicon4} className='img-fluid' /></div>
                                    <div className={styles.servbold}><Image alt="bitswits" src={gameicon5} className='img-fluid' /></div>
                                </div>



                                <div className={`${styles.devlp1} mt-4 mb-4`}>
                                    <div className={styles.game2}>
                                        <h3 className='fontf black font-bold font20'>Timeframe</h3>
                                        <p className='fontf black font-medium font15'>3-8 Months  </p>

                                    </div>
                                    <div className={styles.game1}>
                                        <h3 className='fontf black font-bold font20'>Services</h3>
                                        <ul className={styles.roadmap}>

                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />HTML5 Game Development</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Programming and Development </li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />iOS Game Development </li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />NFT Game Development</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Unity Game Development</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />VR/AR Integration </li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />2D Game Development</li>

                                        </ul>
                                    </div>
                                </div>

                                <div className={styles.livechat}>
                                    <Link className={styles.btn1} href="#">Call Us Now! </Link>
                                    <Link className={styles.btn1} href="#">Connect and Chat!</Link>
                                </div>

                            </Col>
                            <Col lg={6} className='d-none d-lg-block'>
                                <div className={styles.output}>
                                    <Image alt="bitswits" src={gamedev} className='img-fluid' />
                                </div>
                            </Col>
                        </Row>
                        :
                        ''
                    }







                    {gameshow2 ?

                        <Row>
                            <Col lg={6}>

                                <h3 className='fontf black font-bold font30 mt-5'>Discover Our Web Wonders and Website Development Services </h3>
                                <p className='fontf black font-medium font15'>Welcome to BitsWits, where <span className='grdiant font-bold'>app developers</span> cordially encourage you to discover the wonders of the Web! Engage in our world-class website development services to experience innovative adventures to create digital solutions that are designed just for you.</p>

                                <div className={styles.way}>
                                    <div className={styles.servbold}><Image alt="bitswits" src={websitedevelopmenticon1} className='img-fluid' /></div>
                                    <div className={styles.servbold}><Image alt="bitswits" src={websitedevelopmenticon2} className='img-fluid' /></div>
                                    <div className={styles.servbold}><Image alt="bitswits" src={websitedevelopmenticon3} className='img-fluid' /></div>
                                    <div className={styles.servbold}><Image alt="bitswits" src={websitedevelopmenticon4} className='img-fluid' /></div>

                                </div>



                                <div className={`${styles.devlp1} mt-4 mb-4`}>
                                    <div className={styles.game2}>
                                        <h3 className='fontf black font-bold font20'>Timeframe</h3>
                                        <p className='fontf black font-medium font15'>3-8 Months </p>

                                    </div>
                                    <div className={styles.game1}>
                                        <h3 className='fontf black font-bold font20'>Services</h3>
                                        <ul className={styles.roadmap}>

                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Web Design Applications</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Front-End Web Development </li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Back-End Web Development </li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Content Management System (CMS)</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Progressive Web Apps</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Custom Web Applications </li>

                                        </ul>
                                    </div>
                                </div>

                                <div className={styles.livechat}>
                                    <Link className={styles.btn1} href="#">Call Us Now! </Link>
                                    <Link className={styles.btn1} href="#">Connect and Chat!</Link>
                                </div>

                            </Col>
                            <Col lg={6} className='d-none d-lg-block'>
                                <div className={styles.output}>
                                    <Image alt="bitswits" src={web} className='img-fluid' />
                                </div>
                            </Col>
                        </Row>
                        :
                        ''
                    }



                    {gameshow3 ?

                        <Row>
                            <Col lg={6}>

                                <h3 className='fontf black font-bold font30 mt-5'> Lead Your Business with our <span className='grdiant font-bold'>Blockchain Development Solutions</span> </h3>
                                <p className='fontf black font-medium font15'>Utilize our expertise in blockchain development for decentralized ecosystems and complex smart contracts. We cross borders to provide game-changing blockchain solutions that reshape industries and advance digital development through enhanced security, transparency, and efficiency.</p>


                                <div className={styles.way}>
                                    <div className={styles.servbold}><Image alt="bitswits" src={icon1} className='img-fluid' /></div>
                                    <div className={styles.servbold}><Image alt="bitswits" src={icon2} className='img-fluid' /></div>
                                    <div className={styles.servbold}><Image alt="bitswits" src={icon3} className='img-fluid' /></div>
                                    <div className={styles.servbold}><Image alt="bitswits" src={icon4} className='img-fluid' /></div>
                                </div>



                                <div className={`${styles.devlp1} mt-4 mb-4`}>
                                    <div className={styles.game2}>
                                        <h3 className='fontf black font-bold font20'>Timeframe</h3>
                                        <p className='fontf black font-medium font15'>3-4 Months  </p>

                                    </div>
                                    <div className={styles.game1}>
                                        <h3 className='fontf black font-bold font20'>Services</h3>
                                        <ul className={styles.roadmap}>



                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Smart Contract Development </li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Decentralized App Development </li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Public Blockchain Integration </li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Token Creation </li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Blockchain App Consulting </li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Blockchain Supply Chain Solutions </li>

                                        </ul>
                                    </div>
                                </div>

                                <div className={styles.livechat}>
                                    <Link className={styles.btn1} href="#">Call Us Now! </Link>
                                    <Link className={styles.btn1} href="#">Connect and Chat!</Link>
                                </div>

                            </Col>
                            <Col lg={6} className='d-none d-lg-block'>
                                <div className={styles.output}>
                                    <Image alt="bitswits" src={blockchain} className='img-fluid' />
                                </div>
                            </Col>
                        </Row>
                        :
                        ''
                    }

                    {gameshow4 ?

                        <Row>
                            <Col lg={6}>

                                <h3 className='fontf black font-bold font30 mt-5'> Building Minds in Motion with Artificial Intelligence </h3>
                                <p className='fontf black font-medium font15'>Connect with BitsWits, where every answer is a step towards creating a future driven by the extraordinary capabilities of artificial intelligence.</p>

                                <div className={styles.way}>
                                    <div className={styles.servbold}><Image alt="bitswits" src={aidevelopmenticon1} className='img-fluid' /></div>
                                    <div className={styles.servbold}><Image alt="bitswits" src={aidevelopmenticon2} className='img-fluid' /></div>
                                    <div className={styles.servbold}><Image alt="bitswits" src={aidevelopmenticon3} className='img-fluid' /></div>
                                    <div className={styles.servbold}><Image alt="bitswits" src={aidevelopmenticon4} className='img-fluid' /></div>
                                </div>

                                <div className={`${styles.devlp1} mt-4 mb-4`}>
                                    <div className={styles.game2}>
                                        <h3 className='fontf black font-bold font20'>Timeframe</h3>
                                        <p className='fontf black font-medium font15'>4-5 Months  </p>

                                    </div>
                                    <div className={styles.game1}>
                                        <h3 className='fontf black font-bold font20'>Services</h3>
                                        <ul className={styles.roadmap}>

                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Predictive Analytics </li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Machine Learning Models </li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Custom AI Solutions</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Chatbot Development </li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Virtual Assistant Apps</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Computer Vision Solutions </li>

                                        </ul>
                                    </div>
                                </div>

                                <div className={styles.livechat}>
                                    <Link className={styles.btn1} href="#">Call Us Now! </Link>
                                    <Link className={styles.btn1} href="#">Connect and Chat!</Link>
                                </div>

                            </Col>
                            <Col lg={6} className='d-none d-lg-block'>
                                <div className={styles.output}>
                                    <Image alt="bitswits" src={ai} className='img-fluid' />
                                </div>
                            </Col>
                        </Row>
                        :
                        ''
                    }






                    {gameshow6 ?

                        <Row>
                            <Col lg={6}>

                                <h3 className='fontf black font-bold font30 mt-5'>Dig into the World of UI/UX Design Services</h3>
                                <p className='fontf black font-medium font15'>  Explore our mobile app and web design service, where <span className='grdiant font-bold'>best UI/UX designers</span> use their creativity to boost user satisfaction and drive your business towards remarkable growth. </p>

                                <div className={styles.way}>
                                    <div className={styles.servbold}><Image alt="bitswits" src={uiuxdevelopementicon1} className='img-fluid' /></div>
                                    <div className={styles.servbold}><Image alt="bitswits" src={uiuxdevelopementicon2} className='img-fluid' /></div>
                                    <div className={styles.servbold}><Image alt="bitswits" src={uiuxdevelopementicon3} className='img-fluid' /></div>
                                    <div className={styles.servbold}><Image alt="bitswits" src={uiuxdevelopementicon4} className='img-fluid' /></div>
                                </div>



                                <div className={`${styles.devlp1} mt-4 mb-4`}>
                                    <div className={styles.game2}>
                                        <h3 className='fontf black font-bold font20'>Timeframe</h3>
                                        <p className='fontf black font-medium font15'>2-3 Days </p>

                                    </div>
                                    <div className={styles.game1}>
                                        <h3 className='fontf black font-bold font20'>Services</h3>
                                        <ul className={styles.roadmap}>


                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Graphic Design </li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Wireframing and Prototyping </li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Visual Design </li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Interaction Design</li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Mobile App Design </li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Web App Design </li>
                                            <li className='fontf black font-medium font14 ling25'> <RxArrowRight size={20} />Iconography and Graphics </li>

                                        </ul>
                                    </div>
                                </div>

                                <div className={styles.livechat}>
                                    <Link className={styles.btn1} href="#">Call Us Now! </Link>
                                    <Link className={styles.btn1} href="#">Connect and Chat!</Link>
                                </div>


                            </Col>
                            <Col lg={6} className='d-none d-lg-block'>
                                <div className={styles.output}>
                                    <Image alt="bitswits" src={uiux} className='img-fluid' />
                                </div>
                            </Col>
                        </Row>
                        :
                        ''
                    }









                </Container>

            </section>
        </>
    )
}

export default Lookingfor