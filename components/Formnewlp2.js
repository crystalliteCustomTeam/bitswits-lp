import React from 'react'
import styles from "@/styles/Formnewlp2.module.css";
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import bestglobal1 from '../public/images/bestglobal/1.png'


const Formnewlp = () => {




    return (
        <>
            <section className={styles.team}>
                <Container>
                    <Row className='align-items-center'>
                        <Col xl={6}>
                            <div className={styles.star}>
                                <h3 className='font20 white fw800'>30 Minutes Strategy Session</h3>
                                <h2 className='font40 white fw600'> Get Your<span className='fw800 f45'> Free 30 Minute </span>  <br></br>  <span className='fw600'>Strategy Session With An <br></br>
                                    Experienced </span>  <span className='fw800 f45'> App Experts </span> <br></br> <span className='fw600'>Valued</span> At  <span className='fw800 f45'> $300 </span></h2>
                            </div>

                        </Col>
                        <Col xl={6}>
                            <form className={styles.your}>
                                <h3 className='font25 white fw700'>Have a Project To Discuss?</h3>
                                <h2 className='f-60 mb-4 fw700'>We're Ready!</h2>
                                <input type='text' name='first' required className='form-control' placeholder="First Name"></input>
                                <input type='text' name='first' required className='form-control  mt-3' placeholder="Last Name"></input>
                                <input type='number' name='phone' required className='form-control mt-3' placeholder="Enter your Phone No"></input>
                                <input type='email' name='email' required className='form-control mt-3' placeholder="Enter your Email"></input>
                                <textarea  placeholder='Comment' className='form-control mt-3'></textarea>
                                <input type='submit' name='submit' className={styles.value} placeholder="Submit"></input>
                                <p className='font12 white fw300 center mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            </form>

                        </Col>

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Formnewlp