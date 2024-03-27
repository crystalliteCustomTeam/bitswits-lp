import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Sound.module.css";
//
import ban1 from "@/public/newdubai/ban1.png"
import ban2 from "@/public/newdubai/ban2.png"
import ban3 from "@/public/newdubai/ban3.png"


const Sound = () => {




    return (
        <>
<section className={styles.counter}>
    <Container>
     <Row>
        <Col lg={12}>
            <h2 className={styles.match}> <span>Sound</span> Like A Match?</h2>
            <Link href="javascript:$zopim.livechat.window.show();" className={styles.caht}>Let's Chat</Link>
        </Col>
     </Row>

    </Container>
</section>
           
        </>
    )
}

export default Sound