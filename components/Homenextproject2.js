import React from 'react'
import styles from '@/styles/Homenextproject.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'


const Homenextproject = () => {


  return (
    <>

      <section className={styles.texkp}>
        <Container>
          <Row>
            <Col xl={12}>
              <div className={styles.closing}>
                <div>
                  <h3>Brace yourself for an App-venture! </h3>
                </div>
                <div>
                  <Link href='tel:(833) 500-6007'>LET'S CONNECT</Link>
                </div>
              </div>

            </Col>
          </Row>

        </Container>

      </section>

    </>
  )
}

export default Homenextproject