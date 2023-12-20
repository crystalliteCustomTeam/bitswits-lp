import React from "react";
import styles from "@/styles/LpForm.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

const BICards = (props) => {
  return (
    <>
      <section className={`${styles.datapost} ${styles.biCard}`}>
        <Container>
          <Row className="gx-3 gy-3">
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

export default BICards;
