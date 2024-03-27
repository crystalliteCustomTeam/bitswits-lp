import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/Globalmap.module.css";
//images

import map from "../public/newdubai/map.webp";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const Globalmap = (props) => {

  return (
    <>
      <section className={`${styles[props.transform]} ${props.marginTop}`}>
        <Container fluid>
          <Row className="align-items-center gy-lg-5 gy-4">
            <Col lg={6} className="p-0">

<div className={styles.newtimg}>
<h3>Meet Our Experts <br></br>
One-on-One</h3>
<h4>Office #101, 32 Street, Al Mujarrah, Sharjah</h4>
<Link className={styles.timr} href="javascript:$zopim.livechat.window.show();">Let's Chat</Link>
<p className="black">Call us at <Link className={styles.num} href="tel:971551659060">+971 551 659060</Link> </p>
</div>
             
            </Col>
            <Col lg={6} className="p-0">
              <Image src={map} className={`${styles.post} img-fluid`} />
            </Col>

          
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Globalmap;
