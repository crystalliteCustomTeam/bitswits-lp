import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import style from '@/styles/metaverse/metawork.module.css';
import styles from '@/styles/metaverse/metaverse.module.css';
import Image from 'next/image';
// Images 
import WorkOne from '@/public/metaverse/images/work-bg.png';
import MetaBtn from './MetaBtn';
import MetaDot from '@/public/metaverse/images/metaversedot.png';

const MetaWork = (props) => {
    return (
        <>
            <section className={style.metaWork}>
                <Container>
                    <Row className='justify-content-center align-items-center mb-3 mt-2'>
                        <Col lg={12}>
                            <h2 className="text-white f40 mb-2">{props.revTile1}</h2>
                            <h4 className="fw300 f30 text-white mb-2">{props.revSubTile1}</h4>
                            <p className='text-white fw300 '>{props.revpara}</p>

                        </Col>
                    </Row>
                    <div className=''>
                        <Row className={`justify-content-center align-items-center ${style.relative}`}>
                            <Col lg={6} className={`${style.br1} ${style.contentHeight} ${style.bb1} position-relative pb-5 h-100`}>
                                <div className='p-sm-4'>
                                    <Row>
                                        <Col lg={12}>
                                            <div className={style.videoFront}>
                                                <video className={style.video} poster="../../../metaverse/images/video-thumbnail1.png" autoPlay muted loop src="../../../metaverse/images/workVid1.mp4" type="video/mov"></video>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className={style.ImageBack}>
                                                <Image quality={75} src={WorkOne} className={`${style.workImage} img-fluid`} />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg={6} className={`${style.bb1} ${style.imageHeight} position-relative pb-5 h-100`}>
                                <div className='p-sm-4'>
                                    <div className={`${style.workContent}`}>
                                        <h4 className={`f35 font-bold text-white`}>Build a Realistic Fashion Store</h4>
                                        <p className={`f18 ${style.contentPara}`}>
                                            Fashion has entered the metaverse trend by launching
                                            metaverse fashion week,metaverse fashion stores, and
                                            NFTs. Metaverse is empowering fashion brands to
                                            market their products to a global audience and multiply
                                            their revenue.
                                        </p>
                                        <div className={`${styles.secBtns} ${styles.secBtns2} mb-0`}>
                                            <MetaBtn number="1-844-400-0025"
                                                discuss="Hire Blockchain Developer" />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <span className={style.metaDot}>
                                <Image quality={75} src={MetaDot} />
                            </span>
                            <Col lg={6} className={`${style.br1} ${style.bb1} ${style.imageHeight} position-relative pb-5 h-100`}>
                                <div className='p-sm-4'>
                                    <div className={`${style.workContent} ps-0`}>
                                        <h4 className={`f35 font-bold text-white`}>Build a Realistic Fashion Store</h4>
                                        <p className={`f18 ${style.contentPara}`}>
                                            Fashion has entered the metaverse trend by launching
                                            metaverse fashion week,metaverse fashion stores, and
                                            NFTs. Metaverse is empowering fashion brands to
                                            market their products to a global audience and multiply
                                            their revenue.
                                        </p>
                                        <div className={`${styles.secBtns} ${styles.secBtns2} mb-0`}>
                                            <MetaBtn number="1-844-400-0025"
                                                discuss="Hire Blockchain Developer" />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className={`${style.contentHeight} ${style.bb1} position-relative pb-5 h-100`}>
                                <div className={`${style.ml} p-sm-4 mb-1`}>
                                    <Row>
                                        <Col lg={12}>
                                            <div className={style.videoFront}>
                                                <video className={style.video} poster="../../../metaverse/images/video-thumbnail2.png" autoPlay muted loop src="../../../metaverse/images/workVid2.mp4" type="video/mov"></video>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className={style.ImageBack}>
                                                <Image quality={75} src={WorkOne} className={`${style.workImage} img-fluid`} />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg={6} className={`${style.br1} ${style.contentHeight} ${style.bb1} position-relative pb-5 h-100`}>
                                <div className='p-sm-4'>
                                    <Row>
                                        <Col lg={12}>
                                            <div className={style.videoFront}>
                                                <video className={style.video} poster="../../../metaverse/images/video-thumbnail1.png" autoPlay muted loop src="../../../metaverse/images/workVid1.mp4" type="video/mov"></video>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className={style.ImageBack}>
                                                <Image quality={75} src={WorkOne} className={`${style.workImage} img-fluid`} />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg={6} className={`${style.bb1} ${style.imageHeight} position-relative pb-5 h-100`}>
                                <div className='p-sm-4'>
                                    <div className={`${style.workContent}`}>
                                        <h4 className={`f35 font-bold text-white`}>Build a Realistic Fashion Store</h4>
                                        <p className={`f18 ${style.contentPara}`}>
                                            Fashion has entered the metaverse trend by launching
                                            metaverse fashion week,metaverse fashion stores, and
                                            NFTs. Metaverse is empowering fashion brands to
                                            market their products to a global audience and multiply
                                            their revenue.
                                        </p>
                                        <div className={`${styles.secBtns} ${styles.secBtns2} mb-0`}>
                                            <MetaBtn number="1-844-400-0025"
                                                discuss="Hire Blockchain Developer" />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <span className={style.metaDotTwo}>
                                <Image quality={75} src={MetaDot} />
                            </span>
                            <Col lg={6} className={`${style.br1} ${style.imageHeight} position-relative pb-5 h-100`}>
                                <div className='p-sm-4'>
                                    <div className={`${style.workContent} ps-0`}>
                                        <h4 className={`f35 font-bold text-white`}>Build a Realistic Fashion Store</h4>
                                        <p className={`f18 ${style.contentPara}`}>
                                            Fashion has entered the metaverse trend by launching
                                            metaverse fashion week,metaverse fashion stores, and
                                            NFTs. Metaverse is empowering fashion brands to
                                            market their products to a global audience and multiply
                                            their revenue.
                                        </p>
                                        <div className={`${styles.secBtns} ${styles.secBtns2} mb-0`}>
                                            <MetaBtn number="1-844-400-0025"
                                                discuss="Hire Blockchain Developer" />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className={`${style.contentHeight} position-relative pb-5 h-100 d-none d-sm-block`}>
                                <div className={`${style.ml} p-4 pb-5`}> 
                                    <Row>
                                        <Col lg={12}>
                                            <div className={style.videoFront}>
                                                <video className={style.video} poster="../../../metaverse/images/video-thumbnail2.png" autoPlay muted loop src="../../../metaverse/images/workVid2.mp4" type="video/mov"></video>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className={style.ImageBack}>
                                                <Image quality={75} src={WorkOne} className={`${style.workImage} img-fluid`} />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}
export default MetaWork