import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap'
import Homebanner from '@/components/Homebanner'
import Publication from '@/components/Publication'
import Range from '@/components/Range'
import Hireus from '@/components/Hireus'
import Consultancy from '@/components/Consultancy'
import About from '@/components/About'
import ClientsThinklp from '@/components/ClientsThinklp'
import Creativeopportunities from '@/components/Creativeopportunities'
import Developer from '@/components/Developer'
import Counter from '@/components/Counter';
import Yearsofexpertise from '@/components/Yearsofexpertise';
import Incredible from '@/components/Incredible';
import Play from '@/components/Play';
import Tabplays from '@/components/Tabplays';
import Combination from '@/components/Combination';
import Tribute from '@/components/Tribute';
import { useState } from 'react'
import pony from '/public/images/image2d/img2d.jpg'
import pony1 from '/public/images/image2d/img2d2.jpg'
import pony2 from '/public/images/image2d/1.jpg'
import pony3 from '/public/images/image2d/2.jpg'
import pony4 from '/public/images/image2d/3.jpg'
import pony5 from '/public/images/image2d/4.jpg'
import pony6 from '/public/images/image2d/5.jpg'
import pony7 from '/public/images/image2d/6.jpg'
import pony8 from '/public/images/image2d/7.jpg'
import Link from 'next/link'
import pic1 from '/public/images/supernft/1.png'
import pic2 from '/public/images/supernft/2.png'
import pic3 from '/public/images/supernft/3.png'
import pic4 from '/public/images/supernft/4.png'
import pic5 from '/public/images/supernft/5.png'

import engagement from '/public/images/step/3.png'


import icon1 from '../public/images/nftgameservices/sideimg.png'
import icon2 from '../public/images/nftgameservices/game.png'
import icon3 from '../public/images/nftgameservices/web30.png'
import icon4 from '../public/images/nftgameservices/blockchain.png'
import icon5 from '../public/images/nftgameservices/webflow.png'
import icon6 from '../public/images/nftgameservices/artifical.png'
import Ourservices from '@/components/Ourservices'
import Contact from '@/components/Contact'
import NewSliderFy from '@/components/NewSliderFy'
import Aboutlp from '@/components/Aboutlp'
import NewBannerFy from '@/components/NewBannerFy'
import Consultation2 from '@/components/Consultation2'
import Consultation from '@/components/Consultation'


export default function nftgamedevelopmentcompanylp() {




    const [gameshow, gameapp] = useState('tab1');

    function game(tab) {
        gameapp(tab);
    }


    const services1 = [

        {
            id: '1',
            title: 'Take Home What You Earn',
            text: (<> Play-to-Earn NFT games create an opportunity for players to take home what they earn, either through rewards or tokens. With these games, you can build up your wealth without ever taking a loss!
            </>),
            click1: 'tab1',
            img: icon1,
            fun: game,
            data: gameshow
        },
        {
            id: '2',
            title: 'Rewarding Challenges',
            text: (<> With these NFT games, you will face rewarding challenges that test your abilities and allow you to earn rewards or tokens for completing them. It's a great way to increase your skills and expand your knowledge. </>),
            click1: 'tab2',
            img: icon2,
            fun: game,
            data: gameshow
        },
        {
            id: '3',
            title: 'Strengthen Your Character',
            text: (<> These Play-to-Earn NFT games can help you develop your character and increase confidence. As you make progress in the game, you learn more about yourself and can become a better player. </>),
            click1: 'tab3',
            img: icon3,
            fun: game,
            data: gameshow
        },
        {
            id: '4',
            title: 'Create Your Own Path',
            text: (<> With Play-to-Earn NFT games, you can be your own boss. Create an economy for yourself by earning tokens, rewards, and additional items to help you progress in the game. The possibilities are endless with what you can achieve! </>),
            click1: 'tab4',
            img: icon4,
            fun: game,
            data: gameshow
        },
        {
            id: '5',
            title: 'Diversity of Games',
            text: (<> A massive variety of NFT games is available for players to choose from, so you can find something that fits your interests and tastes. From sports games to puzzle games, there's something for everyone! </>),
            click1: 'tab5',
            img: icon5,
            fun: game,
            data: gameshow
        },
        {
            id: '6',
            title: 'Collect Rare Items',
            text: (<>Step into a world of exclusive collectibles with NFT games! Unlock rare items that can't be found in other games and flaunt your one-of-a-kind collection to your friends. It's time to level up your gaming experience and invest in something unique. </>),
            click1: 'tab6',
            img: icon6,
            fun: game,
            data: gameshow
        },


    ]

    const incredible = [


        {
            title: 'IOS 2D Game Development',
            text: 'We offer top-notch iOS 2D game development services that combine top-of-the-line technology and creative designs. BitsWits is a master at creating visually compelling games with captivating storylines, vibrant characters, and intense levels. From conceptualization to design and launch, our team ensures you get a complete gaming experience that stands out from the crowd.',
            btn1: (
                <>
                    Consult A Gaming Expert To Begin
                </>
            ),

        },
        {
            title: 'Android 2D Game Development',
            text: 'BitsWits is the go-to destination for all your Android 2D game development needs. From creating solid and user-friendly architecture to stunning visuals and fast loading times, we ensure the outcome is exceptional. With our expertise in Java language and open-source platforms like Unity 2D & Unreal Engine, we provide high-end services for game development, design & testing.',
            btn1: (
                <>
                    Consult A Gaming Expert To Begin
                </>
            ),

        },

        {
            title: '2D Games For Consoles And PCs',
            text: 'BitsWits provides the best 2D games for PCs and consoles. With our expansive library of titles, you can get your hands on classic console and arcade games and explore new worlds full of adventure, excitement, and challenge. We create intricate storylines with captivating characters that draw players in from start to finish. We also work closely with our partners to develop world-class titles for platforms such as Xbox, PlayStation, Nintendo Switch, and Windows PC.',
            btn1: (
                <>
                    Consult A Gaming Expert To Begin
                </>
            ),

        },



    ]


    const fontpont = [

        {
            title: 'Take Home What You Earn',
            text: 'Play-to-Earn NFT games create an opportunity for players to take home what they earn, either through rewards or tokens. With these games, you can build up your wealth without ever taking a loss!',


        },
        {
            title: 'Rewarding Challenges',
            text: (<> With these NFT games, you will face rewarding challenges that test your abilities and allow you to earn rewards or tokens for completing them. It's a great way to increase your skills and expand your knowledge. </>),


        },
        {
            title: 'Strengthen Your Character',
            text: (<> These Play-to-Earn NFT games can help you develop your character and increase confidence. As you make progress in the game, you learn more about yourself and can become a better player. </>),


        },

        {
            title: 'Create Your Own Path',
            text: (<> With Play-to-Earn NFT games, you can be your own boss. Create an economy for yourself by earning tokens, rewards, and additional items to help you progress in the game. The possibilities are endless with what you can achieve! </>),


        },
        {
            title: 'Diversity of Games',
            text: (<> A massive variety of NFT games is available for players to choose from, so you can find something that fits your interests and tastes. From sports games to puzzle games, there's something for everyone! </>),


        },
        {
            title: 'Collect Rare Items',
            text: (<> Step into a world of exclusive collectibles with NFT games! Unlock rare items that can't be found in other games and flaunt your one-of-a-kind collection to your friends. It's time to level up your gaming experience and invest in something unique. </>),


        },
        {
            title: 'Show Off Your Skills',
            text: (<> What better way to show off your skills than playing Play-to-Earn NFT games? You can gain recognition as you progress in the game and make your mark on the gaming world. </>),


        },
        {
            title: 'Make Connections',
            text: (<> Play-to-Earn NFT games are a great way to connect with other players and enjoy the gaming experience together. Connecting with others helps build an online community and fosters collaboration and friendship. </>),


        },
        {
            title: 'Compete for Rewards',
            text: (<> Competing in these games allows you to compete for rewards or tokens, which can be used to purchase additional items, upgrade your character, and even purchase real-world products! With the challenge of competition comes great rewards! With Play-to-Earn NFT games, you can truly have it all! </>),


        },


    ]


    const [activeTab, setActiveTab] = useState('tab1');
    function handleTabChange(tab) {
        setActiveTab(tab);
        console.log(tab);
    }

    const demand = [

        {
            title: '2D Environment',
            img: pony,
            click1: 'tab1',
            fun: handleTabChange,
            data: activeTab
        },
        {
            title: '3D Environment',
            img: pony1,
            click1: 'tab2',
            fun: handleTabChange,
            data: activeTab
        },
        {
            title: '2D Character Art',
            img: pony2,
            click1: 'tab3',
            fun: handleTabChange,
            data: activeTab
        },
        {
            title: '2D Background Art',
            img: pony3,
            click1: 'tab4',
            fun: handleTabChange,
            data: activeTab
        },
        {
            title: 'UI/UX',
            img: pony4,
            click1: 'tab5',
            fun: handleTabChange,
            data: activeTab
        },
        {
            title: 'Character Design',
            img: pony5,
            click1: 'tab6',
            fun: handleTabChange,
            data: activeTab
        },
        {
            title: 'Casual Art',
            img: pony6,
            click1: 'tab7',
            fun: handleTabChange,
            data: activeTab
        },
        {
            title: 'Slots Games Concept Art',
            img: pony7,
            click1: 'tab8',
            fun: handleTabChange,
            data: activeTab
        },
        {
            title: 'Hidden Objects',
            img: pony8,
            click1: 'tab9',
            fun: handleTabChange,
            data: activeTab
        },

    ]


    const [activeTab1, setActiveTab1] = useState('tab');
    function handleTabChange1(tab1) {
        setActiveTab1(tab1);
    }


    const demandpont = [

        {
            title1: 'NFT Game Concept Design',
            text: 'We specialize in crafting engaging and entertaining NFT experiences through our unique approach to concept design and game mechanics. BitsWits is simply bridging the gap between concept and reality.',
            click2: 'tab',
            fun1: handleTabChange1,
            data1: activeTab1,




        },
        {
            title1: 'Play-to-Earn Game Development',
            text: 'With our Play-to-Earn NFT games, you can create a unique game that rewards players with valuable digital tokens as they progress through levels or missions. It’s a great way to monetize your gaming experience and earn money while playing video games.',
            click2: 'tab1',
            fun1: handleTabChange1,
            data1: activeTab1,


        },
        {
            title1: 'Custom NFT Game Development',
            text: 'We use our cutting-edge technology and industry-leading expertise to create high-quality non-fungible tokens that allow you to offer exclusive gaming experiences like no other. We specialize in building custom NFT games that are fun and engaging and provide a truly memorable gaming experience.',
            click2: 'tab2',
            fun1: handleTabChange1,
            data1: activeTab1,


        },
        {
            title1: 'NFT Integration in Games',
            text: 'We specialize in integrating Non-Fungible Tokens (NFTs) into games, allowing publishers to create memorable and unique experiences for their players. Through our innovative solutions, we enable game players to collect, own, and trade rare digital items with complete control over them.',
            click2: 'tab3',
            fun1: handleTabChange1,
            data1: activeTab1,


        },





    ]




    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charset="UTF-8" />
                <title>Reliable NFT Game Development Company - Bitswits!</title>
                <meta name="description" content="Don't let your game idea go unrealized. Our NFT game developers have the expertise to create games that engage players on every level." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Reliable NFT Game Development Company - Bitswits!" />
                <meta property="og:description" content="Don't let your game idea go unrealized. Our NFT game developers have the expertise to create games that engage players on every level." />
                <meta property="og:url" content="https://www.bitswits.co/nft-game-development-company/" />
                <meta property="og:site_name" content="Reliable NFT Game Development Company - Bitswits!" />
                <link rel="canonical" href="https://www.bitswits.co/nft-game-development-company/" />
                <meta name="msvalidate.01" content="7BBFFA763CEB48CAC0828E22D44DD12B" />
                <meta name="DC.title" content="nft game development company, nft game design company, nft game developers, nft game designers" />
                <meta name="geo.region" content="US-CA" />
                <meta name="geo.placename" content="Los Angeles" />
                <meta name="geo.position" content="36.701463;-118.755997" />
                <meta name="ICBM" content="36.701463, -118.755997" />
                <meta name="DC.title" content="nft game development company, nft game design company, nft game developers, nft game designers" />
                <meta name="geo.region" content="US-DE" />
                <meta name="geo.placename" content="Dover" />
                <meta name="geo.position" content="38.692045;-75.401331" />
                <meta name="ICBM" content="38.692045, -75.401331" />
                <meta name="DC.title" content="nft game development company, nft game design company, nft game developers, nft game designers" />
                <meta name="geo.region" content="US" />
                <meta name="geo.position" content="39.78373;-100.445882" />
                <meta name="ICBM" content="39.78373, -100.445882" />
                <link rel="icon" href="images/icons/favicon.png" />

            </Head>


            <NewBannerFy
                title={<> World-Class Provider Of  <br /> NFT Game Development Solutions! </>}
                text={<> BitsWits specializes in creating NFT games using smart contracts on Ethereum, EOS, Tron, and Cardano. Our team spends countless hours crafting unique storylines, artwork, and game mechanics that bring the world of NFTs to life. With our games, players can earn rewards while they explore our virtual worlds, battle opponents, or trade rare collectibles. Whether you're looking for an intense battle, a peaceful adventure, or a friendly competition, BitsWits has something for everyone! Join us and become part of the exciting new world of NFTs gaming. </>}
                btn1='Consult A Gaming Expert To Begin'
                banClass="nft"
            />


            <NewSliderFy />

            <Aboutlp />




            <Ourservices
                services={services1}
            />


            <Creativeopportunities

                subtitle='BOUNTIES'
                title={<> Secure Your Imagination With The <span className='grdiant'>NFT Gaming</span> Platform: Discover A World Of Possibilities! </>}

                eng={engagement}

                tit1='Unique Ownership'
                text1={<> NFT game development allows digital assets, such as artwork and collectibles, to be securely owned with a unique, blockchain-based identifier. This enables users to own digital assets without being replicated or copied by other players. </>}
                btn1='Lets Start'

                tit2='New Revenue Streams'
                text2={<>  Developers can create new ways for players to monetize their experiences, such as selling in-game items or running virtual markets with rare items. This opens up a whole new range of potential sources of income for players. </>}
                btn2='Lets Start'

                tit3='Digital Authenticity'
                text3={<>  By using an immutable ledger, NFTs provide an unparalleled level of digital authenticity, ensuring that users can verify the ownership and provenance of their digital assets. </>}
                btn3='Lets Start'

                tit4='Enhanced Interactivity'
                text4={<>  With NFT game development, players can interact directly with other players in various ways, from trading collectibles to participating in tournaments or competitions. </>}
                btn4='Lets Start'

                tit5='Increased Immersion'
                text5={<> By leveraging the power of blockchain technology, NFT game development can provide an immersive gaming experience by allowing developers to create real-world objects and experiences within the game world. </>}
                btn5='Lets Start'

                tit6='Open-Source Platforms'
                text6={<>   Many NFT game development platforms are open source, meaning players can help shape their games and contribute to their development. This allows for greater experimentation and creativity, resulting in a more engaging experience for players. </>}
                btn6='Lets Start'



            />

            {/* <section className='campny'>
                <Container>
                    <Row>
                        <Col>
                            <h3 className='f-20 f-700 black t-center'>FEATURES</h3>
                            <h2 className='f-50 f-700 black t-center'> Unlock Treasure Troves of Fun <br></br> with Play-to-Earn <span className='grdiant'>NFT Games</span> ! </h2>
                            <p className='f-16 f-500 black t-center mb-5'>Are you ready to take your gaming experience to the next level? With play-to-earn NFT games, the possibilities are endless! Whether you're a hardcore collector or just looking for some extra cash, these interactive experiences can offer you something special. Explore the features of play-to-earn games, and get the ball rolled today!</p>
                        </Col>
                    </Row>
                    <Row className='gy-4'>
                        <Incredible
                            fontpont={fontpont}
                        />
                    </Row>
                </Container>
            </section> */}


            <Yearsofexpertise
                loop1={<> <Counter stopNumber={500} />+</>}

                looptext11={<> Applications Developed <br></br> and Designed  </>}
                loop2={<> <Counter stopNumber={250} />+ </>}

                looptext22={<> Developers & Engineers <br></br> Under One Roof </>}
                loop3={<> <Counter stopNumber={12} />+ </>}

                looptext33={<> Years in Software <br></br>
                    Development Business </>}
                loop4={<> <Counter stopNumber={92} />% </>}

                looptext44={<> Client Retention </>}

            />


            <Container className='campny pb-5'>
                <Row>
                    <Col xl={12} className='mb-3'>
                        <h3 className='f-20 f-700 black t-center'>SERVICES</h3>
                        <h2 className='f-50 f-700 black t-center'> Unstoppable Fun: <span className='grdiant'>NFT Game Development</span> Services </h2>
                        <p className='f-16 f-500 black t-center'>Do you want to bring unstoppable fun to your gaming experience? We guarantee a world of gaming possibilities through our cutting-edge technology and innovative approach to NFTs.</p>

                    </Col>
                    <Col xl={12}>
                        <Tabplays
                            demand1={demandpont}
                        />
                    </Col>
                    <Col xl={12}>
                        <Link className='btnclas' href='#'>Revolutionize Your Mobile Experience with Flutter Apps</Link>
                    </Col>
                </Row>
            </Container>



            <Consultation />




            <Container className='topbottom'>
                <Row>
                    <Col>
                        <h3 className='f-20 f-700 black t-center'>ON-DEMAND</h3>
                        <h2 className='f-50 f-700 black t-center'> Creating Digital Magic: Tap Into the Power of On-Demand <span className='grdiant'>NFT Game Development</span> </h2>
                        <p className='f-16 f-500 black t-center mb-5'>BitsWits combine the power of blockchain technology with digital gaming to create innovative and captivating experiences. We uphold the mission of bringing a new kind of entertainment to the world—one that is safe, secure, and exciting! Whether NFT games for mobile, PC, and console platforms, our games feature dynamic gameplay, stunning graphics, and immersive storylines that captivate players. With cutting-edge technology and unbeatable artistry, we are transforming gaming into an entirely new experience.</p>

                    </Col>
                </Row>
                <Row>
                    <Play
                        demand={demand}
                    />
                </Row>
            </Container>




            <Combination
                subtitle={<> WE'LL MAKE YOUR <span className='grdiant'>NFT GAME</span> DREAMS A REALITY! </>}
                title={<>   Be at the Forefront of Blockchain Technology  and Utilize <span className='grdiant'>NFT Games</span> for Big Wins </>}
                text='  With our games, users have the power to create their own custom story and journey through the world of NFTs. To cut a long story short, we strive to marry our artistic vision with the latest technologies, allowing us to create stunning visuals and immersive experiences while maintaining excellent performance on all platforms.'
                text2='Rest assured, when signing with us, you receive many benefits from integrating NFTs into games, from creating virtual assets to opening up new gaming economies!!!'
                btn='Consult A Gaming Expert To Begin'

            />




            <Developer
                subtitle2={<> HIRE DEVELOPERS </>}
                subtitle={<>  Ready to Unleash Your <span className='grdiant'>NFT Gaming</span> <br></br> Potential? Choose BitsWits! </>}
                pic1={pic1}
                tit1='Wide Range Of Expertise'
                text1={<> We have a wide range of expertise in developing NFT games, from simple mini-games to complex simulations. Our team is well-versed in developing games with an innovative edge and providing cost-effective solutions to meet your project goals. </>}


                pic2={pic2}
                tit2='Eye On The Latest'
                text2={<> We use the latest technologies, tools, and game development platforms to give our clients the best gaming experience. We also keep up with the latest trends in NFT gaming and use cutting-edge technologies to develop visually appealing, interactive, and immersive games. </>}

                pic3={pic3}
                tit3='Custom/Adaptable Solutions'
                text3={<> We understand that no two NFT projects are the same. Our team is flexible enough to adapt our solutions to meet the unique requirements of your project. We deeply understand different game engines, platforms, and tools to ensure that your NFT game is designed to bring the best outcomes. </>}


                pic4={pic4}
                tit4='Security Measures'
                text4={<> They use enterprise-level technologies like encryption, authentication mechanisms, and authorization protocols to ensure that each game is safeguarded against data theft and malicious attacks. We also provide a secure infrastructure for the storage and secure delivery of digital assets. </>}


                pic5={pic5}



            />






            <Tribute
                subtitle='GAME DEVELOPMENT'
                title='A Glimpse of Our Magical Adventure in NFT Games Development'
                text={<> We have done everything from creating virtual worlds with real-time social interaction features to developing card games that use smart contracts and blockchain technology. Our team has extensive experience designing and developing NFT games for both the web and mobile platforms, giving players an immersive gaming experience that will captivate them. </>}
                video='/images/game2dvideo/video2.mp4'
            />

            <Publication />

            <Range />

            <Hireus />

            <Consultation2 />
            
            <ClientsThinklp />

            <Contact
                newBg="newBg"
            />

        </>
    )
}
