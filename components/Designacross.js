import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Findfood.module.css'
import Image from 'next/image'


const Designacross = (props) => {
    return (
        <>

         
                <Container>
                    <Row className={` ${styles.almost} gy-4`}>
                        <Col md={5}>
                            <Image quality={75} src={props.imgland} width="717" height="589" alt="bitswits" className="img-fluid"  />
                        </Col>
                        <Col md={6}>
                            <h4 className='font16 black fontf font-bold'> {props.sub} </h4>
                            <h2 className='font40 black fontf font-bold'> {props.title} </h2>
                            <p className='font14 black fontf font-medium'> {props.para} </p>
                        </Col>
                    </Row>
                </Container>
         


        </>
    )
}

export default Designacross