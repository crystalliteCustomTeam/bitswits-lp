import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import style from '@/styles/artificialIntelligence/AiSoftRevolution.module.css';
import MetaBtn from './MetaBtn';


const AiSoftware = (props) => {
    return(
        <>
           <section className={`bg-black ${style.aiSoftware}`}>
                <Container>
                    <Row className='justify-content-center align-items-center'>
                        <Col lg={7} className='pt-5 pb-5 border-top border-bottom'>
                            <h2 className="text-white f40 mb-2">Let’s build Genius <span className='f50 fw700 grdiant'>AI Software Business</span> Together?</h2>
                            <h4 className="fw300 f30 text-white mb-3"></h4>
                            <p className='text-white fw300 mb-4'>You are just a call away from meeting highly skilled AI app developers.</p>
                            <div className={`${style.secBtns}`}>
                                <MetaBtn></MetaBtn>
                            </div>
                        </Col>
                        <Col lg={5} className=''>

                            
                            <div>
                                <video  className={`${style.bgVideo} img-fluid`} width={800} autoPlay muted loop src="../../../artificialIntelligence/Images/Aisoftwaredesign.mp4" type="video/mp4"></video>
                            </div>
                            
                        
                        </Col>
                    </Row>
                </Container>
           </section>
        </>
    )
}
export default AiSoftware