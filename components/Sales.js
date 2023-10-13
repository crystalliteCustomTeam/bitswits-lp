import React from 'react'
import styles from '@/styles/Sales.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import tick from '../public/images/sales/blue-tick.png'
import Image from 'next/image'

const Sales = () => {
    return (
        <section className={styles.sales}>
            <Container>
                <Row>
                    <Col>
                        <h3 className='center font-bold mb-5'>We Turn More Traffic into Sales</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ul>
                            <li className="d-flex align-items-start gap-4 mb-3"> <Image quality={75} src={tick} className='greyscale' alt="bitswits" /> We begin the process by taking a look at what type of website traffic is going to which pages. It is important to ensure that each page is receiving traffic from the right sources.</li>
                            <li className="d-flex align-items-start gap-4 mb-3"> <Image quality={75} src={tick} className='greyscale' alt="bitswits" /> We reduce the number of calls-to-action to a minimum and make sure that they match up with the potential intent of the user that has come across the landing page.</li>
                            <li className="d-flex align-items-start gap-4 mb-3"> <Image quality={75} src={tick} className='greyscale' alt="bitswits" /> We reduce the number of visual distractions on the page to focus the user's eyes on what will turn them into your next customer.</li>
                            <li className="d-flex align-items-start gap-4 mb-3"> <Image quality={75} src={tick} className='greyscale' alt="bitswits" /> On each landing page, we take a look to ensure that the messaging on the page is clear and matches the types of searches that would lead users to find the page in the first place. We add supporting copy to supplement any assertions.</li>
                            <li className="d-flex align-items-start gap-4 mb-3"> <Image quality={75} src={tick} className='greyscale' alt="bitswits" /> We eliminate any unnecessary requests for information from users by streamlining the process by which they either make a purchase or request your services.</li>
                            <li className="d-flex align-items-start gap-4 mb-3"> <Image quality={75} src={tick} className='greyscale' alt="bitswits" /> Our team adds elements to your landing pages so as to instill trust with the user.</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Sales