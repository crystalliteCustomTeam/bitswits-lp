import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import style from '@/styles/artificialIntelligence/Expertise.module.css';
import Image from 'next/image';
// import Ethereum from '../public/images/Ethereum.png';
import Polygon from '@/public/artificialIntelligence/Images/predictive-analysis.png';
import Binance from '@/public/artificialIntelligence/Images/custom-ai-solutions.png';
import Hyperledger from '@/public/artificialIntelligence/Images/ai-classification-tool.png';
import Corda from '@/public/artificialIntelligence/Images/ai-conversation-tools.png';
import Substrate from '@/public/artificialIntelligence/Images/sales-intelligence.png';
import Avalanche from '@/public/artificialIntelligence/Images/multimedia-analytics.png';
import Polkadot from '@/public/artificialIntelligence/Images/deep-learning.png';
import Ethereum from '@/public/artificialIntelligence/Images/multimedia-analytics.png';
import NearProtocol from '@/public/artificialIntelligence/Images/robotics-process-automation.png';
import Slider from "react-slick";

const Expertise = (props) => {

    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
              breakpoint: 1024,
              settings: {
                  dots: true,
                  infinite: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 2000,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  dots: true,
                  infinite: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 2000,
              }
          },
          {
              breakpoint: 767,
              settings: {
                  dots: true,
                  infinite: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 2000,
              }
          },
          {
              breakpoint: 575,
              settings: {
                  dots: true,
                  infinite: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 2000,
              }
          }
      ]
    };  

    return(
        <>
           <section className={`${style.secSpacing} bg-black`}>
                <Container>
                    <Row>
                        <Col lg={9} className='pb-2'>
                            <h4 className="fw300 f28 text-white mb-3">{props.exTitle}</h4>
                            <p className='text-white fw300'>{props.exPara}</p>
                        </Col>
                    </Row>
                    <Row className={`${style.border1} ${style.experts} justify-content-center align-items-center text-center position-relative`}>
                    
                        <Col lg={6} className={`${style.border} pt-4 pb-4`}>
                        <div className='d-none d-lg-block d-md-block d-sm-none'>
                            <Row className='justify-content-center align-items-center text-center mt-5'>
                               
                                <Col lg={4} className='mb-5 position-relative'>
                                    <div className={style.feature}>
                                        <Image quality={75} src={Ethereum} alt="Blockchain" width={57} className='img-fluid'/>
                                    </div>
                                    <h4 className='f20 fw700 text-white'>Machine <br/> Learning</h4>
                                    <div className={style.borderX}></div>
                                </Col>
                                <Col lg={4} className='mb-5'>
                                    <div className={style.feature}>
                                        <Image quality={75} src={Polygon} alt="Blockchain" width={57} className='img-fluid'/>
                                    </div>
                                    <h4 className='f20 fw700 text-white'>Predictive <br/> Analysis</h4>
                                
                                </Col>
                                <Col lg={4} className='mb-5'>
                                    <div className={style.feature}>
                                        <Image quality={75} src={Binance} alt="Blockchain" width={57} className='img-fluid'/>
                                    </div>
                                    <h4 className='f20 fw700 text-white'>Custom AI <br/>     Solutions</h4>
                                </Col>
                                <Col lg={4} className='mb-5'>
                                    <div className={style.feature}>
                                        <Image quality={75} src={Hyperledger} alt="Blockchain" width={57} className='img-fluid'/>
                                    </div>
                                    <h4 className='f20 fw700 text-white'>AI Classification Tool</h4>
                                </Col>
                                <Col lg={4} className='mb-5'>
                                    <div className={style.feature}>
                                        <Image quality={75} src={Corda} alt="Blockchain" width={57} className='img-fluid'/>
                                    </div>
                                    <h4 className='f20 fw700 text-white'>AI Conversation Tools</h4>
                                </Col>
                                <Col lg={4} className='mb-5'>
                                    <div className={style.feature}>
                                        <Image quality={75} src={Substrate} alt="Blockchain" width={57} className='img-fluid'/>
                                    </div>
                                    <h4 className='f20 fw700 text-white'>Sales <br/> Intelligence</h4>
                                </Col>
                                <Col lg={4} className='mb-5'>
                                    <div className={style.feature}>
                                        <Image quality={75} src={Avalanche} alt="Blockchain" width={57} className='img-fluid'/>
                                    </div>
                                    <h4 className='f20 fw700 text-white'>Multimedia Analytics</h4>
                                </Col>
                                <Col lg={4} className='mb-5'>
                                    <div className={style.feature}>
                                        <Image quality={75} src={Polkadot} alt="Blockchain" width={57} className='img-fluid'/>
                                    </div>
                                    <h4 className='f20 fw700 text-white'>Deep <br/> Learning</h4>
                                </Col>
                                <Col lg={4} className='mb-5'>
                                    <div className={style.feature}>
                                        <Image quality={75} src={NearProtocol} alt="Blockchain" width={57} className='img-fluid'/>
                                    </div>
                                    <h4 className='f20 fw700 text-white'>Robotic Process Automation</h4>
                                </Col>
                               
                            </Row>
                        </div>
                        <div className='d-block d-lg-none d-md-none d-sm-block text-center mx-auto'>
                           
                            <Row className='justify-content-center align-items-center text-center mt-5'>
                            <Slider {...settings} className='d-flex justify-content-center align-items-center text-center'>
                            <Col lg={4} className='mb-5 position-relative'>
                                <div className={style.feature}>
                                    <Image quality={75} src={Ethereum} alt="Blockchain" width={57} className='img-fluid'/>
                                </div>
                                <h4 className='f20 fw700 text-white'>Machine <br/> Learning</h4>
                                <div className={style.borderX}></div>
                            </Col>
                            <Col lg={4} className='mb-5'>
                                <div className={style.feature}>
                                    <Image quality={75} src={Polygon} alt="Blockchain" width={57} className='img-fluid'/>
                                </div>
                                <h4 className='f20 fw700 text-white'>Predictive Analysis</h4>
                            
                            </Col>
                            <Col lg={4} className='mb-5'>
                                <div className={style.feature}>
                                    <Image quality={75} src={Binance} alt="Blockchain" width={57} className='img-fluid'/>
                                </div>
                                <h4 className='f20 fw700 text-white'>Custom AI Solutions</h4>
                            </Col>
                            <Col lg={4} className='mb-5'>
                                <div className={style.feature}>
                                    <Image quality={75} src={Hyperledger} alt="Blockchain" width={57} className='img-fluid'/>
                                </div>
                                <h4 className='f20 fw700 text-white'>AI Classification Tool</h4>
                            </Col>
                            <Col lg={4} className='mb-5'>
                                <div className={style.feature}>
                                    <Image quality={75} src={Corda} alt="Blockchain" width={57} className='img-fluid'/>
                                </div>
                                <h4 className='f20 fw700 text-white'>AI Conversation Tools</h4>
                            </Col>
                            <Col lg={4} className='mb-5'>
                                <div className={style.feature}>
                                    <Image quality={75} src={Substrate} alt="Blockchain" width={57} className='img-fluid'/>
                                </div>
                                <h4 className='f20 fw700 text-white'>Sales Intelligence</h4>
                            </Col>
                            <Col lg={4} className='mb-5'>
                                <div className={style.feature}>
                                    <Image quality={75} src={Avalanche} alt="Blockchain" width={57} className='img-fluid'/>
                                </div>
                                <h4 className='f20 fw700 text-white'>Multimedia Analytics</h4>
                            </Col>
                            <Col lg={4} className='mb-5'>
                                <div className={style.feature}>
                                    <Image quality={75} src={Polkadot} alt="Blockchain" width={57} className='img-fluid'/>
                                </div>
                                <h4 className='f20 fw700 text-white'>Deep Learning</h4>
                            </Col>
                            <Col lg={4} className='mb-5'>
                                <div className={style.feature}>
                                    <Image quality={75} src={NearProtocol} alt="Blockchain" width={57} className='img-fluid'/>
                                </div>
                                <h4 className='f20 fw700 text-white'>Robotic Process Automation</h4>
                            </Col>
                            </Slider>
                            </Row>

                         </div>
                        </Col>
                   
                        <Col lg={6} className='position-relative'>
                            <div className={style.exborder}>
                                <div className={style.bottomBanner}>
                                    <h3 className='fw400 f20 mb-5'>Discover patterns and concealed trends from massive amounts of data with the help of machine learning. Build AI apps on sophisticated algorithms to enable your information systems to independently analyze and forecast outcomes.</h3>
                                </div>
                            </div>
                            <div className={style.vborder}></div>
                        </Col>
                   
                    </Row>
                </Container>
           </section>
        </>
    )
}
export default Expertise