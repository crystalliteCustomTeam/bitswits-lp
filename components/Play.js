import React from 'react'
import styles from '@/styles/Play.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Play = ({ demand }) => {

  

    return (
        <>



            <div className={styles.serveimg}>


                {
                    demand.map((item, i) => (

                        <Link key={i} className={item.click1 === item.data ? styles.active : ''} href='javascript:;' onClick={() => item.fun(item.click1)}> {item.title} </Link>


                    ))
                }



            </div>
            {demand.map((item, i) => (

                <div className={styles.serveimg1} key={i} >
                    {item.click1 === item.data &&
                        <Image quality={75} src={item.img} alt='bitswits' className='img-fluid' />
                    }


                </div>

            ))}





         




        </>
    )
}

export default Play