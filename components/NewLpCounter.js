import React from 'react'
import styles from '@/styles/NewLpCounter.module.css'

const NewLpCounter = () => {
    return (
        <>
            <section className={styles.count}>
                <div className="row f-center align-items-start">
                    <div className="col-lg-3">
                        <div className={styles.counterBox}>
                            <h3 className="font50 font-bold white mb-0">
                                2000+
                            </h3>
                            <p className="font14 font-bold white">Products Delivered</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={styles.counterBox}>
                            <h3 className="font50 font-bold white mb-0">
                                1000+
                            </h3>
                            <p className="font14 font-bold white">Skilled Techies</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={styles.counterBox}>
                            <h3 className="font50 font-bold white mb-0">
                                35+
                            </h3>
                            <p className="font14 font-bold white">Countries Served</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={styles.counterBox}>
                            <h3 className="font50 font-bold white mb-0">
                                $950m
                            </h3>
                            <p className="font14 font-bold white">Investment Raised for Startups</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewLpCounter
