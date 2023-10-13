import React from 'react'
// import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/blockchain/cta.module.css';
import Image from 'next/image';
import Link from 'next/link';
// import posters from '../public/images/poster.png';
import phone from '@/public/blockchain/images/phone.png';

const cta = (props) => {
    return(
        <>
            <div className='mt-4 d-md-flex justify-content-left align-content-left mobile-center'>
                <span className='pe-3 text-sm-center'>
                    <Link className='btn btn-primary marginb' href="#">{props.discuss}</Link>
                </span>
                <span className='line'></span>
                <span  className='px-3 pt-sm-2 text-sm-center'>
                    <Image quality={75} src={phone} alt='logo' width={20} /> 
                    <Link className={styles.asnumber} href="tel:1-844-400-0025"> {props.number}</Link>
                </span> 
            </div>
        </>
    )
}
export default cta