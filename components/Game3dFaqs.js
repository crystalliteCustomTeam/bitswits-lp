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
                                        What is 3D game development?  {faq1show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq1show ? 'd-block' : 'd-none'} >
                                    <p>
                                        3D game development involves creating interactive games that exist within a three-dimensional space, allowing for depth and perspective in gameplay. It uses 3D models, textures, and animations to create realistic environments and characters.
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
                                        What programming languages are commonly used for 3D game development? {faq2show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq2show ? 'd-block' : 'd-none'}>
                                    <p>
                                        Commonly used programming languages for 3D game development include C++, C#, Python, and Java. Game engines like Unity and Unreal Engine provide support for these languages and streamline the development process.
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
                                        What are some popular tools and engines for 3D game development? {faq3show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq3show ? 'd-block' : 'd-none'}>
                                    <ul>
                                        <li>Popular tools and engines for 3D game development include:Unity</li>
                                        <li>Unreal Engine</li>
                                        <li>Blender (for 3D modeling and animation)</li>
                                        <li>Autodesk Maya (for 3D modeling and animation)</li>
                                        <li>3ds Max (for 3D modeling and animation)</li>
                                    </ul>
                                    <p>
                                        ZBrush (for sculpting and texturing)
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

                            <div className={`${faq4show ? 'touch' : ''} mb-4 mb-lg-0`}>
                                <div onClick={faq4} className={styles.heading}>
                                    <h3>
                                        How do I handle 3D modeling and animation in game development? {faq4show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq4show ? 'd-block' : 'd-none'}>
                                    <p>
                                        3D modeling involves creating the objects, characters, and environments in the game, while animation involves giving movement and behavior to those models. This is typically done using specialized software tools like Blender, Maya, or 3ds Max.
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
                                        What is the process for implementing physics in a 3D game? {faq5show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq5show ? 'd-block' : 'd-none'}>
                                    <p>
                                        Physics in 3D games involves simulating real-world physical interactions, such as gravity, collisions, and forces. Game engines like Unity and Unreal Engine provide built-in physics engines that handle these interactions, allowing developers to define properties and behaviors for game objects.
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
                                        What are some important considerations for optimizing performance in 3D games? {faq6show ? <span className={styles.plus}>  <Image quality={75} src={open} className='img-fluid' />    </span> : <span className={styles.plus}>  <Image quality={75} src={close} className='img-fluid' /> </span>}
                                    </h3>
                                </div>

                                <div className={faq6show ? 'd-block' : 'd-none'}>
                                    <ul>
                                        <li>Optimizing performance in 3D games is crucial for smooth gameplay. Considerations include:Level of Detail (LOD): Use lower-polygon models for objects that are farther away from the camera.</li>
                                        <li>Occlusion Culling: Hide objects that are not currently visible to the camera.</li>
                                        <li>Texture Compression: Use compressed textures to save memory and improve loading times.</li>
                                    </ul>
                                    <p>
                                        Efficient Rendering: Utilize techniques like frustum culling to only render objects within the camera's view.
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