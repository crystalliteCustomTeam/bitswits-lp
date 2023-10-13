import React from 'react'
import styles from '@/styles/Creativeopportunities.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'


const Creativeopportunities = (props) => {
    return (
        <>

            <section className={styles.opp}>
                <Container>
                    <Row className={`${styles.bount} pb-5`} >
                        <Col md={12}>
                            <h3 className='t-center f-18 f-montserrat f-700 black'> {props.subtitle}</h3>
                            <h2 className='f-50 f-700 black t-center'> {props.title} </h2>
{props.text &&
                            <p className='f-16 f-500 black t-center'>{props.text}  </p>

}
                        </Col>
                    </Row>

                    <Row>
                        <Col md={11}>
                            <div className={styles.appListInner}>
                                <div className={styles.appcardmain}>
                                    <div className={styles.appcardleft}>
                                        <div className={styles.appCard}>
                                            <div className={styles.apptxt}>
                                                <h3> {props.tit1} </h3>
                                                <p>
                                                    {props.text1}
                                                </p>

                                                <Link href="#" className={styles.yellowBtn}>
                                                    <span> {props.btn1} </span>
                                                </Link>

                                            </div>
                                        </div>
                                        <div className={styles.appCard}>
                                            <div className={styles.apptxt}>
                                                <h3>
                                                    {props.tit2}
                                                </h3>
                                                <p>
                                                    {props.text2}
                                                </p>
                                                <Link href="#" className={styles.yellowBtn}>
                                                    <span> {props.btn2}</span>
                                                </Link>


                                            </div>
                                        </div>
                                        <div className={styles.appCard}>
                                            <div className={styles.apptxt}>
                                                <h3>
                                                    {props.tit3}
                                                </h3>
                                                <p>
                                                    {props.text3}
                                                </p>

                                                <Link href="#" className={styles.yellowBtn}>
                                                    <span> {props.btn3} </span>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.appcardcenter}>
                                        <div className={styles.mobielscreen}>
                                            <Image quality={75} src={props.eng}
                                                className="img-fluid mx-auto" alt="bitswits" />
                                        </div>
                                    </div>
                                    <div className={styles.appcardright}>
                                        <div className={styles.appcard}>
                                            <div className={styles.apptxt}>
                                                <h3>
                                                    {props.tit4}
                                                </h3>
                                                <p>
                                                    {props.text4}
                                                </p>
                                                <Link href="#" className={styles.yellowBtn}>
                                                    <span>{props.btn4}</span>
                                                </Link>


                                            </div>
                                        </div>
                                        <div className={styles.appCard}>
                                            <div className={styles.apptxt}>
                                                <h3>
                                                    {props.tit5}
                                                </h3>
                                                <p>
                                                    {props.text5}
                                                </p>
                                                <Link href="#" className={styles.yellowBtn}>
                                                    <span>{props.btn5}</span>
                                                </Link>


                                            </div>
                                        </div>
                                        <div className={styles.appCard}>
                                            <div className={styles.apptxt}>
                                                <h3> {props.tit6} </h3>
                                                <p>
                                                    {props.text6}
                                                </p>
                                                <Link href="#" className={styles.yellowBtn}>
                                                    <span>{props.btn6}</span>
                                                </Link>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


        </>
    )
}

export default Creativeopportunities