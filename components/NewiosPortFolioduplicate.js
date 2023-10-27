import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/NewiosPortFolio.module.css";
import { Container, Row, Col } from 'react-bootstrap'
//
import folio1 from "@/public/newMobilePageImages/portfolio/folio1.png"
import folio2 from "@/public/newMobilePageImages/portfolio/folio2.png"
import folio3 from "@/public/newMobilePageImages/portfolio/folio3.png"
import folio4 from "@/public/newMobilePageImages/portfolio/folio4.png"
import folio5 from "@/public/newMobilePageImages/portfolio/folio5.png"
import folio6 from "@/public/newMobilePageImages/portfolio/folio6.png"



const NewiosPortFolio = () => {



    return (
        <>

            <section className={styles.newHomeBg}>

                <Container>

                    <Row className='g-3 newfinder'>
                        <Col lg={12}>
                            <h1 className='text-white f-55 font-bold text-center pb-5'>
                                Showcasing Our <span className='grdiant'>Creative Vision</span>
                            </h1>
                        </Col>
                        <Col lg={4}>
                           
                            <div className={`${styles.poliBox} ${styles.poliBox3}`}>
                                <Image quality={75} src={folio3} alt='BitsWits' className={`img-fluid`} />
                                <div className={styles.polioTxt}>
                                    <span className='font25 font-bold white mb-2'>Bliss Travel App</span>
                                    <Link href="/travel-app-development-case-study" className={styles.sucssBtn}>View case study</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={`${styles.poliBox} ${styles.poliBox2}`}>
                                <Image quality={75} src={folio2} alt='BitsWits' className={`img-fluid`} />
                                <div className={styles.polioTxt}>
                                <span className='font25 font-bold white mb-2'>Crave Courier App</span>
                                    <Link href="/food-delivery-app-development-case-study" className={styles.sucssBtn}>View case study</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                        <div className={`${styles.poliBox} ${styles.poliBox1}`}>
                                <Image quality={75} src={folio1} alt='BitsWits' className={`img-fluid`} />
                                <div className={styles.polioTxt}>
                                    <span className='font25 font-bold white mb-2'>Germ Guard App</span>
                                    <Link href="/clothing-marketplace-app-development-case-study" className={styles.sucssBtn}>View case study</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={`${styles.poliBox} ${styles.poliBox4}`}>
                                <Image quality={75} src={folio4} alt='BitsWits' className={`img-fluid`} />
                                <div className={styles.polioTxt}>
                                    <span className='font25 font-bold white mb-2'>Soul Sponsord App</span>
                                    <Link href="/marketing-partnership-app-development-case-study" className={styles.sucssBtn}>View case study</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={`${styles.poliBox} ${styles.poliBox5}`}>
                                <Image quality={75} src={folio5} alt='BitsWits' className={`img-fluid`} />
                                <div className={styles.polioTxt}>
                                    <span className='font25 font-bold white mb-2'>Ezride App</span>
                                    <Link href="/ride-app-development-case-study" className={styles.sucssBtn}>View case study</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={`${styles.poliBox} ${styles.poliBox6}`}>
                                <Image quality={75} src={folio6} alt='BitsWits' className={`img-fluid`} />
                                <div className={styles.polioTxt}>
                                    <span className='font25 font-bold white mb-2'>PRO Health App</span>
                                    <Link href="/healthcare-app-development-case-study" className={styles.sucssBtn}>View case study</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                           
                           <div className={`${styles.poliBox} ${styles.poliBox3}`}>
                               <Image quality={75} src={folio3} alt='BitsWits' className={`img-fluid`} />
                               <div className={styles.polioTxt}>
                                   <span className='font25 font-bold white mb-2'>Scribe App</span>
                                   <Link href="/social-app-development-case-study" className={styles.sucssBtn}>View case study</Link>
                               </div>
                           </div>
                       </Col>
                       <Col lg={4}>
                           <div className={`${styles.poliBox} ${styles.poliBox2}`}>
                               <Image quality={75} src={folio2} alt='BitsWits' className={`img-fluid`} />
                               <div className={styles.polioTxt}>
                                   <span className='font25 font-bold white mb-2'>Grease App</span>
                                   <Link href="/automobile-repair-app-development-case-study" className={styles.sucssBtn}>View case study</Link>
                               </div>
                           </div>
                       </Col>
                       <Col lg={4}>
                       <div className={`${styles.poliBox} ${styles.poliBox1}`}>
                               <Image quality={75} src={folio1} alt='BitsWits' className={`img-fluid`} />
                               <div className={styles.polioTxt}>
                                   <span className='font25 font-bold white mb-2'>Crave App</span>
                                   <Link href="/food-delivery-app-development" className={styles.sucssBtn}>View case study</Link>
                               </div>
                           </div>
                       </Col>
                       <Col lg={4}>
                           <div className={`${styles.poliBox} ${styles.poliBox4}`}>
                               <Image quality={75} src={folio4} alt='BitsWits' className={`img-fluid`} />
                               <div className={styles.polioTxt}>
                                   <span className='font25 font-bold white mb-2'>Fitnow App</span>
                                   <Link href="/fitness-app-development-case-study" className={styles.sucssBtn}>View case study</Link>
                               </div>
                           </div>
                       </Col>
                       <Col lg={4}>
                           <div className={`${styles.poliBox} ${styles.poliBox5}`}>
                               <Image quality={75} src={folio5} alt='BitsWits' className={`img-fluid`} />
                               <div className={styles.polioTxt}>
                                   <span className='font25 font-bold white mb-2'>Ready App</span>
                                   <Link href="/hiring-app-development-case-study" className={styles.sucssBtn}>View case study</Link>
                               </div>
                           </div>
                       </Col>
                       <Col lg={4}>
                           <div className={`${styles.poliBox} ${styles.poliBox6}`}>
                               <Image quality={75} src={folio6} alt='BitsWits' className={`img-fluid`} />
                               <div className={styles.polioTxt}>
                                   <span className='font25 font-bold white mb-2'>Home Connect App</span>
                                   <Link href="/handyman-on-demand-app-development-case-study" className={styles.sucssBtn}>View case study</Link>
                               </div>
                           </div>
                       </Col>
                       <Col lg={4}>
                           <div className={`${styles.poliBox} ${styles.poliBox5}`}>
                               <Image quality={75} src={folio5} alt='BitsWits' className={`img-fluid`} />
                               <div className={styles.polioTxt}>
                                   <span className='font25 font-bold white mb-2'>Game App</span>
                                   <Link href="/beats-app-development" className={styles.sucssBtn}>View case study</Link>
                               </div>
                           </div>
                       </Col>
                       <Col lg={4}>
                           <div className={`${styles.poliBox} ${styles.poliBox6}`}>
                               <Image quality={75} src={folio6} alt='BitsWits' className={`img-fluid`} />
                               <div className={styles.polioTxt}>
                                   <span className='font25 font-bold white mb-2'>Real Estate App</span>
                                   <Link href="/real-estate-app-development-case-study" className={styles.sucssBtn}>View case study</Link>
                               </div>
                           </div>
                       </Col>
                    </Row>

                </Container>

            </section>


        </>
    )
}

export default NewiosPortFolio