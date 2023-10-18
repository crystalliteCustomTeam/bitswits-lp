import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/NewhomeFaqs.module.css'
import { Container, Row, Col } from 'react-bootstrap'
// import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react'
//images
// import arrow from '../public/images/icons/arrow.webp'
import arrow from '../public/newHomePageImages/pick.png'
import close from '../public/newHomePageImages/close.png'
import open from '../public/newHomePageImages/open.png'

const Game2dFaqs = () => {

  const [faq1show, setfaq1] = useState(false);
  const [faq2show, setfaq2] = useState(false);
  const [faq3show, setfaq3] = useState(false);
  const [faq4show, setfaq4] = useState(false);
  const [faq5show, setfaq5] = useState(false);
  const [faq6show, setfaq6] = useState(false);

  function faq1() {
    setfaq1(!faq1show);
    setfaq2(false);
    setfaq3(false);
    setfaq4(false);
    setfaq5(false);
    setfaq6(false);
  }
  function faq2() {

    setfaq1(false);
    setfaq2(!faq2show);
    setfaq3(false);
    setfaq4(false);
    setfaq5(false);
    setfaq6(false);
  }
  function faq3() {
    setfaq1(false);
    setfaq2(false);
    setfaq3(!faq3show);
    setfaq4(false);
    setfaq5(false);
    setfaq6(false);
  }
  function faq4() {
    setfaq1(false);
    setfaq2(false);
    setfaq3(false);
    setfaq4(!faq4show);
    setfaq5(false);
    setfaq6(false);
  }
  function faq5() {
    setfaq1(false);
    setfaq2(false);
    setfaq3(false);
    setfaq4(false);
    setfaq5(!faq5show);
    setfaq6(false);
  }
  function faq6() {
    setfaq1(false);
    setfaq2(false);
    setfaq3(false);
    setfaq4(false);
    setfaq5(false);
    setfaq6(!faq6show);
  }


  return (
    <>
      <section className={`${styles.faqs} newfaqsgloble`}>
        <Container>
          <Row className={styles.comfort}>
            <Col lg={12}>
              <h2 className="white f-60 f-700">
                FAQs
              </h2>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <div className={`${faq1show ? 'touch' : ''} mb-4 mb-lg-0 mt-5`}>
                <div onClick={faq1} className={styles.heading}>
                  <h3>
                    What is 2D game development?  {faq1show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                  </h3>
                </div>

                <div className={faq1show ? 'd-block' : 'd-none'} >
                  <p>
                    2D game development involves creating interactive games that exist within a two-dimensional space, with gameplay occurring on a flat plane without depth. This type of game typically uses 2D graphics and animations.
                  </p>
                  <div className="mt-2">
                    <Link href="#">
                      Let's Start
                      <Image alt="bitswits" className='img-fluid'
                        src={arrow}


                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div className={`${faq2show ? 'touch' : ''} mb-4 mb-lg-0`}>
                <div onClick={faq2} className={styles.heading}>
                  <h3>
                    What programming languages are commonly used for 2D game development? {faq2show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                  </h3>
                </div>

                <div className={faq2show ? 'd-block' : 'd-none'}>
                  <p>
                    Commonly used programming languages for 2D game development include C#, C++, Java, and Python. Game engines like Unity, Godot, and Phaser provide support for these languages and simplify the development process.
                  </p>
                  <div className="mt-2">
                    <Link href="#">
                      Let's Start
                      <Image alt="bitswits" className='img-fluid'
                        src={arrow}


                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div className={`${faq3show ? 'touch' : ''} mb-4 mb-lg-0`}>
                <div onClick={faq3} className={styles.heading}>
                  <h3>
                    What are some popular tools and engines for 2D game development? {faq3show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                  </h3>
                </div>

                <div className={faq3show ? 'd-block' : 'd-none'}>
                  <ul>
                    <li>Popular tools and engines for 2D game development include:Unity (supports both 2D and 3D game development)</li>
                    <li>Godot</li>
                    <li>Unreal Engine (can be used for 2D as well as 3D games)</li>
                    <li>Cocos2d-x</li>
                    <li>Phaser</li>
                    <li>Love2D</li>
                  </ul>
                  <p>Pico-8</p>
                  <div className="mt-2">
                    <Link href="#">
                      Let's Start
                      <Image alt="bitswits" className='img-fluid'
                        src={arrow}


                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div className={`${faq4show ? 'touch' : ''} mb-4 mb-lg-0`}>
                <div onClick={faq4} className={styles.heading}>
                  <h3>
                    What is the difference between a sprite and a texture in 2D game development? {faq4show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                  </h3>
                </div>

                <div className={faq4show ? 'd-block' : 'd-none'}>
                  <p>
                    In 2D game development, a sprite is a 2D image or animation that represents an object or character in the game. A texture, on the other hand, is a 2D image used to apply visual details to objects, backgrounds, or surfaces in the game.
                  </p>
                  <div className="mt-2">
                    <Link href="#">
                      Let's Start
                      <Image alt="bitswits" className='img-fluid'
                        src={arrow}


                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div className={`${faq5show ? 'touch' : ''} mb-4 mb-lg-0`}>
                <div onClick={faq5} className={styles.heading}>
                  <h3>
                    How can I handle collision detection in 2D games? {faq5show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                  </h3>
                </div>

                <div className={faq5show ? 'd-block' : 'd-none'}>
                  <p>
                    Collision detection in 2D games involves identifying when two or more objects in the game world come into contact. This can be achieved through various techniques, such as bounding box collision, pixel-perfect collision, or using physics engines provided by game development frameworks.
                  </p>
                  <div className="mt-2">
                    <Link href="#">
                      Let's Start
                      <Image alt="bitswits" className='img-fluid'
                        src={arrow}


                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div className={faq6show ? 'touch' : ''}>
                <div onClick={faq6} className={styles.heading}>
                  <h3>
                    What are some common design considerations for 2D game development? {faq6show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                  </h3>
                </div>

                <div className={faq6show ? 'd-block' : 'd-none'}>
                  <ul>
                    <li>Design considerations for 2D games include:Game mechanics: Define how the game will be played and what actions are available to the player.</li>
                    <li>Art and animation: Create or acquire 2D sprites, backgrounds, and animations that fit the game's style and theme.</li>
                    <li>Level design: Plan and design the layout and challenges of game levels.</li>
                    <li>User interface (UI) design: Create menus, HUD elements, and other interface components.</li>
                  </ul>
                  <p>Sound and music: Incorporate audio elements to enhance the gaming experience.</p>
                  <div className="mt-2">
                    <Link href="#">
                      Let's Start
                      <Image alt="bitswits" className='img-fluid'
                        src={arrow}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <Link className={styles.about} href="#">LET'S CONNECT</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Game2dFaqs