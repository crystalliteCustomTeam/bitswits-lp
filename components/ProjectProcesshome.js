import React from 'react'
import styles from '@/styles/ProjectProcesshome.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'

//images
import banImg1 from '../public/images/projectprocess/process.png'


const ProjectProcesshome = (props) => {





    return (
        <>

            <section className={styles[props.processclass]}>
                <Container>
                    <Row>
                        <Col>
                            <h3 className='black font20 f-500'>Let's work together</h3>
                            <h2 className='black f-50 f-700'>Project Process</h2>
                            <p className='black font16 f-400'>Our work speaks for us. See how we create powerful, customer-centric <br></br> mobile applications for various industry verticals to help them achieve <br></br> their business objectives.</p>
                            <Image src={banImg1} className='img-fluid mt-5' />
                        </Col>
                    </Row>
                </Container>
            </section>





        </>
    )
}

export default ProjectProcesshome