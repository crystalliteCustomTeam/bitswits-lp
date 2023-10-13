import React from 'react'
import styles from '@/styles/Play.module.css'
import Link from 'next/link'

const Tabplays = ({ demand1 }) => {



    return (
        <>


            <div className={styles.serveimg}>

                {demand1.map((item1, j) => (
                    <>

                        <Link key={j} className={item1.click2 === item1.data1 ? styles.active : ''} href='javascript:;' onClick={() => item1.fun1(item1.click2)}> {item1.title1} </Link>


                    </>
                ))}

            </div>
            <div className={styles.tabp}>
                {demand1.map((item1, j) => (

                    <div key={j} >
                        {item1.click2 === item1.data1 &&
                            <p className='f-16  f-500 t-center'> {item1.text} </p>
                        }
                    </div>

                ))}
            </div>



        </>
    )
}

export default Tabplays