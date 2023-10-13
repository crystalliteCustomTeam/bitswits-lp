import React, {useState} from 'react'
import Image from 'next/image'
import styles from '../styles/Homebanner.module.css'
import styles1 from '@/styles/Banner.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import right from '../public/images/displaybanner/hero-img.webp'
import callIcn from '../public/images/banner/call-icon.png'
import icon1 from '../public/images/banner/icon1.png'
import icon2 from '../public/images/banner/icon2.png'
import icon4 from '../public/images/banner/icon4.png'


function Homebanner(props) {

    const [score, setScore] = useState('Submit');

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

            <div className={`${styles.herofold} ${styles.newhomepagehero}`}>
                <Container fluid>
                    <Row className={styles.rowalign}>

                        <Col xl={7}>
                            <div className={styles.nreplot}>


                                {props.subtitle ?
                                    <p className="f-montserrat f-700 f-20 mb-1 black lheight24"> {props.subtitle}</p>
                                    :
                                    ''
                                }


                                {props.title}



                                {props.title2 ?
                                    <p className="f-18 f-montserrat mb-2 line30 font-bold">
                                        {props.title2}
                                    </p>
                                    :
                                    ''
                                }




                                {props.text ?
                                    <p className="f-18 f-montserrat mb-2 line30 font-medium">
                                        {props.text}
                                    </p>
                                    :
                                    ''
                                }






                                {props.text ?
                                    <p className="f-18 f-montserrat mb-3 mb-xxl-4 line30 font-medium">
                                        {props.text2}
                                    </p>
                                    :
                                    ''
                                }





                                {props.btn1 ?

                                    <Link href='#' className={`${styles.arrowBtn} btns mt-3`}>
                                        <span> {props.btn1} </span>

                                    </Link>

                                    :
                                    <Link href='#' className={`${styles.arrowBtn} btns`}>
                                        <span>Get Free  Consultation </span>

                                    </Link>

                                }


                            </div>

                        </Col>
                        <Col xl={4} className='p-0'>
                            <div className={styles1.bannerform}>

                                <div className={`${styles1.discuss} d-flex`}>
                                    <div className={styles1.call}>
                                        <Image alt="bitswits" className='img-fluid'
                                            src={callIcn}

                                        />
                                        <p className='font13 font-semibold lightgrey fontf m-0'>
                                            Let's discuss your project:
                                        </p>
                                    </div>
                                    <Link className={`${styles1.formA} font14 font-medium white fontf`} href='tel:(833) 500-6007'>(833) 500-6007</Link>
                                </div>

                                <div className={styles1.make}>
                                    <div className={styles1.free}>
                                        <p className='font16 texttran font-bold fontf grey'>
                                            Make an obligation-free enquiry
                                        </p>
                                    </div>
                                    <form className={styles1.formsbanner} onSubmit={handleSubmit}>
                                        <input type='text' className={`${styles1.forminput} form-control`} placeholder='Your Name' required />
                                        <input type='number' className={`${styles1.forminput} form-control`} placeholder='Phone Number' required />
                                        <input type='email' className={`${styles1.forminput} form-control`} placeholder='Email Address' required />
                                        <textarea className={styles1.formarea} placeholder='How can we help you?' ></textarea>
                                        <div className={`${styles1.take} d-flex`}>
                                            <p className='grey font11 font-semibold fontf m-0'>We take your privacy seriously.<br></br> Read our <strong>Privacy Notice</strong>.</p>
                                            <button type="submit" id="submit" className={styles1.notice}>{score}</button>
                                        </div>
                                    </form>
                                </div>

                                <div className={styles1.read}>
                                    <div className={`${styles1.free} text-center`}>
                                        <p className='font21 font-bold fontf grey'>OUR OFFICES</p>
                                    </div>

                                    <div className={styles1.locations}>
                                        <div className={`${styles1.locInner}`}>
                                            <div className={styles1.locImg}>
                                                <Image alt="bitswits" src={icon1} className='img-fluid' />
                                            </div>
                                            <div className={styles1.subInner}>
                                                <p className='font15 font-bold fontf mb-0 white'>USA</p>
                                                <Link href="#" className='font12 font-regular fontf white texdocration'>
                                                    +1 833 500 6007
                                                </Link>
                                            </div>

                                        </div>
                                        <div className={`${styles1.locInner}`}>
                                            <div className={styles1.locImg}>
                                                <Image alt="bitswits" src={icon2} className='img-fluid' />
                                            </div>
                                            <div className={styles1.subInner}>
                                                <p className='font15 font-bold fontf mb-0 white'>UAE</p>
                                                <Link href="#" className='font12 font-regular fontf white texdocration'>
                                                    +1 833 500 6007
                                                </Link>
                                            </div>
                                        </div>

                                        <div className={`${styles1.locInner}`}>
                                            <div className={styles1.locImg}>
                                                <Image alt="bitswits" src={icon4} className='img-fluid' />
                                            </div>
                                            <div className={styles1.subInner}>
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
            </div>

        </>
    )
}

export default Homebanner