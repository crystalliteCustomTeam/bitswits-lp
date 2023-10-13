import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/IndusStyle.module.css'


const RoomExperience = (props) => {
    return (
        <>
            <section className={styles.indusblk}>
                <Container>
                    <Row className='aboutfold'>

                        <Col lg={12}>
                            {props.title &&
                                <h3 className='font40 fontf font-bold mt-1 black text-center'>{props.title} </h3>
                            }
                        </Col>



                    </Row>
                    <div>{props.IndustriesInt}</div>
                </Container>
            </section>
        </>
    )
}

export default RoomExperience