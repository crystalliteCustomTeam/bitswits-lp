import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Contact2.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//
import img1 from '../public/images/agencylogos/agency-logo1.png'
import img2 from '../public/images/agencylogos/agency-logo2.png'
import img3 from '../public/images/agencylogos/agency-logo3.png'
import img4 from '../public/images/agencylogos/agency-logo4.png'


const Contact = (props) => {

    const [score, setScore] = useState('Time to Book The Call');

    const handleSubmit = async (event) => {

        event.preventDefault()


        const data = {
            firstName: event.target.fname.value,
            lastName: event.target.lname.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            message: event.target.message.value,
        }

        const JSONdata = JSON.stringify(data)

        setScore('Wating For Send Data');

        // axios.post("https://jsonplaceholder.typicode.com/posts", JSONdata)
        //   .then((response) => {
        //     setScore('Thank You');
        //     console.log(response.data);
        //   });

        fetch('/api/email', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
            }
        })


        // const { pathname } = Router
        // if (pathname == pathname) {
        //     Router.push('/thank-you')
        // }

    }


    return (
        <>
            <section className={` ${styles[props.newBg]} ${styles.contact}`}>
                <Container>
                    <Row className='justify-content-between'>
                        <Col lg={4}>
                            <div className={styles.cntcTxt}>
                                <h2 className='font60 white fontf font-bold line60 mb-4'>
                                    LET’S <span className='grdiant'>TALK ABOUT YOUR</span> PROJECTS
                                </h2>
                                <p className='font18 fontf mb-4'>Have a project idea? Tell us more about the details and we'll get back to you within 24 hours</p>
                                <Row className='g-5 mt-3'>
                                    <Col md={6}>
                                        <Image quality={75} src={img1} className='img-fluid' alt='BitsWits' />
                                    </Col>
                                    <Col md={6}>
                                        <Image quality={75} src={img2} className='img-fluid' alt='BitsWits' />
                                    </Col>
                                    <Col md={6}>
                                        <Image quality={75} src={img3} className='img-fluid' alt='BitsWits' />
                                    </Col>
                                    <Col md={6}>
                                        <Image quality={75} src={img4} className='img-fluid' alt='BitsWits' />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className={`${styles.cntcForm} mt-5 mt-lg-0`}>
                                <form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col lg={6}>
                                            <div className='mb-4'>
                                                <label className='form-label'>
                                                    First Name
                                                    <span className={styles.imp}>*</span>
                                                </label>
                                                <input type="text" className='form-control' id="fname" name='fname' placeholder="What's your first name?" required />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='mb-4'>
                                                <label className='form-label'>
                                                    Last Name
                                                    <span className={styles.imp}>*</span>
                                                </label>
                                                <input type="text" className='form-control' id="lname" name='lname' placeholder="What's your last name?" required />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='mb-4'>
                                                <label className='form-label'>
                                                    Email Address
                                                    <span className={styles.imp}>*</span>
                                                </label>
                                                <input type="email" className='form-control' id="email" name='email' placeholder="yourname@email.com" required />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='mb-4'>
                                                <label className='form-label'>Company Size</label>
                                                <select id="company" name="Company" data-name="Company" className={styles.wSelect} required >
                                                    <option value="0">Company Size</option>
                                                    <option value="1">Only 1</option>
                                                    <option value="2-10">2-10</option>
                                                    <option value="10-20">10-20</option>
                                                    <option value="30-50">30-50</option>
                                                    <option value="50-100">50-100</option>
                                                    <option value="100+">100+</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='mb-4'>
                                                <label className='form-label'>Service</label>
                                                <select id="service" name="service" data-name="Service" className={styles.wSelect} required>
                                                    <option value="">Select service</option>
                                                    <option value="Webflow Development">Mobile/Web Design</option>
                                                    <option value="Web Development">Web Development</option>
                                                    <option value="Web3 Design">Web3 Design</option>
                                                    <option value="BlockChain">BlockChain</option>
                                                    <option value="Artificial Intelligence">Artificial Intelligence</option>
                                                    <option value="Data Science">Data Science</option>
                                                    <option value="Others">Others</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='mb-4'>
                                                <label className='form-label'>How did you find us?</label>
                                                <select id="source" name="source" data-name="Source" className={styles.wSelect} required>
                                                    <option value="">How did you find us?</option>
                                                    <option value="Google">Google</option>
                                                    <option value="Clutch">Clutch</option>
                                                    <option value="Referral">Referral</option>
                                                    <option value="Blog">Blog</option>
                                                    <option value="Review Site">Review Site</option>
                                                    <option value="Others">Others</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className='mb-4'>
                                                <label className='form-label'>
                                                    What have you budgeted for this project?
                                                    <span className={styles.imp}>*</span>
                                                </label>
                                                <select id="budget" name="budget" data-name="Budget" className={styles.wSelect} required>
                                                    <option value="0">What is your budget for this project?</option>
                                                    <option value="Under $20,000">Under $20,000</option>
                                                    <option value="$20.000-$50,000">$20.000-$50,000</option>
                                                    <option value="$50,000-$100,000">$50,000-$100,000</option>
                                                    <option value="$100,000-$150,000">$100,000-$150,000</option>
                                                    <option value="$150,000-$200,000">$150,000-$200,000</option>
                                                    <option value="Above $200,000">Above $200,000</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className='mb-4'>
                                                <label className='form-label'>About Your Project</label>
                                                <textarea id="message" name="message" maxLength="5000" data-name="Message" placeholder="Tell us about your project goals &amp; timeline in a snapshot. Please include any necessary links about your project." className="form-field text-area w-input"></textarea>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className='mb-5'>
                                                <button type="submit" id="submit" data-wait="Booking the Call " className={styles.btns}>{score}</button>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className={styles.formPara}>
                                                <p>
                                                    By submitting this form, you agree to our
                                                    <Link className={styles.link} href="#"> privacy policy </Link> <br />
                                                    and allow us to contact you via email
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Contact