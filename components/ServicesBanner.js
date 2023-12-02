import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/ServicesBanner.module.css";


const ServiceBanner = (props) => {

  return (
    <>
      <section className={`${styles.newHomeBg} ${styles[props.assignClass]}`}>
        <Container>
          <Row>
            <Col xl={12}>
              <p className={`${styles.just} font30 font-bold text-center mb-0`}>
                {props.subtitle}
              </p>
              <h1
                className={`${styles.develop} text-center font50 font-bold mb-2`}
              >
                {props.title}
              </h1>
              <p className={`font15 white center mb-3 ${styles.bannerText}`}>{props.text}</p>
              <div className={styles.pont}>
                <Link className={styles.about} href="tel:+18335006007">
                  LET'S CONNECT
                </Link>
              </div>
              <div className={`${styles.banImg}`}>
                <Image
                  quality={75}
                  alt="BitsWits"
                  src={props.BannerImage}
                  className={`img-fluid`}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ServiceBanner;
