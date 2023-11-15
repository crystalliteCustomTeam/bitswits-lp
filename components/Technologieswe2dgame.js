import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Technologieswe2dgame.module.css'
//
import icon1 from '../public/2dicons/1.png'
import icon2 from '../public/2dicons/2.png'
import icon3 from '../public/2dicons/3.png'
import icon4 from '../public/2dicons/4.png'
import icon5 from '../public/2dicons/5.png'
import icon6 from '../public/2dicons/6.png'
import icon7 from '../public/2dicons/7.png'
import icon8 from '../public/2dicons/8.png'
import icon9 from '../public/2dicons/9.png'
import icon10 from '../public/2dicons/10.png'
import icon11 from '../public/2dicons/11.png'
import icon12 from '../public/2dicons/12.png'


const Technologieswe2dgame = () => {

    return (
        <>
            <section className={styles.tech}>
                <Container>
                    <Row>
                        <Col xl={12} className={styles.stack}>
                            <h3 className='white center font-bold'>Suite Of Tools In Our Arsenal</h3>
                            <h2 className={styles.work}>Our Technology Stack to Help <br></br> Businesses Rise Above and Conquer  Their Competitors</h2>
                        </Col>

                        <Col xl={12} className='mt-5'>
                            <div className={styles.newyork}>
                                <div>
                                    <Image quality={75} alt='BitsWits' src={icon1} className='img-fluid' />
                                    <p>HTML 5</p>
                                </div>
                                <div>
                                    <Image quality={75} alt='BitsWits' src={icon2} className='img-fluid' />
                                    <p>Unity 2D</p>
                                </div>
                                <div>
                                    <Image quality={75} alt='BitsWits' src={icon3} className='img-fluid' />
                                    <p>Unreal Engine</p>
                                </div>
                                <div>
                                    <Image quality={75} alt='BitsWits' src={icon4} className='img-fluid' />
                                    <p>Android SDK</p>
                                </div>
                                <div>
                                    <Image quality={75} alt='BitsWits' src={icon5} className='img-fluid w-75' />
                                    <p>CryENGINE</p>
                                </div>

                                <div>
                                    <Image quality={75} alt='BitsWits' src={icon6} className='img-fluid' />
                                    <p>Game Maker <br></br>
                                        Studio 2</p>
                                </div>
                                <div>
                                    <Image quality={75} alt='BitsWits' src={icon7} className='img-fluid' />
                                    <p>Corona SDK</p>
                                </div>
                                <div>
                                    <Image quality={75} alt='BitsWits' src={icon3} className='img-fluid' />
                                    <p>Unreal Engine</p>
                                </div>

                                <div>
                                    <Image quality={75} alt='BitsWits' src={icon8} className='img-fluid' />
                                    <p>AppGameKit</p>
                                </div>
                                <div>
                                    <Image quality={75} alt='BitsWits' src={icon9} className='img-fluid' />
                                    <p>SpriteKit</p>
                                </div>
                                <div>
                                    <Image quality={75} alt='BitsWits' src={icon10} className='img-fluid' />
                                    <p>GoDot Engine</p>
                                </div>
                                <div>
                                    <Image quality={75} alt='BitsWits' src={icon11} className='img-fluid' />
                                    <p>Cocos2D</p>
                                </div>
                                <div>
                                    <Image quality={75} alt='BitsWits' src={icon12} className='img-fluid' />
                                    <p>Amazon Lumberyard</p>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Technologieswe2dgame