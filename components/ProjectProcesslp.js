import React from 'react'
import styles from '@/styles/ProjectProcess.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'

//images
import banImg1 from '../public/images/projectprocess/12212.png'


const ProjectProcess = (props) => {





    return (
        <>

            <section className={styles[props.processclass]}>
                <Container>
                    <Row>
                        <Col>
                            <h3 className='white font30 f-500 center'>Project Process</h3>
                            <h2 className='white f-60 f-700 center'>Explore Our App Development Journey</h2>
                            <p className='white font16 f-400 center'>Our Work Speaks For Us. See How We Create Powerful, Customer-Centric Mobile Applications <br></br> For Various Industry Verticals To Help Them Achieve Their Business Objectives.</p>
                            <Image src={banImg1} className='img-fluid mt-5' />
                        </Col>
                    </Row>
                </Container>
            </section>





        </>
    )
}

export default ProjectProcess