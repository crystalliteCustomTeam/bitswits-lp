import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import style from '@/styles/metaverse/metaverseCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import CardOne from '@/public/metaverse/images/card-1.png';
import CardTwo from '@/public/metaverse/images/card-2.png';
import CardThree from '@/public/metaverse/images/card-3.png';
import CardFour from '@/public/metaverse/images/card-4.png';
import MetaDot from '@/public/metaverse/images/metaversedot.png';


const Metaverse = (props) => {

    return (
        <>
            <section className={style.paddingTop}>
                <Container>
                    <Row className='justify-content-center align-items-center mb-sm-5'>
                        <Col lg={12}>
                            <p className="text-white mb-sm-4">{props.hireSubTile}</p>
                        </Col>
                    </Row>
                    <div className={` ${style.cardPosition}`}>
                        <Row className={`justify-content-center align-items-center ${style.relative}`}>
                            <Col lg={6} className={`${style.br1} ${style.bb1} pb-5`}>
                                <div className={`${style.card} mb-lg-0 mb-sm-5`}>
                                    <div className={`${style.feature}`}>
                                        <div className={`${style.gap2} d-flex justify-content-left align-items-center`}>
                                            <div className={style.cardContent}>
                                                <span className='text-white line2 mb-3'>
                                                    <span className={`${style.f28} fw700`}>Metaverse <span className='txt-primary'>NFT</span></span>
                                                    <span className='f20 fw600 d-block'>Development Services</span>
                                                </span>
                                                <p className={`text-white font11 pt-2 ${style.cardpara}`}>
                                                    Level up your metaverse app by enhancing the metaverse economy through digital assets. NFTs offer users a way to buy and sell digital assets in the virtual world transparently and securely.
                                                </p>
                                                <div className='cardImage'>
                                                    <Link href='javascript:;' className={`${style.grediantBtn} text-white`}>
                                                        Hire Blockchain Developer
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className={style.cardImage}>
                                                <Image quality={75} src={CardOne} className="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className={`${style.bb1} ${style.bb1} pb-5  position-relative`}>
                                <div className={`${style.card} ms-auto mb-lg-0 mb-sm-5`}>
                                    <div className={`${style.feature}`}>
                                        <div className={`${style.gap2} d-flex justify-content-left align-items-center`}>
                                            <div className={style.cardContent}>
                                                <span className='text-white line2 mb-3'>
                                                    <span className={`${style.f28} fw700`}>Metaverse <span className='txt-primary'>Decentralized</span></span>
                                                    <span className='f20 fw600 d-block'>Development Services</span>
                                                </span>
                                                <p className={`text-white font11 pt-2 ${style.cardpara}`}>
                                                    Level up your metaverse app by enhancing the metaverse economy through digital assets. NFTs offer users a way to buy and sell digital assets in the virtual world transparently and securely.
                                                </p>
                                                <div className='cardImage'>
                                                    <Link href='javascript:;' className={`${style.grediantBtn} text-white`}>
                                                        Hire Blockchain Developer
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className={style.cardImageTwo}>
                                                <Image quality={75} src={CardTwo} className="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <span className={style.metaDot}>
                                <Image quality={75} src={MetaDot} />
                            </span>
                            <Col lg={6} className={`${style.br1} position-relative pt-5`}>
                                <div className={`${style.card} mb-lg-0 mb-sm-5`}>
                                    <div className={`${style.feature}`}>
                                        <div className={`${style.gap2} d-flex justify-content-left align-items-center`}>
                                            <div className={style.cardContent}>
                                                <span className='text-white line2 mb-3'>
                                                    <span className={`${style.f28} fw700`}>Metaverse <span className='txt-primary'>NFT</span></span>
                                                    <span className='f20 fw600 d-block'>Development Services</span>
                                                </span>
                                                <p className={`text-white font11 pt-2 ${style.cardpara}`}>
                                                    Level up your metaverse app by enhancing the metaverse economy through digital assets. NFTs offer users a way to buy and sell digital assets in the virtual world transparently and securely.
                                                </p>
                                                <div className='cardImage'>
                                                    <Link href='javascript:;' className={`${style.grediantBtn} text-white`}>
                                                        Hire Blockchain Developer
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className={style.cardImage}>
                                                <Image quality={75} src={CardThree} className="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className={` position-relative pt-5`}>
                                <div className={`${style.card} ms-auto mb-lg-0 mb-sm-5`}>
                                    <div className={`${style.feature}`}>
                                        <div className={`${style.gap2} d-flex justify-content-left align-items-center`}>
                                            <div className={style.cardContent}>
                                                <span className='text-white line2 mb-3'>
                                                    <span className={`${style.f28} fw700`}>Metaverse <span className='txt-primary'>Decentralized</span></span>
                                                    <span className='f20 fw600 d-block'>Platforms Development</span>
                                                </span>
                                                <p className={`text-white font11 pt-2 ${style.cardpara}`}>
                                                    Level up your metaverse app by enhancing the metaverse economy through digital assets. NFTs offer users a way to buy and sell digital assets in the virtual world transparently and securely.
                                                </p>
                                                <div className='cardImage'>
                                                    <Link href='javascript:;' className={`${style.grediantBtn} text-white`}>
                                                        Hire Blockchain Developer
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className={style.cardImageFour}>
                                                <Image quality={75} src={CardFour} className="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}
export default Metaverse