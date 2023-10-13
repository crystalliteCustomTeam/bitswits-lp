import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/NewLpPlatform.module.css'
//
import foldimg from "@/public/newlppage/platforms.png"

const NewLpPlatform = () => {
    return (
        <>
            <section className={styles.newPlatform}>
                <Container>
                    <Row>
                        <Col lg={10} className='mx-auto'>
                            <div className='mb-5'>
                                <p className={`f-20 text-center mb-0 font-bold`}>Endorsements on different Platforms</p>
                                <h3 className={`f-50 text-center font-bold my-1`}>Awards And Recognition</h3>
                                <p className={`font16 text-center mb-0 font-normal`}>Thriving on accelerating the path to disruption and value creation in all directions has enabled us to receive acknowledgment and recognition by leading ratings and review platforms</p>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div>
                                <Image quality={75} src={foldimg} alt='Bitswits' loading="eager" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default NewLpPlatform
