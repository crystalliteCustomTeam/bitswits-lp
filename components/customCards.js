import React from "react";
import styles from "@/styles/LpForm.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

const customCards = (props) => {
  return (
    <>
      <section className={styles.datapost}>
        <Container className={styles.appios}>
          <Row className="gx-3 gy-3">
            <Col sm={12}>
              <p className="font_30 fontsfheavy newfycolr text-center mb-0">{props.subtitle}</p>
              <h2 className="newchoose letterspace_1 font-bold white text-center">{props.title}</h2>
              <p className="font_17 white fontsfregular pt-2 pb-2 text-center">{props.desc}</p>
            </Col>

            {props.data.map((item, index) => (
              <Col lg={4}>
                <div
                  className={`${styles.deve} ${styles[props.flexRow]}`}
                  key={index}
                >
                  <div>
                    <h4 className="fontgilroybold white font_15">
                      {item.title}
                    </h4>
                    <p className="font_15 white fontsfregular linehight_2 mb-0">
                      {item.text}
                    </p>
                  </div>
                  <Image src={item.img2} className="img-fluid" alt="bitswits" />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default customCards;
