import React from 'react'
import styles from "@/styles/Formlp2.module.css";
import Image from 'next/image';
import { Container, Row } from 'react-bootstrap'
import Link from 'next/link';


const Formlp2 = () => {



    return (
        <>

            <section className={styles.conform}>

                <Container>

                    <Row>
                        <h2 className='white f-60 f-700 center mb-5'>Turn Your App Idea Into An App</h2>
                        <form className={styles.formalign}>

                            <input type="text" placeholder="Name" id="name" name="name" required />
                            <input type="email" placeholder="Email" id="email" name="email" required />
                            <input type="phone" maxlength="15" id="phone" name="phone" placeholder="Phone Number" required />


                            <button type="submit" name="saves1" id="butact1" class="primary-btn">Submit</button>
                        </form>
                    </Row>
                </Container>


            </section>
        </>
    )
}

export default Formlp2