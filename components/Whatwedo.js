import React from 'react'
import styles from '@/styles/Whatwedo.module.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image'
import icon1 from '../public/images/howweare/whatwedo.png'
import icon2 from '../public/images/howweare/arrow.png'
import Link from 'next/link'



const Whatwedo = (props) => {
    return (
        <>

            <section className={styles.howwweare}>
                <Container fluid>
                    <Row>
                      
                        <Col xl={3}>
                            <div className={styles.bump}>
                                <h3 className={styles.who}> {props.subtitle} </h3>
                                <h2 className={styles.greater}> {props.title} </h2>
                                <p> {props.para} </p>

                                <Link href='#'> {props.linkdem}  <Image quality={75} src={icon2} className={styles.imgfluid} /> </Link>

                            </div>

                        </Col>

                        <Col xl={9} className='p-0'>
                            <Image quality={75} src={props.icon12} className='img-fluid w-100 h-auto' />
                            
                        </Col>

                    </Row>
                </Container>
            </section>



        </>
    )
}

export default Whatwedo