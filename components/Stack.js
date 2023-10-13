import React from 'react'
import styles from '@/styles/Stack.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import pony1 from '/public/images/blockchainicon/1.png'
import pony2 from '/public/images/blockchainicon/2.png'
import pony3 from '/public/images/blockchainicon/3.png'
import pony4 from '/public/images/blockchainicon/4.png'
import pony5 from '/public/images/blockchainicon/5.png'
import pony6 from '/public/images/blockchainicon/6.png'
import pony7 from '/public/images/blockchainicon/7.png'
import pony8 from '/public/images/blockchainicon/8.png'

const Stack = () => {
    return (
        <>
            <section className={styles.kook}>
                <Container>
                    <Row>
                        <Col>
                            <h3 className='f-20  f-700 white t-center'>TECHNOLOGY STACK</h3>
                            <h2 className='f-50  f-700 white t-center'>Unleash Your <span className='grdiant'>Gaming Creativity <br></br> With Our Myriad</span> Of Technology In Use</h2>
                            <p className='f-16  f-500 white t-center'>BitsWits uses various blockchain technologies, such as multi-signature authentication, to further enhance the security of our products. More so, we offer multiple services, including custom game design and development, cryptocurrency wallet integration, smart contract development, and more. Here are a few technologies we embed in our services:</p>
                        </Col>
                    </Row>
                    <Row className='gy-3 mt-3'>
                        <Col lg={3}>
                            <div className={styles.floatpont}><Image quality={75} src={pony1} className='img-fluid' />
                                <p className='f-16 f-700 white'>ETHEREUM</p></div>
                        </Col>
                        <Col lg={3}>
                            <div className={styles.floatpont}><Image quality={75} src={pony2} className='img-fluid' />
                                <p className='f-16 f-700 white'>EOS</p></div>
                        </Col>
                        <Col lg={3}>
                            <div className={styles.floatpont}><Image quality={75} src={pony3} className='img-fluid' />
                                <p className='f-16 f-700 white'>TRON</p></div>
                        </Col>
                        <Col lg={3}>
                            <div className={styles.floatpont}><Image quality={75} src={pony4} className='img-fluid' />
                                <p className='f-16 f-700 white'>BSC</p></div>
                        </Col>
                        <Col lg={3}>
                            <div className={styles.floatpont}><Image quality={75} src={pony5} className='img-fluid' />
                                <p className='f-16 f-700 white'>SOLANA</p></div>
                        </Col>
                        <Col lg={3}>
                            <div className={styles.floatpont}><Image quality={75} src={pony6} className='img-fluid' />
                                <p className='f-16 f-700 white'>TEZOS</p></div>
                        </Col>
                        <Col lg={3}>
                            <div className={styles.floatpont}><Image quality={75} src={pony7} className='img-fluid' />
                                <p className='f-16 f-700 white'>COSMOS</p></div>
                        </Col>
                        <Col lg={3}>
                            <div className={styles.floatpont}><Image quality={75} src={pony8} className='img-fluid' />
                                <p className='f-16 f-700 white'>MATIC</p></div>
                        </Col>
                    </Row>

                </Container>
            </section>


        </>
    )
}

export default Stack