import React from 'react'
import styles from '@/styles/Newhomeanner.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//images
import banImg1 from '../public/images/banner/bannerImg1.png'
import banImg2 from '../public/images/banner/bannerImg2.png'
import banImg3 from '../public/images/banner/bannerImg1.png'
import banImg4 from '../public/images/banner/bannerImg2.png'
import banImg5 from '../public/images/banner/bannerImg1.png'
import icon1 from '../public/images/banner/icon1.png'
import icon2 from '../public/images/banner/icon2.png'
import icon4 from '../public/images/banner/icon4.png'
import callIcn from '../public/images/banner/call-icon.png'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { RxCross2 } from 'react-icons/rx'
import Freequote from './Freequote'
import { useState } from "react";
import Router from 'next/router'


const NewHomeBanner = () => {

    const [show, setShow] = useState(false);

    function modal(e) { e.preventDefault(); setShow(true); }
    function closemodal() { setShow(false); }

    var bannerslider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 20000,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1

    };

    // const [score, setScore] = useState('Submit');

    // const handleSubmit = async (event) => {

    //     event.preventDefault()


    //     const data = {
    //         name: event.target.name.value,
    //         phone: event.target.phone.value,
    //         email: event.target.email.value,
    //         message: event.target.message.value,
    //     }

    //     const JSONdata = JSON.stringify(data)

    //     setScore('Sending Data');

    //     // axios.post("https://jsonplaceholder.typicode.com/posts", JSONdata)
    //     //   .then((response) => {
    //     //     setScore('Thank You');
    //     //     console.log(response.data);
    //     //   });

    //     fetch('/api/email', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json, text/plain, */*',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSONdata
    //     }).then((res) => {
    //         console.log('Response received')
    //         if (res.status === 200) {
    //             console.log('Response succeeded!')
    //         }
    //     })

    //     // const { pathname } = Router
    //     // if (pathname == pathname) {
    //     //     Router.push('/thank-you')
    //     // }

    // }


    const [score, setScore] = useState('Submit');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            name: event.target.name.value,
            phone: event.target.phone.value,
            email: event.target.email.value,
            message: event.target.message.value,
        };

        const JSONdata = JSON.stringify(data);

        setScore('Sending Data');

        try {
            const response = await fetch('/api/email', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                },
                body: JSONdata,
            });

            if (response.status === 200) {
                setScore('Thank You');
                console.log('Response succeeded!')
                const { pathname } = Router
                if (pathname == pathname) {
                    Router.push('/thank-you')
                }
            } else {
                console.error('Error:', response.statusText);
                setScore('Submit');
            }
        } catch (error) {
            console.error('Error:', error);
            setScore('Submit');
        }
    };



    return (
        <section className={styles.banner}>
            <Container fluid>
                <Row className={styles.bannnerproject}>
                    <Col lg={7}>
                        <div className={styles.banerTxt}>

                            <h1 className='font65 black fontf font-bold line60'>

                                A <span className='grdiant font-bold'>Top Mobile App Development Company</span> at Your Service

                            </h1>
                            <h4 className='font16 font-bold black fontf'>Apps, Games, and Web Bliss:</h4>
                            <p className='black fontf font16 font-medium line30'>
                                From engaging mobile applications and exhilarating games to inspiring online web solutions, everything is driven with experience at BitsWits, a <span className='grdiant font-bold'>top mobile app development company in US</span>

                            </p>

                            <div className={`${styles.bttnsto}`}>
                                <Link className={styles.bttns1} onClick={modal} href="#">Book A Call</Link>
                                <Link className={styles.bttns2} href="#">Live Chat </Link>
                            </div>


                            <div className={styles.bannerimg2}>

                                <Slider {...bannerslider} className={` ${styles.startup1} bannerslider mt-4`}>
                                    <div className={styles.strpImg}>
                                        <Image alt="bitswits" src={banImg1} className="img-fluid" />
                                    </div>
                                    <div className={styles.strpImg}>
                                        <Image alt="bitswits" src={banImg2} className="img-fluid" />
                                    </div>
                                    <div className={styles.strpImg}>
                                        <Image alt="bitswits" src={banImg3} className="img-fluid" />
                                    </div>
                                    <div className={styles.strpImg}>
                                        <Image alt="bitswits" src={banImg4} className="img-fluid" />
                                    </div>
                                    <div className={styles.strpImg}>
                                        <Image alt="bitswits" src={banImg5} className="img-fluid" />
                                    </div>
                                </Slider>

                                {/* <div className={styles.bannerimg1}>
                                    <div className={` ${styles.logo1} ${styles.logo13} `}>
                                        <Image  alt="bitswits"       src={alignicon4} className={` ${styles.bottom}  img-fluid`} />
                                        <Image  alt="bitswits"       src={alignicon3} className={`${styles.bottom1}  img-fluid mt-3`} />
                                    </div>

                                    <div className={styles.logo1}>
                                        <Image  alt="bitswits"       src={alignicon} className={`${styles.bottom2} img-fluid`} />
                                    </div>

                                    <div className={` ${styles.logo1} ${styles.logo14} `}>
                                        <Image  alt="bitswits"       src={alignicon2} className={`${styles.bottom3} img-fluid`} />
                                        <Image  alt="bitswits"       src={alignicon1} className={`${styles.bottom4} img-fluid`} />

                                    </div>
                                </div> */}

                                {/* <Image  alt="bitswits"       src={alignicon} className="img-fluid" />
                            <Image  alt="bitswits"       src={alignicon1} className="img-fluid" />
                            <Image  alt="bitswits"       src={alignicon2} className="img-fluid" /> */}
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className='p-0'>
                        <div className={styles.bannerform}>

                            <div className={`${styles.discuss} d-flex`}>
                                <div className={styles.call}>
                                    <Image alt="bitswits" className='img-fluid'
                                        src={callIcn}
                                    />
                                    <p className='font13 font-semibold lightgrey fontf m-0'>
                                        Let's discuss your project:
                                    </p>
                                </div>
                                <Link className={`${styles.formA} font14 font-medium white fontf`} href='tel:(833) 500-6007'>(833) 500-6007</Link>
                            </div>

                            <div className={styles.make}>
                                <div className={styles.free}>
                                    <p className='font16 texttran font-bold fontf grey'>
                                        Make an obligation-free enquiry
                                    </p>
                                </div>
                                <form className={styles.formsbanner} id="myForm" onSubmit={handleSubmit}>
                                    <input type='text' name='name' id='name' className={`${styles.forminput} form-control`} placeholder='Your Name' required />
                                    <input type='tel' maxLength={11} minLength={7} name='phone' id='phone' className={`${styles.forminput} form-control`} placeholder='Phone Number' required />
                                    <input type='email' name='email' id='email' className={`${styles.forminput} form-control`} placeholder='Email Address' required />
                                    <textarea name='message' id='message' className={styles.formarea} placeholder='How can we help you?'></textarea>
                                    <div className={`${styles.take} d-flex`}>
                                        <p className='grey font11 font-semibold fontf m-0'>We take your privacy seriously.<br></br> Read our <strong>Privacy Notice</strong>.</p>
                                        <button type="submit" id="submit" className={styles.notice}>{score}</button>
                                    </div>
                                </form>
                            </div>

                            <div className={styles.read}>
                                <div className={`${styles.free} text-center`}>
                                    <p className='font21 font-bold fontf grey'>OUR OFFICES</p>
                                </div>

                                <div className={styles.locations}>
                                    <div className={`${styles.locInner}`}>
                                        <div className={styles.locImg}>
                                            <Image alt="bitswits" src={icon1} className='img-fluid' />
                                        </div>
                                        <div className={styles.subInner}>
                                            <p className='font15 font-bold fontf mb-0 white'>USA</p>
                                            <Link href="#" className='font12 font-regular fontf white texdocration'>
                                                +1 833 500 6007
                                            </Link>
                                        </div>

                                    </div>
                                    <div className={`${styles.locInner}`}>
                                        <div className={styles.locImg}>
                                            <Image alt="bitswits" src={icon2} className='img-fluid' />
                                        </div>
                                        <div className={styles.subInner}>
                                            <p className='font15 font-bold fontf mb-0 white'>UAE</p>
                                            <Link href="#" className='font12 font-regular fontf white texdocration'>
                                                +1 833 500 6007
                                            </Link>
                                        </div>
                                    </div>

                                    <div className={`${styles.locInner}`}>
                                        <div className={styles.locImg}>
                                            <Image alt="bitswits" src={icon4} className='img-fluid' />
                                        </div>
                                        <div className={styles.subInner}>
                                            <p className='font15 font-bold fontf mb-0 white'>MALAYSIA</p>
                                            <Link href="#" className='font12 font-regular fontf white texdocration'>
                                                +1 833 500 6007
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </Col>
                </Row>
            </Container>


            <Modal show={show} onHide={closemodal} className={styles.modalnew}>
                <Modal.Body> <Freequote formsaspire='popquote' /> <span onClick={closemodal} className={styles.cross}> <RxCross2 /> </span> </Modal.Body>


            </Modal>

        </section>

    )
}

export default NewHomeBanner