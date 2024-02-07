import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/Tale.module.css";
import scr1 from '../public/dubailp/icons/1.jpg';
import scr2 from '../public/dubailp/icons/2.png';
import scr3 from '../public/dubailp/icons/3.png';
import scr4 from '../public/dubailp/icons/4.png';
import scr5 from '../public/dubailp/icons/5.png';
import scr6 from '../public/dubailp/icons/6.png';

const Tale = (props) => {

 

    return (
        <>
            <section className={`${styles[props.tale]}`}>
                <Container>
                    <Row>
                        <Col xl={12}>
                        <h2 className="white font50 f-700 center mb-3">A Tale of Partnershipping with Top <br></br> Brands in Dubai </h2>
                        <p className="font16 font-normal white text-center mb-5">Credibility and trustworthiness supervene when you partner with some of the top brands in the UAE, and that’s precisely what Bitswits did. We partnered with businesses, conveyed our message and belief in delivering digital products on the promise of quality and had a fantastic portfolio of successfully delivered mobile applications and other digital products.</p>
                        </Col>
                    </Row>
                    <Row>
                    <Col xl={4} className={styles.post}>
                    <div> <Image className="img-fluid" src={scr1} /> </div>
                    </Col>
                    <Col xl={4} className={styles.post}>
                    <div> <Image className="img-fluid" src={scr2} /></div>
                    </Col>
                    <Col xl={4}  className={styles.post}>
                    <div> <Image className="img-fluid" src={scr3} /></div>
                    </Col>
                     
                       
                    </Row>
                    <Row>
                    <Col xl={4} className={styles.post}>
                    <div> <Image className="img-fluid" src={scr4} /> </div>
                    </Col>
                    <Col xl={4} className={styles.post}>
                    <div> <Image className="img-fluid" src={scr5} /></div>
                        </Col>
                        <Col xl={4} className={styles.post}>
                        <div> <Image className="img-fluid" src={scr6} /></div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Tale