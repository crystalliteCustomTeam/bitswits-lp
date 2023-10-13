import React from 'react'
import styles from "@/styles/Bulletproofgame.module.css";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

import icon11 from '../public/newHomePageImages/lady.png'

const Bulletproofgame = () => {
    return (

        <>
<div className={styles.creative2}>


<section className={styles.creative}>

<Container>

    <Row className={styles.game}>
        <Col xl={10}>
            <h2>Bullet-Proof Game <br></br>
                Development Action Plan</h2>
            <h3>Custom Development Roadmap For Games <br></br>
                That Brings Fame</h3>

        </Col>


    </Row>

    <Row className={styles.boy}>
        <Col xl={6}>

            <div className={styles.dscool}>
                <div>
                    <h3>Ideation</h3>
                    <p>We get our creative juices flowing by brainstorming ideas and concepts for your game. We work together to figure out what kind of game you want to create, the story behind it, and how you want players to interact with it.</p>
                </div>
                <div>
                    <h3>Testing</h3>
                    <p>Before launching your game, we ensure it works properly by testing it thoroughly. This includes running the game on different platforms and devices to ensure everything runs smoothly.</p>
                </div>
            </div>


            <div className={` ${styles.dscool} mt-3`}>
                <div>
                    <h3>Design</h3>
                    <p>We create a blueprint for your new game. This follows through designing all elements, from characters and levels to user interface features and environment settings. We ponder how each part fits together to work well in harmony.</p>
                </div>
                <div>
                    <h3>Finalization</h3>
                    <p>Once we have tested your game, it's time to finalize by adding any last-minute features or tweaks we think are necessary. Also, now's the perfect time to start marketing your game! Let's get people excited about it before launch day, so they can't wait to play.</p>
                </div>
            </div>

            <div className={` ${styles.dscool} mt-3`}>
                <div>
                    <h3>Development</h3>
                    <p>The development phase is where the real magic happens. Our experienced developers will bring your project to life by coding it and creating the graphics that you have designed.</p>
                </div>
                <div>
                    <h3>Launch</h3>
                    <p>Now that your game is finished and tested, it's time to let the world know about it. Finally, launch your game and watch as people flock to play it!</p>
                </div>
            </div>



        </Col>
        <Col xl={6}>


            <div className={styles.tested}>
                <Image quality={75} src={icon11} />
            </div>


        </Col>
    </Row>
</Container>

</section>

</div>
           



        </>


    )
}

export default Bulletproofgame