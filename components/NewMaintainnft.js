import React from 'react'
import Image from 'next/image';
import styles from "@/styles/NewHomeMaintainnft.module.css";

import { Container, Row, Col } from 'react-bootstrap'
//
import cardNine from '../public/newHomePage/images/newMaintain9.png'
import { useEffect, useRef } from "react";
import lottie from 'lottie-web';

import mobileapp from '../public/mobileapp.json';
import game from '../public/game.json';
import blockchain from '../public/blockchain.json';
import ai from '../public/artificial.json';
import web from '../public/webapp.json';
import uiux from '../public/uiuxapp.json';
import arvrapp from '../public/arvr.json';
import internetapp from '../public/internetofthings.json';




const NewMaintainlogo = () => {
    const anime = useRef(null);

    useEffect(() => {

        lottie.loadAnimation({
            container: document.getElementById('lottie'),
            animationData: game,
            loop: true,
            autoplay: true,
        });

        lottie.loadAnimation({
            container: document.getElementById('blockchain'),
            animationData: blockchain,
            loop: true,
            autoplay: true,
        });
        lottie.loadAnimation({
            container: document.getElementById('artifical'),
            animationData: ai,
            loop: true,
            autoplay: true,
            renderer: "svg",
        });



        lottie.loadAnimation({
            container: document.getElementById('lottie-container'),
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: mobileapp,
        });

        lottie.loadAnimation({
            container: document.getElementById('lottie-web'),
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: web,
        });
        lottie.loadAnimation({
            container: document.getElementById('lottie-uiux'),
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: uiux,
        });
        lottie.loadAnimation({
            container: document.getElementById('lottie-arvrapp'),
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: arvrapp,
        });
        lottie.loadAnimation({
            container: document.getElementById('lottie-internetapp'),
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: internetapp,
        });





    }, []);

    return (
        <>

            <section className={styles.newHomeBg}>

                <Container>

                    <Row className='g-3'>
                        <Col lg={12}>
                            <p className={` f-20 font-bold text-white text-center mb-3`}>Features
                            </p>
                            <h1 className='text-white f-55 font-bold text-center pb-4'>Unlock Treasure Troves of Fun with <br></br> Play-to-Earn NFT Games!</h1>
                        <p className='white center mb-5'>Are you ready to take your gaming experience to the next level? With play-to-earn NFT games, the possibilities are endless! Whether you're a hardcore collector or just looking for some extra cash, these interactive experiences can offer you something special. Explore the features of play-to-earn games, and get the ball rolled today!</p>
                        
                        </Col>
                        <Col sm={6} lg={4} className={styles.earn}>
                            <div className={styles.app}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Take Home What You Earn</h3>
                                    <p className={styles.para}>
                                    Play-to-Earn NFT games create an opportunity for players to take home what they earn, either through rewards or tokens. With these games, you can build up your wealth without ever taking a loss!
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={4} className={styles.earn}>
                            <div className={styles.app1}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Rewarding Challenges</h3>
                                    <p className={styles.para}>
                                    With these NFT games, you will face rewarding challenges that test your abilities and allow you to earn rewards or tokens for completing them. It's a great way to increase your skills and expand your knowledge.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} className={styles.earn}>
                            <div className={styles.app2}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Strengthen Your Character</h3>
                                    <p className={styles.para}>
                                    These Play-to-Earn NFT games can help you develop your character and increase confidence. As you make progress in the game, you learn more about yourself and can become a better player.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={12} className={styles.earn}>
                            <div className={styles.app3}>
                                <Row className='align-items-center'>
                                    <Col xl={5}>
                                        <div className={styles.paraThreeContent}>
                                            <h3 className='text-white font25 font-bold '>Create Your Own Path</h3>
                                            <p className={styles.para1}>
                                            With Play-to-Earn NFT games, you can be your own boss. Create an economy for yourself by earning tokens, rewards, and additional items to help you progress in the game. The possibilities are endless with what you can achieve!
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={5}>
                                        {/* <div id='artifical' ></div> */}
                                    </Col>
                                </Row>

                            </div>
                        </Col>

                        <Col sm={6} className={styles.earn}>
                            <div className={styles.app4}>
                                <div>
                                    <h3 className='text-white font25 font-bold text-center'>Diversity of Games</h3>
                                    <p className={styles.possibilities}>
                                    A massive variety of NFT games is available for players to choose from, so you can find something that fits your interests and tastes. From sports games to puzzle games, there's something for everyone!
                                    </p>
                                </div>
                            </div>

                        </Col>
                        <Col sm={6} className={styles.earn}>
                            <div className={styles.app5}>
                                <div>
                                    <h3 className='text-white font25 font-bold text-center'>Collect Rare Items</h3>
                                    <p className={styles.possibilities}>
                                    Step into a world of exclusive collectibles with NFT games! Unlock rare items that can't be found in other games and flaunt your one-of-a-kind collection to your friends. It's time to level up your gaming experience and invest in something unique.
                                    </p>
                                </div>
                            </div>

                        </Col>


                        <Col sm={6} lg={4} className={styles.map}>
                            <div className={styles.app11}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Show Off Your Skills</h3>
                                    <p className={styles.para}>
                                    What better way to show off your skills than playing Play-to-Earn NFT games? You can gain recognition as you progress in the game and make your mark on the gaming world.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={4} className={styles.map}>
                            <div className={styles.app22}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Make Connections</h3>
                                    <p className={styles.para}>
                                    Play-to-Earn NFT games are a great way to connect with other players and enjoy the gaming experience together. Connecting with others helps build an online community and fosters collaboration and friendship.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} className={styles.map}>
                            <div className={styles.app33}>
                                <div className={styles.cardContent}>
                                    <h3 className='text-white font25 font-bold'>Compete for Rewards</h3>
                                    <p className={styles.para}>
                                    Competing in these games allows you to compete for rewards or tokens, which can be used to purchase additional items, upgrade your character, and even purchase real-world products! With the challenge of competition comes great rewards! With Play-to-Earn NFT games, you can truly have it all!
                                    </p>
                                </div>
                            </div>
                        </Col>

                     

                      
                     
                    </Row>

                </Container>

            </section>


        </>
    )
}

export default NewMaintainlogo