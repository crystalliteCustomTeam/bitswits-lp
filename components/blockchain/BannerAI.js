import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Col, Row, Container } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
import style from '@/styles/BannerAi.module.css';
import ele from '../public/images/element2.svg';
import icontill from '../public/images/icontill.svg';
import CountUp from 'react-countup';
import cta from '@/components/cta';
import phone from '../public/images/phone.svg';
import { FaComment } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import Logoslide from '../components/LogoSlide';
  
function BannerAI(){

    return (
        <>
       
            <div className={style.HomeBanner}>
            <div className={style.banner2}>
                <Container>
                    <Row className='justify-content-end align-items-end'>
                        <Col lg={12} >
                            <div>
                                <div className={style.Lcontent}>
                                    <h1 className='text-white mb-2 pl-4'>
                                    <span className='fw400 font20 txt-primary'> Artificial Intelligence </span> <br/>
                                    <span className='fw700 font50'>Development</span></h1>
                            <p className='text-white f15'>Blocktech Brew is a top Al development company with core expertise in deep learning,machine learning, NLP, computer vision technology <br/> and neural networks. We help you build custom Al solutions that will not only automate repetitive tasks and overcome business difficulties but also offer accurate evaluation & prediction reports by analysing big data.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className={style.homeVideo}>
                    <video className={style.vid} src="/public/blockchain/images/homeback.mp4" type="video/mp4"></video>
                </div>
                <Logoslide className={style.Banners}/>
            </div>
            </div>
        </>
    );
}
export default BannerAI;