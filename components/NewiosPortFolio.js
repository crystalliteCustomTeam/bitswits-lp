import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/NewiosPortFolio.module.css";
import { Container, Row, Col } from 'react-bootstrap';

import folio1 from "@/public/newMobilePageImages/portfolio/folio1.png";
import folio2 from "@/public/newMobilePageImages/portfolio/folio2.png";
import folio3 from "@/public/newMobilePageImages/portfolio/folio3.png";
import folio4 from "@/public/newMobilePageImages/portfolio/folio4.png";
import folio5 from "@/public/newMobilePageImages/portfolio/folio5.png";
import folio6 from "@/public/newMobilePageImages/portfolio/folio6.png";
import folio7 from "@/public/newMobilePageImages/portfolio/folio7.png";
import folio8 from "@/public/newMobilePageImages/portfolio/folio8.png";
import folio9 from "@/public/newMobilePageImages/portfolio/folio9.png";
import folio10 from "@/public/newMobilePageImages/portfolio/folio10.png";
import folio11 from "@/public/newMobilePageImages/portfolio/folio11.png";
import folio12 from "@/public/newMobilePageImages/portfolio/folio12.png";
import folio13 from "@/public/newMobilePageImages/portfolio/folio13.png";

const NewiosPortFolio = () => {
    const [showAll, setShowAll] = useState(false);

    const portfolioItems = [
        { id: 1, image: folio1, link: '/travel-app-development' },
        { id: 2, image: folio2, link: '/real-estate-app-development-case-study' },
        { id: 3, image: folio3, link: '/bacteria-app-development' },
        { id: 4, image: folio4, link: '/soul-scribe-app-development' },
        { id: 5, image: folio5, link: '/greace-monkey-app-development' },
        { id: 6, image: folio6, link: '/sponsord-app-development' },
        { id: 7, image: folio7, link: '/health-care-app-development' },
        { id: 8, image: folio8, link: '/ride-me-app-development' },
        { id: 9, image: folio9, link: '/fitnow-app-development' },
        { id: 10, image: folio10, link: '/ready-app-development' },
        { id: 11, image: folio11, link: '/food-delivery-app-development-case-study' },
        { id: 12, image: folio12, link: '/handyman-on-demand-app-development-case-study' },
        { id: 13, image: folio13, link: '/beats-app-development' },
    ];

    const visibleItems = showAll ? portfolioItems : portfolioItems.slice(0, 6);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <>
            <section className={styles.newHomeBg}>
                <Container>
                    <Row className="g-3">
                        <Col lg={12}>
                            <h1 className="text-white f-55 font-bold text-center pb-5">
                                Showcasing Our <span className="grdiant">Creative Vision</span>
                            </h1>
                        </Col>
                        {visibleItems.map((item) => (
                            <Col lg={4} key={item.id}>
                                <div className={`${styles.poliBox} ${styles[`poliBox${item.id}`]}`}>
                                    <Image quality={75} src={item.image} alt="BitsWits" className={`img-fluid`} />
                                    <div className={styles.polioTxt}>
                                        <Link href={item.link} className={styles.sucssBtn}>
                                            View case study
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        ))}
                        <Col lg={12}>
                            <div className="d-flex justify-content-center mt-5">
                                <button onClick={toggleShowAll} className={`${styles.sucssBtn} ${styles.sucssBtn2}`}>
                                    {showAll ? "Show Less" : "Show More"}
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default NewiosPortFolio;
