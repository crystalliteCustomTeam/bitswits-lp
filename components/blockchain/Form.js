// import Image from 'next/image';
import React from 'react';
// import Link from 'next/link';
// import { Col, Row } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
import style from '@/styles/blockchain/Form.module.css'

const Form = (props) => {
    return (
        <>   
                  <form className={style[props.formshome]}> 
                        {/* <label htmlFor="name"> Name *</label> */}
                        <input className={style.formControl} type="text" placeholder="Name" required />
                        {/* <label htmlFor="phone">Phone *</label> */}
                        <input  className={style.formControl} type="text" placeholder="Phone Number" required />      
                        {/* <label htmlFor="email">Email  *</label> */}
                        <input  className={style.formControl} type="email" placeholder="Email" required />
                        {/* <label htmlFor="web">Your Website *</label> */}
                        <textarea type="textarea" className={style.formControl} placeholder="Message"  ></textarea>
                        <button className={style.btnprimary}>Submit</button>
                    </form>
        </>
    )
}

export default Form