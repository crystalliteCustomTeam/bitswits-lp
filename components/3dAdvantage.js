import React from 'react'
import styles from "@/styles/3dAdvantage.module.css";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

import AdvantageOne from '../public/3d-game-development/images/advantage1.png'

const New3dAdvantage = () => {
    return (

        <>
            <div className={styles.creative2}>


                <section className={styles.creative}>

                    <Container>

                        <Row className={styles.game}>
                            <Col xl={12}>
                                <p className='text-white font16 mb-0'>Bounties</p>
                                <h2 className='mb-5'>Attractive/Creative Opportunities <br></br>
                                    3D Games Development Offers</h2>
                            </Col>


                        </Row>

                        <Row className={styles.boy}>
                            <Col xl={6}>

                                <div className={styles.dscool}>
                                    <div>
                                        <h3>More Control Options</h3>
                                        <p>It enables the 3D game developer to provide
                                            gamers with more control options, such as
                                            the ability to customize their gaming
                                            experience by adjusting settings or
                                            controlling multiple characters.</p>
                                    </div>
                                    <div>
                                        <h3>Increased Reach</h3>
                                        <p>3D games can be developed with a broader range of devices in mind, appealing to an increasingly global audience and expanding the potential customer base for businesses.</p>
                                    </div>
                                </div>


                                <div className={` ${styles.dscool} mt-3`}>
                                    <div>
                                        <h3>Increased Customer
                                            Loyalty</h3>
                                        <p>With 3D game development, businesses can create entertaining and engaging games, creating a sense of loyalty amongst prospects that may result in repeat customers and long-term fans of the business.</p>
                                    </div>
                                    <div>
                                        <h3>Scalability</h3>
                                        <p>3D games are incredibly scalable, allowing firms to add or remove the content as needed, depending on the customer base. This makes it easy for businesses to adjust their games to cater to different markets or demographics.</p>
                                    </div>
                                </div>

                                <div className={` ${styles.dscool} mt-3`}>
                                    <div>
                                        <h3>Enhanced
                                            Visualization</h3>
                                        <p>The enhanced graphics, lighting, physics, and rendering capabilities of 3D game development create an interactive, immersive, and captivating environment for gaming enthusiasts.</p>
                                    </div>
                                    <div>
                                        <h3>Increased Realism</h3>
                                        <p>It allows game developers to create a realistic world for gamers to explore. The improved graphics and rendering capabilities of 3D engines make the game look more pragmatic and believable.</p>
                                    </div>
                                </div>



                            </Col>
                            <Col xl={6}>

                                <div className={styles.tested}>
                                    <Image quality={75} src={AdvantageOne} alt='BitsWits' />
                                </div>


                            </Col>
                        </Row>
                    </Container>

                </section>

            </div>
        </>

    )
}

export default New3dAdvantage