import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import style from '@/styles/artificialIntelligence/AiNextGen.module.css';
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
import MetaBtn from './MetaBtn';

const NextGen = (props) => {
    return (
        <>
            <section className={`${style.secSpacing} bg-black`}>
                <Container>
                    <Row className='justify-content-center align-items-center'>
                        <Col lg={7} className='pt-4 pb-4 border-top border-bottom'>
                            <h2 className="text-white f30 mb-2">{props.nextTtitle1}</h2>
                            <h4 className="fw300 f20 text-white mb-3">{props.nextsub}</h4>
                            <p className='text-white fw300'>AI or Artificial Intelligence is one of such futuristic technologies that will transform how we do business. Artificial Intelligence leverages deep learning and machine learning techniques to mimic human-like thinking and action capabilities.
                                <br></br><br></br>
                                AI uses large chunks of data to train its algorithm. One of the best things about AI is that it has a continuous training model that keeps on learning and improving itself from the data fed into it.</p>
                            <div className={`${style.secBtns} mt-5 mb-4`}>
                                <MetaBtn></MetaBtn>
                            </div>
                        </Col>
                        <Col lg={5}>

                            {props.poster ?
                                <div>
                                    <video className={`${style.bgVideo} img-fluid`} width={900} autoPlay muted loop src="../../../artificialIntelligence/Images/HugeDiamond.mp4" type="video/mp4"></video>
                                </div>
                                :
                                ''
                            }
                            {props.poster1 ?
                                <div className='text-center pt-sm-2'>
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