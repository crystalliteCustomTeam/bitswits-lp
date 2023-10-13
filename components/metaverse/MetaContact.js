import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import style from '@/styles/Contact.module.css';
import Image from 'next/image';
import Link from 'next/link';
import posters from '@/public/blockchain/images/poster.png';
import phone from '@/public/blockchain/images/phone.png';
import Form from '@/components/blockchain//Form';
import barcode1 from '@/public/blockchain/images/barcode1.png'

const MetaContact = (props) => {
    return (
        <>
            <div className={`${style[props.whychooseclass]} secPad`}>
                <Container>
                    <Row className={`${style.middle} pt-5 justify-content-center align-items-center`}>
                        <Col lg={6}>
                            <h3 className='fw700 f50 text-white'>Have A <span className='grdiant'>Vision</span>?</h3>
                            <p className='text-white mb-4'>Share Your Idea Now & Step-Ahead With Innovative Blockchain Solutions.</p>
                            <Form formshome='formclass' />
                        </Col>
                        <Col lg={6} className={style.barcode}>
                           <Image quality={75} src={barcode1} alt="Blockchain" className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default MetaContact