import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import style from '@/styles/metaverse/metabussiness.module.css';
import styles from '@/styles/metaverse/metaverse.module.css';
import Image from 'next/image';
import poster from '@/public/metaverse/images/bussiness-1.png'
import MetaBtn from './MetaBtn';

const MetaBussiness = (props) => {
    return (
        <>
            <section className={style.MetaBussiness}>
                <Container>
                    <Row className='justify-content-center align-items-center'>
                        <Col lg={10} className='pt-4 pb-4'>
                            <h2 className="text-white text-center mb-2">{props.nextTtitle1}</h2>
                            <p className='text-white text-center'>{props.nextPara}</p>
                            <div className={`${styles.secBtns}`}>
                                <MetaBtn></MetaBtn>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <Image quality={75} src={poster} className={`img-fluid ${style.bussinessImage}`}/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default MetaBussiness