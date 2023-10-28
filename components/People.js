import React from 'react'
import styles from '@/styles/People.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'

//images
import banImg1 from '../public/images/people/people.png'
import star from '../public/images/people/star.png'
import star1 from '../public/images/people/1.png'
import star2 from '../public/images/people/2.png'


const People = (props) => {





    return (
        <>

            <section className={styles[props.People]}>
                <Container>
                    <div className={styles.flot}>
                        <div className={styles.comple}>
                            <Image src={banImg1} className='img-fluid' />
                            <div className={styles.comple1}>
                                <Image src={star} className='img-fluid' />
                                <p className='mb-0'>4.8 out of 5 (review rating) <br></br>
                                    Over 1,200+ reviews</p>
                            </div>
                        </div>
                        <div className={styles.comple3}>
                            <Image src={star1} className='img-fluid' />
                            <div className={styles.comple5}>
                                <p className='mb-0'>HIGH PERFORMER</p>
                                <p className='mb-0'>Top App Development Company</p>
                            </div>
                        </div>
                        <div className={styles.comple3}>
                            <Image src={star2} className='img-fluid' />
                            <div className={styles.comple5}>
                                <p className='mb-0'>US TOP 3 BEST RATED</p>
                                <p className='mb-0'>App & Software Development Company</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>





        </>
    )
}

export default People