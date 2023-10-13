import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import style from '@/styles/metaverse/metacreate.module.css';
import styles from '@/styles/metaverse/metaverse.module.css';
import Image from 'next/image';
import Link from 'next/link';
import poster from '@/public/blockchain/images/cube.png'
import MetaBtn from './MetaBtn';

const MetaCreate = (props) => {
    return (
        <>
            <section className={style.metaCreate}>
                <Container>
                    <Row className=''>
                        <Col lg={8}>
                            <div className={`${style.content} pt-5 pb-4`}>
                                <h2 className="fw300 f30 text-white mb-2">{props.createSub}</h2>
                                <p className='font16 text-white fw300'>{props.createPara}</p>
                                <div className={`${styles.secBtns} ${styles.secBtns2} mb-0`}>
                                    <MetaBtn number="1-844-400-0025"
                                        discuss="Hire Blockchain Developer" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>

                            {props.poster ?
                                <div className={style.videoBg}>
                                    <video className={`${style.bgVideo}`} width={450} autoPlay muted loop src="../../../metaverse/images/metaCreate.mp4" type="video/mp4"></video>
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
export default MetaCreate