import React from 'react'
import styles from "@/styles/bannerlp.module.css";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import BannerImage from "@/public/images/bannermlp/bannermalp.png"




const AndriodBanner = (props) => {



    return (
        <>

            <section className={styles[props.newHomeBgprops]} >
          
                <Container>

                    <Row>
                        <Col xl={12}>

                            {props.title}

                            {props.para}


                            {props.btn2}

                            <div className='mt-5 center'>
                                <Image quality={95} alt='BitsWits' src={props.imgnew} className={`img-fluid`} />
                            </div>

                        </Col>
                    </Row>
                </Container>


            </section>
        </>
    )
}

export default AndriodBanner