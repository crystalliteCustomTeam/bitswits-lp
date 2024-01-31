import React from 'react'
import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Error.module.css'
import Link from 'next/link'

const Error = () => {
    return (
        <>
            <Head>
                <title>Page not found - Bitswits</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>



            <div className={styles.error}>
                <Container>
                    <Row>
                        <Col>
                            <h2 className='fw600 font60 color-blue t-center font-f mb-4'>404 NOT FOUND</h2>
                            <h4 className="fw500 font40 color-white t-center font-f mb-2">THIS IS SOMEWHAT EMBARRASSING, ISN’T IT?</h4>
                            <p className="font18 fw400 color-white t-center font-f mb-4">It looks like nothing was found at this location. Maybe try a search?</p>
                            <div className='mt-4 t-center'>
                                <Link href="javascript:$zopim.livechat.window.show();" className={styles.btn404}>LET'S DISCUSS</Link>
                                <Link href="tel:13123795987" className={styles.btn404}>+1 312 379 5987</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Error