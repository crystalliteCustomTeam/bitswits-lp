import React from 'react'
import Image from 'next/image'
import { Card, Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Meeteam.module.css'
import logo from '../../public/images/icons/footerlogo.webp'
import Isam from '/public/meetourteam/Isaam.png'
import Farhan from '/public/meetourteam/Farhan.png'
import FY from '/public/meetourteam/FY.png'
import MI from '/public/meetourteam/Mi.png'
import Gavin from '/public/meetourteam/Gavin.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const meetourteamlp = () => {
  let MeetOurTeamSlider = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  let meetteam = [
    {
      teamMember: Isam,
      name: "Isam <br/> Rashid",
      position: "Sales Manager",
      email: "Isam@bitswits.co",
      phone: "0321-8280391",
    },
    {
      teamMember: Farhan,
      name: "Farhan <br/> Feroz Ali",
      position: "President",
      email: "Farhan@bitswits.co",
      phone: "0321-8280391",
    },
    {
      teamMember: FY,
      name: "Faisal Qadeer <br/> Yousufi",
      position: "Founder & CEO",
      email: "FY@bitswits.co",
      phone: "0321-8280391",
    },
    {
      teamMember: MI,
      name: "Muhammad <br/> Imran",
      position: "Co-Founder",
      email: "MI@bitswits.co",
      phone: "0321-8280391",
    },
    {
      teamMember: Gavin,
      name: "Gavin <br/> Fernandes",
      position: "Vice President",
      email: "Gavin@bitswits.co",
      phone: "0321-8280391",
    },
  ]
  return (
    <>
      <section className={`${styles.meetteam} meetteam`}>
        <Container className={`text-center`}>
          <Row>
            <Col lg={12}>
              <Image src={logo} className={`${styles.logo} img-fluid`} alt="Bitwits Meet Our Team" />
            </Col>
            <Col lg={12} className='mb-0 mt-4'>
              <h1>Tap to connect</h1>
            </Col>
          </Row>
          <Row className='justify-content-around mt-5'>
            {meetteam?.map((e, i) => (
              <Col lg={2}>
                <div key={i} className={`${styles.flipBox} ${styles.hoverEffect}`}>
                  <div className={styles.flipBoxInner}>
                    <div className={styles.flipBoxFront}>
                      <Image src={e.teamMember} quality={100} alt="Bitwits Meet Our Team" className='img-fluid' />
                      <h4 dangerouslySetInnerHTML={{ __html: e.name }} />
                      <p>{e.position}</p>
                    </div>
                    <div className={styles.flipBoxBack}>
                      <h4 dangerouslySetInnerHTML={{ __html: e.name }} />
                      <p>{e.position}</p>
                      <p>{e.email}</p>
                      <p>{e.phone}</p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}

          </Row>
        </Container>
      </section>
    </>
  )
}

export default meetourteamlp
