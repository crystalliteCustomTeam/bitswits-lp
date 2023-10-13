import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import style from '@/styles/artificialIntelligence/AiBanner.module.css';
import MetaBtn from '../metaverse/MetaBtn';



const AiBanner = () => {
    return (
        <>
            <div className={` ${style.HomeBanner1}`}>

                <div className={style.overlay}></div>

                <div className='homeVideo'>
                    <video className='' autoPlay muted loop src="../../../artificialIntelligence/Images/Ai-homevideo.mp4" type="video/mp4"></video>
                </div>

                <Container>
                    <Row>
                        <Col lg={8} className='mx-auto'>
                            <div className={style.point}>
                                <div className={style.Lcontent}>
                                    <h1 className='text-white mb-3 pl-4'>
                                        <span className={`font40 fw700 grdiant d-block`}> Artificial Intelligence</span>
                                        <span className={`${style.f70} fw400`}> Development </span></h1>
                                    <p className={`${style.content} ${style.fontt} text-white`}>Blocktech Brew is a top Al development company with core expertise in deep learning,machine learning, NLP, computer vision technology and neural networks. We help you build custom Al solutions that will not only automate repetitive tasks and overcome business difficulties but also offer accurate evaluation & prediction reports by analysing big data.</p>
                                </div>
                                <div className={`${style.secBtns}`}>
                                    {/* <MetaBtn></MetaBtn> */}
                                    <MetaBtn></MetaBtn>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>

    )
}

export default AiBanner
