import React from 'react'
import Image from 'next/image'
import styles from '@/styles/CaseWants.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//
import tick from '../public/images/case-monkey/tick.png'


const CaseWants = (props) => {
    return (
        <>
            <section className={`${styles.wants} ${styles[props.wantsClass]}`}>
                <Container>
                    <Row>
                        <Col lg={7}>
                            <div>
                                <h3>{props.title}</h3>
                                <p>
                                    <Image src={tick} width={20} alt="bitswits" className={`img-fluid`} />
                                    <span>{props.text1}</span>
                                </p>
                                <p>
                                    <Image src={tick} width={20} alt="bitswits" className={`img-fluid`} />
                                    <span>{props.text2}</span>
                                </p>
                                <p>
                                    <Image src={tick} width={20} alt="bitswits" className={`img-fluid`} />
                                    <span>{props.text3}</span>
                                </p>
                                <p>
                                    <Image src={tick} width={20} alt="bitswits" className={`img-fluid`} />
                                    <span>{props.text4}</span>
                                </p>
                                <p>
                                    <Image src={tick} width={20} alt="bitswits" className={`img-fluid`} />
                                    <span>{props.text5}</span>
                                </p>
                                <p>
                                    <Image src={tick} width={20} alt="bitswits" className={`img-fluid`} />
                                    <span>{props.text6}</span>
                                </p>
                                <p>
                                    <Image src={tick} width={20} alt="bitswits" className={`img-fluid`} />
                                    <span>{props.text7}</span>
                                </p>
                                <p>
                                    <Image src={tick} width={20} alt="bitswits" className={`img-fluid`} />
                                    <span>{props.text8}</span>
                                </p>
                            </div>
                            <div className='my-5 py-2'>
                                <h3>{props.title2}</h3>
                                <p>
                                    <Image src={tick} width={20} alt="bitswits" className={`img-fluid`} />
                                    <span>{props.text9}</span>
                                </p>
                                <p>
                                    <Image src={tick} width={20} alt="bitswits" className={`img-fluid`} />
                                    <span>{props.text10}</span>
                                </p>
                                <p>
                                    <Image src={tick} width={20} alt="bitswits" className={`img-fluid`} />
                                    <span>{props.text11}</span>
                                </p>
                                <p>
                                    <Image src={tick} width={20} alt="bitswits" className={`img-fluid`} />
                                    <span>{props.text12}</span>
                                </p>
                                <p>
                                    <Image src={tick} width={20} alt="bitswits" className={`img-fluid`} />
                                    <span>{props.text13}</span>
                                </p>
                            </div>
                            <div>
                                <h3>{props.title3}</h3>
                                <p>
                                    <Image src={tick} width={20} alt="bitswits" className={`img-fluid`} />
                                    <span>{props.text14}</span>
                                </p>
                                <p>
                                    <Image src={tick} width={20} alt="bitswits" className={`img-fluid`} />
                                    <span>{props.text15}</span>
                                </p>
                                <p>
                                    <Image src={tick} width={20} alt="bitswits" className={`img-fluid`} />
                                    <span>{props.text16}</span>
                                </p>
                                <p>
                                    <Image src={tick} width={20} alt="bitswits" className={`img-fluid`} />
                                    <span>{props.text17}</span>
                                </p>
                                <p>
                                    <Image src={tick} width={20} alt="bitswits" className={`img-fluid`} />
                                    <span>{props.text18}</span>
                                </p>
                                <p>
                                    <Image src={tick} width={20} alt="bitswits" className={`img-fluid`} />
                                    <span>{props.text19}</span>
                                </p>
                                <p>
                                    <Image src={tick} width={20} alt="bitswits" className={`img-fluid`} />
                                    <span>{props.text20}</span>
                                </p>
                                <p>
                                    <Image src={tick} width={20} alt="bitswits" className={`img-fluid`} />
                                    <span>{props.text21}</span>
                                </p>
                            </div>
                            <p className='mt-5'>{props.para}</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CaseWants
