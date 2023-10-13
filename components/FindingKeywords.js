import React from 'react'
import styles from '@/styles/Findingkeywords.module.css'
import process from '../public/images/process/process.png'
import { Container,Row,Col } from 'react-bootstrap'
import Image from 'next/image'
const FindingKeywords = () => {
  return (
 <section className={styles.research}>
    <Container>
        <Row>
            <Col xl={12}>
                <h3 className='center mb-4 font-bold'>Our Process of Finding Keywords</h3>
                <h4 className='center mb-5'>A little progress to BIG results!</h4>
                <Image quality={75} src={process} className='img-fluid greyscale'></Image>
            </Col>
        </Row>
    </Container>
 </section>
  )
}

export default FindingKeywords