import React from 'react'
import styles from "@/styles/NewHomeBanner.module.css";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
//
import BannerImage from "@/public/newHomePageImages/banner_image.png"

const NewHomeBanner = () => {

    return (
        <>

            <section className={styles.newHomeBg}>

                <Container>

                    <Row>
                        <Col xl={12}>
                            <p className={`${styles.just} text-center f-20 mb-0`}>Top Mobile App Development Company</p>
                            <h3 className={`${styles.develop} text-center f-60 font-bold`}>Empowering Brands with Big Dreams and Innovative Visions</h3>

                            <div className={styles.pont}>
                                <Link className={styles.book} href="#">Book A Call</Link>
                                <Link className={styles.about} href="#">Live Chat</Link>
                            </div>

                            <div className='mt-5 text-center'>
                                <Image quality={75} src={BannerImage} className={styles.secImage} alt='Bitswits' loading="eager" unoptimized={true}/>
                            </div>

                        </Col>
                    </Row>

                </Container>
            </section>


        </>
    )
}

export default NewHomeBanner