import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import style from '@/styles/blockchain/Revolution.module.css';
import Image from 'next/image';
import Link from 'next/link';
import CTA from '../../components/blockchain/cta';
// import posters from '../public/images/poster.svg';
// import phone from '../public/images/phone.svg';
// import blockchain from '../public/images/blockchain.png';
// import appdev from '../public/images/app-dev.png'
// import technology from '../public/images/technology.png'
// import bitcoin from '../public/images/bitcoin.png'
// import nft from '../public/images/nft.png'
// import vid from '../public/images/video.mp4'
import poster from '@/public/blockchain/images/cube.png'

const NextGen = (props) => {
    return (
        <>
            <section className={style.secPad}>
                <Container>
                    <Row className='justify-content-center align-items-center'>
                        <Col lg={8} className='pt-4 pb-4 border-top border-bottom'>
                            <h2 className="text-white f40 mb-2">{props.nextTtitle1}</h2>
                            <h4 className="fw300 f30 text-white mb-2">{props.nextsub}</h4>
                            <p className='text-white fw300'>{props.nextPara}</p>
                            <CTA number="1-844-400-0025" discuss="Hire Blockchain Developer" />
                        </Col>
                        <Col lg={4}>

                            {props.poster ?
                                <div className='text-center'>
                                    <video className={`${style.bgVideo} img-fluid`} width={450} autoPlay muted loop src="../../../blockchain/images/nextgen.mp4" type="video/mp4"></video>
                                </div>
                                :
                                ''
                            }
                            {props.poster1 ?
                                <div className='text-center pt-sm-2 mt-5 mt-lg-0'>
                                    <Image quality={75} src={poster} className='img-fluid' alt="Blockchain" />
                                </div>
                                :
                                ''
                            }
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default NextGen