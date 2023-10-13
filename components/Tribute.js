import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import styles from '@/styles/Tribute.module.css'

const Tribute = (props) => {
  return (
    <>

    <section className={styles.point}>
        <Container>
            <Row>
                <Col>
                <h3 className='f-20 f-700 white t-center '> {props.subtitle} </h3>
                <h2 className='f-50 f-700 white t-center'> {props.title} </h2>
                <p className='f-16 f-500 white t-center'> {props.text} </p>

                <video controls className={`${styles.bgVideo}`} muted
                src={props.video} type="video/mp4"></video>

                </Col>
            </Row>
        </Container>
    </section>
    
    
    </>
  )
}

export default Tribute