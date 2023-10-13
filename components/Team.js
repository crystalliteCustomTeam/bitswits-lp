import React from 'react'
import styles from '@/styles/Team.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import { useState,useEffect  } from 'react'

const Team = () => {







    return (
        <>


<section className={styles.vision}>

<Container>
    <Row className={styles.engineering}>
        <Col lg={7} >
    
            <h3 className='mb-5'>OSM TEAM </h3>
            <h2>OSM is a pack of creative, analytical, and organized individuals who work together to find the best solution for their clients.</h2>
        </Col>
        <Col lg={1} >

        </Col>
        <Col lg={4} >

            <p className='font16 white'>  We are not ashamed to admit that combining design, development and marketing often takes every ounce of strength, energy, and creativity. </p>

            <p className='font16 white p-0 m-0'> Connecting different worlds has never been an easy job. That’s why we became OSM, we always plan 3 steps ahead.   </p>



            <div className='mt-5'>
            <Link className={styles.btnslack} href="#">
            FIND OUT MORE
            </Link>

            </div>

        </Col>
    </Row>

</Container>





</section>





        </>
    )
}

export default Team