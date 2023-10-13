import React from 'react'
import styles from '@/styles/Incredible.module.css'
import { Col } from 'react-bootstrap'
import Link from 'next/link'


const Incredible = ({ fontpont }) => {
    return (


        <>
            {fontpont.map((item, i) =>
                <Col md={4} key={i}>
                    <div className={styles.serveimg}>
                        <h4> {item.title} </h4>
                        <p> {item.text}</p>
                        {item.btn1 &&
                            <Link href="#" className={styles.more}> {item.btn1}  </Link>
                        }
                    </div>
                </Col>
            )}
        </>



    )
}

export default Incredible