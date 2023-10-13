import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import style from '@/styles/metaverse/metaDevelopment.module.css';
import styles from '@/styles/metaverse/metaverse.module.css';
import Image from 'next/image';
import poster from '@/public/metaverse/images/development-1.png'
import MetaBtn from './MetaBtn';

const MetaDevelopment = (props) => {
    return (
        <>
            <section className={style.developmentSec}>
                <Container>
                    <Row className='justify-content-center align-items-center'>
                        <Col lg={9} className='pt-4 pb-4'>
                            <h2 className="text-white text-center mb-2">{props.metaHeading}</h2>
                            <p className='text-white text-center'>{props.metaPara}</p>

                        </Col>
                        <Col lg={12}>
                            <Image quality={75} src={poster} className={`img-fluid ${style.bussinessImage}`} />
                            <div className={`${styles.secBtns} ${styles.development}`}>
                                <MetaBtn></MetaBtn>
                            </div>
                        </Col>  
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default MetaDevelopment