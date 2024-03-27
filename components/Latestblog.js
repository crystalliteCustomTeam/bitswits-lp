import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Latestblog.module.css";

const Latestblog = (props) => {
    return (
        <>
            <section className={styles.ourBlogs}>
                <Container>
                    <Row className='gy-5'>
                        <Col lg={12}>
                            <h4 className='font40 black f-700 center'>Our Latest Blog Posts</h4>
                        </Col>
                        {props.blogBox.map((blog, index) => (
                            <Col lg={4}>
                                <div key={index} className={`${styles.blogBox} d-flex flex-column gap-4 pb-5`}>
                                    <Image loading='lazy' src={blog.img} alt='BitsWits' className='img-fluid mb-2' />
                                    <div className='px-3'>
                                        <h4 className='font20 black f-700'>{blog.title}</h4>
                                        <p className='font16 fw400 m-0'>{blog.content}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                        <Col lg={12}>
                            <Link href="/blog" className={styles.blogBtn}>View All</Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Latestblog
