import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Row, Col } from 'react-bootstrap'
import styles from '@/styles/Headerproduct.module.css'

// images
import logo from '../public/images/icons/footerlogo.png'
import dsicon from '../public/images/newfydemand/ds-icon.svg'
import icontwo from '../public/images/newfydemand/icontwo.svg'
import hiring1 from '../public/images/newfydemand/hiring1.svg'
import hiring2 from '../public/images/newfydemand/hiring2.svg'
import security from '../public/images/newfydemand/security.png'
import alcohol from '../public/images/newfydemand/alcohol.png'
import construction from '../public/images/newfydemand/construction.png'
import healthsafety from '../public/images/newfydemand/health-safety.png'
import elearning from '../public/images/newfydemand/elearning.png'
import driving from '../public/images/newfydemand/driving.png'
import securitygear from '../public/images/newfydemand/security-gear.png'
import securityjobs from '../public/images/newfydemand/security-jobs.png'

import about from '../public/images/newfydemand/about.svg'
import employers from '../public/images/newfydemand/employers.svg'
import listcourse from '../public/images/newfydemand/list-course.svg'
import faqs from '../public/images/newfydemand/faqs.svg'
import help from '../public/images/newfydemand/help.svg'
import call from '../public/images/icons/phone-icon.webp'
import mail from '../public/images/icons/email-icon.webp'

import cctvicon from '../public/images/newfydemand/cctv-icon.svg'
import guardicon from '../public/images/newfydemand/guard-icon.svg'
import topdsicon from '../public/images/newfydemand/top-ds-icon.svg'
import topsgicon from '../public/images/newfydemand/top-sg-icon.svg'
import aplhicon from '../public/images/newfydemand/aplh-icon.svg'
import cscsicon from '../public/images/newfydemand/cscs-icon.svg'

import { RiArrowDropRightLine } from "react-icons/ri";
import { IoLogoFacebook } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Accordion from 'react-bootstrap/Accordion';



const Header = () => {

    const [isHovered, setIsHovered] = useState('');

    function fun1(vale) {

        setIsHovered(vale);

    }
    function fun2(vale1) {

        setIsHovered(vale1);

    }

    const [isHovered1, setIsHovered1] = useState('');

    function fun11(vale) {

        setIsHovered1(vale);

    }
    function fun21(vale1) {

        setIsHovered1(vale1);

    }


    return (
        <>

            <header className={styles.headernew}>

                <div className={styles.logo}>
                    <Image src={logo} className='img-fluid' />
                </div>
                <nav>
                    <ul className={styles.newone}>
                        <li onMouseEnter={() => fun11('active1')}
                            onMouseLeave={() => fun21('secImage11')}
                            className={styles.product}><Link className={styles.post} href='#'>Products</Link>
                            {isHovered1 == 'active1' ?

                                <div className={styles.megamenu}>
                                    <Row>
                                        <Col lg={4} className={` ${styles.newspace}`}>
                                            <div>
                                                <h4 className={styles.course1}>Mobile App Development</h4>
                                            </div>
                                            <div className={styles.hire}>
                                                <Link href='#' className={styles.polo}>
                                                    <h4>IOS App</h4>
                                                    <Image src={security} className='img-fluid' />
                                                </Link>
                                                <Link href='#' className={styles.polo}>
                                                    <h4>Android App </h4>
                                                    <Image src={alcohol} className='img-fluid' />
                                                </Link>
                                            </div>
                                            <div className={styles.hire}>
                                                <Link href='#' className={styles.polo}>
                                                    <h4>Flutter App </h4>
                                                    <Image src={construction} className='img-fluid' />
                                                </Link>
                                                <Link href='#' className={styles.polo}>
                                                    <h4>React Native <br></br> App </h4>
                                                    <Image src={healthsafety} className='img-fluid' />
                                                </Link>
                                            </div>
                                            <div className={styles.hire}>
                                                <Link href='#' className={styles.polo}>
                                                    <h4>Hybird Mobile <br></br> App </h4>
                                                    <Image src={elearning} className='img-fluid' />
                                                </Link>
                                                <Link href='#' className={styles.polo}>
                                                    <h4>Cross Platform <br></br> App </h4>
                                                    <Image src={driving} className='img-fluid' />
                                                </Link>

                                            </div>
                                            <div className={styles.hire}>
                                                <Link href='#' className={styles.polo}>
                                                    <h4>Web App</h4>
                                                    <Image src={securitygear} className='img-fluid' />
                                                </Link>
                                                <Link href='#' className={styles.polo}>
                                                    <h4>Augmented Reality <br></br> App </h4>
                                                    <Image src={securityjobs} className='img-fluid' />
                                                </Link>

                                            </div>
                                        </Col>
                                        <Col lg={4} className={` ${styles.menupostblog1}`}>
                                            <div>
                                                <h4 className={styles.course}>GOOD LINKS</h4>
                                            </div>
                                            <div>

                                                <ul className={styles.mega}>
                                                    <li className={styles.imgpost}>
                                                        <div className={styles.dsicon}>
                                                            <Image src={about} className='img-fluid' />
                                                        </div>
                                                        <Link href="#">About us </Link> </li>
                                                    <li className={styles.imgpost}>
                                                        <div className={styles.dsicon}>
                                                            <Image src={employers} guardicon className='img-fluid' />
                                                        </div>
                                                        <Link href="#">Employers </Link> </li>
                                                    <li className={styles.imgpost}>
                                                        <div className={styles.dsicon}>
                                                            <Image src={listcourse} className='img-fluid' />
                                                        </div>
                                                        <Link href="#">Partners </Link> </li>
                                                    <li className={styles.imgpost}>
                                                        <div className={styles.dsicon}>
                                                            <Image src={faqs} className='img-fluid' />
                                                        </div>
                                                        <Link href="#">FAQs </Link> </li>

                                                    <li className={styles.imgpost}>
                                                        <div className={styles.dsicon}>
                                                            <Image src={help} className='img-fluid' />
                                                        </div>
                                                        <Link href="#">Help </Link> </li>

                                                </ul>

                                                <div className={styles.medg}>
                                                    <h4 className={styles.big}>WE’RE BIG ON SOCIALS</h4>
                                                    <ul className={styles.social}>
                                                        <li><Link className={styles.show1} href="#"><IoLogoFacebook /></Link></li>
                                                        <li><Link className={styles.show2} href="#"><FaYoutube /></Link></li>
                                                        <li><Link className={styles.show3} href="#"><FaInstagram /></Link></li>
                                                        <li><Link className={styles.show4} href="#"><FaTwitter /></Link></li>
                                                        <li><Link className={styles.show5} href="#"><FaLinkedin /></Link></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </Col>

                                        <Col lg={4} className={styles.newset}>
                                            <div className={styles.lptow}>
                                                <div className={styles.newbits}>
                                                    <div>
                                                        <h6>Train Now, <br></br>  <span className={styles.pay}>Pay Later</span> </h6>
                                                        <p>Book now and pay in instalments</p>
                                                        <Link href='#'>Learn more <RiArrowDropRightLine className={styles.train12} /> </Link>
                                                    </div>
                                                    <div>
                                                        <Image src={icontwo} className='img-fluid' />
                                                    </div>
                                                </div>
                                                <div className={styles.proper}>
                                                    <h4>FOR BUSINESS CUSTOMERS</h4>
                                                    <h3>HIRING & <br></br> TRAINING</h3>
                                                    <p>The complete solution for training and hiring, purpose-built for security employers</p>
                                                </div>
                                                <div className={styles.slaes}>
                                                    <p className='pb-0 mb-0'> <Link href="tel:18335006007">
                                                        <Image alt="BitsWits" className='img-fluid'
                                                            src={call}

                                                            loading="lazy"
                                                        />
                                                        <span className="number">+1 833 500 6007</span>
                                                    </Link></p>
                                                    <p>
                                                        <Link href="mailto:info@BitsWits.co">
                                                            <Image alt="BitsWits" className='img-fluid'
                                                                src={mail}

                                                                loading="lazy"
                                                            />
                                                            <span className="email f-uppercase">Contact Email</span>
                                                        </Link>
                                                    </p>
                                                    <p className='mb-0 pb-3'>
                                                        <Link href='#' className={styles.newyork}>
                                                            Learn More <RiArrowDropRightLine className={styles.train} />
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                :
                                ''
                            }


                        </li>
                        <li onMouseEnter={() => fun1('active')}
                            onMouseLeave={() => fun2('secImage1')}
                            className={styles.product}><Link className={styles.post} href='#'>Courses</Link>

                            {isHovered == 'active' ?

                                <div className={styles.megamenu}>
                                    <Row>
                                        <Col lg={3} className={`${styles.menupost} ${styles.newspace}`}>
                                            <div>
                                                <h4 className={styles.course}>CATEGORIES</h4>
                                            </div>
                                            <div className={styles.hire}>
                                                <Link href='#' className={styles.polo}>
                                                    <h4>Security</h4>
                                                    <Image src={security} className='img-fluid' />
                                                </Link>
                                                <Link href='#' className={styles.polo}>
                                                    <h4>Alcohol</h4>
                                                    <Image src={alcohol} className='img-fluid' />
                                                </Link>
                                            </div>
                                            <div className={styles.hire}>
                                                <Link href='#' className={styles.polo}>
                                                    <h4>Construction</h4>
                                                    <Image src={construction} className='img-fluid' />
                                                </Link>
                                                <Link href='#' className={styles.polo}>
                                                    <h4>Health & <br></br>
                                                        Safety</h4>
                                                    <Image src={healthsafety} className='img-fluid' />
                                                </Link>
                                            </div>
                                            <div className={styles.hire}>
                                                <Link href='#' className={styles.polo}>
                                                    <h4>E-Learning</h4>
                                                    <Image src={elearning} className='img-fluid' />
                                                </Link>

                                            </div>
                                        </Col>
                                        <Col lg={3} className={`${styles.menupost} ${styles.menupostblog}`}>
                                            <div>
                                                <h4 className={styles.course}>POPULAR COURSES</h4>
                                            </div>
                                            <div>

                                                <ul className={styles.mega}>
                                                    <li className={styles.imgpost}>
                                                        <div className={styles.dsicon}>
                                                            <Image src={dsicon} className='img-fluid' />
                                                        </div>
                                                        <Link href="#">SIA Door Supervisor Training </Link> </li>
                                                    <li className={styles.imgpost}>
                                                        <div className={styles.dsicon}>
                                                            <Image src={guardicon} guardicon className='img-fluid' />
                                                        </div>
                                                        <Link href="#">SIA Security Guard Training </Link> </li>
                                                    <li className={styles.imgpost}>
                                                        <div className={styles.dsicon}>
                                                            <Image src={cctvicon} className='img-fluid' />
                                                        </div>
                                                        <Link href="#">SIA CCTV Training </Link> </li>
                                                    <li className={styles.imgpost}>
                                                        <div className={styles.dsicon}>
                                                            <Image src={topdsicon} className='img-fluid' />
                                                        </div>
                                                        <Link href="#">Top-up Training for Door Supervisors </Link> </li>
                                                    <li className={styles.imgpost}>
                                                        <div className={styles.dsicon}>
                                                            <Image src={topsgicon} className='img-fluid' />
                                                        </div>
                                                        <Link href="#">Top-up Training for Security Guards </Link> </li>
                                                    <li className={styles.imgpost}>
                                                        <div className={styles.dsicon}>
                                                            <Image src={aplhicon} className='img-fluid' />
                                                        </div>
                                                        <Link href="#">Personal Licence Training </Link> </li>
                                                    <li className={styles.imgpost}>
                                                        <div className={styles.dsicon}>
                                                            <Image src={cscsicon} className='img-fluid' />
                                                        </div>
                                                        <Link href="#">CSCS Green Card Labourer Course </Link> </li>

                                                    <li className={`${styles.imgpost} mt-5`}>
                                                        <Link className={styles.explore} href="#">Explore all popular courses </Link>
                                                        <div className={styles.dsicon1}>
                                                            <FaArrowRight />
                                                        </div>
                                                    </li>


                                                </ul>
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div>
                                                <h4 className={styles.course}>ALL COURSES</h4>
                                            </div>

                                            <div className='dropmap'>
                                                <ul className={styles.offpost}>
                                                    <li><Link href='#'>Security</Link></li>
                                                    <li><Link href='#'>Health and Safety</Link></li>
                                                    <li><Link href='#'>Alcohol </Link></li>
                                                    <li><Link href='#'>Construction </Link></li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div className={styles.lptow}>
                                                <div className={styles.newbits}>
                                                    <div>
                                                        <h6>Train Now, <br></br>  <span className={styles.pay}>Pay Later</span> </h6>
                                                        <p>Book now and pay in instalments</p>
                                                        <Link href='#'>Learn more <RiArrowDropRightLine className={styles.train12} /> </Link>
                                                    </div>
                                                    <div>
                                                        <Image src={icontwo} className='img-fluid' />
                                                    </div>
                                                </div>
                                                <div className={styles.proper}>
                                                    <h4>FOR BUSINESS CUSTOMERS</h4>
                                                    <h3>HIRING & <br></br> TRAINING</h3>
                                                    <p>The complete solution for training and hiring, purpose-built for security employers</p>
                                                    <Image src={hiring1} className='img-fluid' />
                                                    <Image src={hiring2} className='img-fluid' />
                                                    <Link href='#' className={`${styles.newyork} pb-3`}>
                                                        Learn More <RiArrowDropRightLine className={styles.train} />
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                :
                                ''
                            }
                        </li>
                    </ul>
                </nav>




            </header>


        </>
    )
}

export default Header