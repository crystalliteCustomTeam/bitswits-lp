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
import Stack from '@/components/Stack';
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

import pic1 from '/public/images/superblock/1.png'
import pic2 from '/public/images/superblock/2.png'
import pic3 from '/public/images/superblock/3.png'
import pic4 from '/public/images/superblock/4.png'
import pic5 from '/public/images/superblock/5.png'

import engagement from '/public/images/step/4.png'

import icon1 from '../public/images/blockchaingameservices/sideimg.png'
import icon2 from '../public/images/blockchaingameservices/game.png'
import icon3 from '../public/images/blockchaingameservices/web30.png'
import icon4 from '../public/images/blockchaingameservices/blockchain.png'
import icon5 from '../public/images/blockchaingameservices/webflow.png'
import icon6 from '../public/images/blockchaingameservices/artifical.png'
import Ourservices from '@/components/Ourservices'
import NewSliderFy from '@/components/NewSliderFy'
import Aboutlp from '@/components/Aboutlp'
import NewBannerFy from '@/components/NewBannerFy'
import Contact from '@/components/Contact'

export default function blockchaingamedevelopmentcompanylp() {



    const [gameshow, gameapp] = useState('tab1');

    function game(tab) {
        gameapp(tab);
    }


    const services1 = [

        {
            id: '1',
            title: 'EOS Dapp Game Development',
            text: (<> BitsWits offers comprehensive services for developing high-performance and secure blockchain games using the EOS platform. Get in touch to create engaging, user-friendly and intuitive dapps with unique features that help you stand out from the competition.
            </>),
            click1: 'tab1',
            img: icon1,
            fun: game,
            data: gameshow
        },
        {
            id: '2',
            title: 'Solana Blockchain Game Development',
            text: (<> Solana Blockchain game development is all the rage right now, and BitsWits is leading the charge. We specialize in creating powerful, high-volume games with a wide range of features – from fast-paced action to deep strategic play. </>),
            click1: 'tab2',
            img: icon2,
            fun: game,
            data: gameshow
        },
        {
            id: '3',
            title: 'BSC Game Development',
            text: (<> BSC Game Development by BitsWits is a complete suite of game development tools designed for professionals and enthusiasts alike. With its powerful engine, integrated asset library, intuitive interface, and comprehensive visual toolsets, developers can quickly bring their ideas to life. </>),
            click1: 'tab3',
            img: icon3,
            fun: game,
            data: gameshow
        },
        {
            id: '4',
            title: 'NFT Blockchain Game Development',
            text: (<> Utilizing blockchain technology, we create games that offer unprecedented levels of customization, security, and transparency. With no middlemen involved in transactions, you can now be sure that your digital games and assets are secure from any external interference. </>),
            click1: 'tab4',
            img: icon4,
            fun: game,
            data: gameshow
        },
        {
            id: '5',
            title: 'Ethereum Dapp Game Development',
            text: (<> BitsWits specializes in creating innovative, high-quality Ethereum dapps for businesses and entrepreneurs. All thanks to our dedicated team of developers, we provide reliable solutions to help enterprises to increase their profits and maximize user engagement. </>),
            click1: 'tab5',
            img: icon5,
            fun: game,
            data: gameshow
        },
        {
            id: '6',
            title: 'TRON Game Development',
            text: (<>Boasting some of the best 3D graphics ever seen in a game, our TRON games let you immerse yourself in a virtual world full of adventure, excitement, and action. With realistic animations and stunning sound effects, you'll feel like you're part of the action. </>),
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
            title: 'EOS Dapp Game Development',
            text: 'BitsWits offers comprehensive services for developing high-performance and secure blockchain games using the EOS platform. Get in touch to create engaging, user-friendly and intuitive dapps with unique features that help you stand out from the competition.',


        },
        {
            title: 'Solana Blockchain Game Development',
            text: (<> Solana Blockchain game development is all the rage right now, and BitsWits is leading the charge. We specialize in creating powerful, high-volume games with a wide range of features – from fast-paced action to deep strategic play. </>),


        },
        {
            title: 'BSC Game Development',
            text: (<> BSC Game Development by BitsWits is a complete suite of game development tools designed for professionals and enthusiasts alike. With its powerful engine, integrated asset library, intuitive interface, and comprehensive visual toolsets, developers can quickly bring their ideas to life. </>),


        },

        {
            title: 'NFT Blockchain Game Development',
            text: (<> Utilizing blockchain technology, we create games that offer unprecedented levels of customization, security, and transparency. With no middlemen involved in transactions, you can now be sure that your digital games and assets are secure from any external interference. </>),


        },
        {
            title: 'Ethereum Dapp Game Development',
            text: (<> BitsWits specializes in creating innovative, high-quality Ethereum dapps for businesses and entrepreneurs. All thanks to our dedicated team of developers, we provide reliable solutions to help enterprises to increase their profits and maximize user engagement.

            </>),


        },
        {
            title: 'TRON Game Development',
            text: (<> Boasting some of the best 3D graphics ever seen in a game, our TRON games let you immerse yourself in a virtual world full of adventure, excitement, and action. With realistic animations and stunning sound effects, you'll feel like you're part of the action. </>),


        },
        {
            title: 'Smart Contract Dapp Game Development',
            text: (<> BitsWits provides comprehensive smart-contract solutions for games that operate on blockchain networks. Contact us to bring your notion of a modern and decentralized gaming experience into reality. </>),


        },
        {
            title: 'Polygon Game Development',
            text: (<> We specialize in Polygon game development and create detailed game environments and characters with smooth animation capabilities. From design and coding to animation, we create engaging games that push the boundaries of creativity. </>),


        },
        {
            title: 'In-Game Asset & Token Creation',
            text: (<> BitsWits specializes in providing bespoke in-game asset and token creation services. We offer various services tailored to suit your specific requirements: from creating 3D or 2D assets to programming custom tokenization systems and blockchain integration. </>),


        },
        {
            title: 'Metaverse Blockchain Game Development',
            text: (<> Using blockchain and cutting-edge technology, we deploy metaverse projects with features such as distributed storage and processing, zero-knowledge transactions, and non-fungible tokens (NFTs). Build next-generation titles with us! </>),


        },
        {
            title: 'Crypto Gambling Games',
            text: (<> Our team of experts is highly knowledgeable about blockchain technology and its applications in gaming, allowing us to develop cutting-edge, secure online casinos and betting platforms with an unparalleled level of safety, fairness, and security. </>),


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
            title: '3D Models',
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
            title1: 'HTML 5',
            text: 'With its lightning-fast loading speeds, powerful canvas elements, and audio and video formats support, HTML 5 makes coding and developing visually stunning games an absolute breeze.',
            click2: 'tab',
            fun1: handleTabChange1,
            data1: activeTab1,




        },
        {
            title1: 'Unity 2D',
            text: 'With Unity 2D, our developers create animated sprites and realistic physics-based interactions. Its range of powerful features allows us to build virtual worlds full of complex characters and environments.',
            click2: 'tab1',
            fun1: handleTabChange1,
            data1: activeTab1,


        },
        {
            title1: 'Unreal Engine',
            text: 'With Unreal Engine, we develop pixel-perfect gaming experiences with dynamic lighting, shadows, and textures that look almost as good as real life. Unreal Engine provides an intuitive user interface that lets us quickly create and test gameplay concepts in a matter of minutes.',
            click2: 'tab2',
            fun1: handleTabChange1,
            data1: activeTab1,


        },
        {
            title1: 'Android SDK',
            text: 'With advanced features like support for OpenGL and OpenCL, Android SDK makes developing a high-quality 2D game easier than ever before.',
            click2: 'tab3',
            fun1: handleTabChange1,
            data1: activeTab1,


        },
        {
            title1: 'CryENGINE',
            text: 'It offers a powerful graphical engine, simple scripting language, and customizable physics — allowing our 2D game developers to create beautiful and immersive worlds without spending hours coding complex systems.',
            click2: 'tab4',
            fun1: handleTabChange1,
            data1: activeTab1,


        },
        {
            title1: 'Game Maker Studio 2',
            text: 'With its powerful drag-and-drop workflow, it makes game development a breeze! Its intuitive interface allows us to quickly create characters, levels, and worlds with ease and precision.',
            click2: 'tab5',
            fun1: handleTabChange1,
            data1: activeTab1,


        },
        {
            title1: 'Corona SDK',
            text: (<>

                Creating a 2D game with Corona SDK is like baking a cake. With easy-to-use tools, fast builds, and powerful features, it's no wonder why our developers choose Corona SDK for your 2D game development needs.

            </>),
            click2: 'tab6',
            fun1: handleTabChange1,
            data1: activeTab1,


        },
        {
            title1: 'AppGameKit',
            text: (<>

                With its comprehensive functionality, AppGameKit allows our developers to create a wide range of gaming experiences, from classic platformers to challenging puzzlers. Its intuitive design makes it easier than ever to let us create beautiful visuals with lighting, shadows, and special effects.

            </>),
            click2: 'tab7',
            fun1: handleTabChange1,
            data1: activeTab1,


        },
        {
            title1: 'SpriteKit',
            text: (<>
                With SpriteKit, we quickly create stunning 2D graphics and animations, add sound effects and music, control physics and gravity settings, and manage game objects and characters with ease.
            </>),
            click2: 'tab8',
            fun1: handleTabChange1,
            data1: activeTab1,


        },
        {
            title1: 'GoDot Engine',
            text: (<>
                From pixel-perfect platformers to story-driven RPGs, GoDot is the perfect Engine to unlock the gaming experience. And with built-in support for shaders and nodes, we get to craft even more depth into your projects.
            </>),
            click2: 'tab9',
            fun1: handleTabChange1,
            data1: activeTab1,


        },
        {
            title1: 'Cocos2D',
            text: (<>
                With Cocos2D, our developers can easily build everything from platformers to arcade shooters with a few lines of code. After all, from map editors to particle systems, Cocos2D has it all.
            </>),
            click2: 'tab10',
            fun1: handleTabChange1,
            data1: activeTab1,


        },
        {
            title1: 'Amazon Lumberyard',
            text: (<>
                With powerful tools such as the drag-and-drop UI designer, visual scripting system, and particle effects editor, building amazing 2D titles becomes a breeze with Amazon Lumberyard.
            </>),
            click2: 'tab11',
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
                <title>Top Cryptographer and Blockchain Game Development Company</title>
                <meta name="description" content="Hire top blockchain game developers and cryptographers for your projects. Expert team of blockchain developers creating innovative gaming experiences." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Top Cryptographer and Blockchain Game Development Company" />
                <meta property="og:description" content="Hire top blockchain game developers and cryptographers for your projects. Expert team of blockchain developers creating innovative gaming experiences." />
                <meta property="og:url" content="https://www.bitswits.co/blockchain-game-development-company/" />
                <meta property="og:site_name" content="Top Cryptographer and Blockchain Game Development Company" />
                <link rel="canonical" href="https://www.bitswits.co/blockchain-game-development-company/" />
                <meta name="msvalidate.01" content="7BBFFA763CEB48CAC0828E22D44DD12B" />
                <meta name="DC.title" content="blockchain game development company, hire blockchain game developers, web 3 game developers" />
                <meta name="geo.region" content="US-CA" />
                <meta name="geo.placename" content="Los Angeles" />
                <meta name="geo.position" content="36.701463;-118.755997" />
                <meta name="ICBM" content="36.701463, -118.755997" />
                <meta name="DC.title" content="blockchain game development company, hire blockchain game developers, web 3 game developers" />
                <meta name="geo.region" content="US-DE" />
                <meta name="geo.placename" content="Dover" />
                <meta name="geo.position" content="38.692045;-75.401331" />
                <meta name="ICBM" content="38.692045, -75.401331" />
                <meta name="DC.title" content="blockchain game development company, hire blockchain game developers, web 3 game developers" />
                <meta name="geo.region" content="US" />
                <meta name="geo.position" content="39.78373;-100.445882" />
                <meta name="ICBM" content="39.78373, -100.445882" />
                <link rel="icon" href="images/icons/favicon.png" />

            </Head>


            <NewBannerFy
                title={<> We Revolutionize The Way Digital Games Are Designed And Played!!! </>}
                text={<> BitsWits is an up-and-coming blockchain game development company that produces cutting-edge blockchain games for the global gaming market. We create next-generation games based on distributed ledger technology (DLT). Our suite of products and services includes custom game development using smart contracts, distributed storage solutions, API integrations, and more. </>}
                text2={<> Hire us to develop AAA-level titles with the most advanced technology available today!!! </>}
                btn1='Consult A Gaming Expert To Begin'
                banClass="blockchain"
            />

            <NewSliderFy />

            <Aboutlp />


            {/* <Yearsofexpertise
                loop1={<> <Counter stopNumber={500} />+</>}

                looptext11={<> Applications Developed <br></br> and Designed  </>}
                loop2={<> <Counter stopNumber={250} />+ </>}

                looptext22={<> Developers & Engineers <br></br> Under One Roof </>}
                loop3={<> <Counter stopNumber={12} />+ </>}

                looptext33={<> Years in Software <br></br>
                    Development Business </>}
                loop4={<> <Counter stopNumber={92} />% </>}

                looptext44={<> Client Retention </>}

            /> */}

            <Ourservices
                services={services1}
            />


            <Creativeopportunities

                subtitle='BOUNTIES'
                title={<> Advantages of <span className='grdiant'>Blockchain</span> for Gaming </>}
                text='The gaming industry has experienced a massive boom in recent years, and the introduction of blockchain technology offers immense potential for further advancements. Blockchain technology can help enhance the user experience, facilitate faster transactions, and promote secure gameplay with distributed ledgers. Here are some of the benefits of blockchain for the gaming industry:'

                eng={engagement}

                tit1='Security'
                text1={<> Blockchain technology offers game developers an unprecedented level of security, ensuring that users' accounts, valuable in-game items, and progress remain safe from hackers </>}
                btn1='Lets Start'

                tit2='Transparency'
                text2={<>  Players can keep track of the entire game's transactions and activities, authorizing greater trust and transparency in game development. This type of data integrity is beneficial for competitive games where players may be incentivized to succeed. </>}
                btn2='Lets Start'

                tit3='Faster Transactions'
                text3={<>  Blockchain technology allows for near-instantaneous payments between players without any additional fees or middlemen. This ensures the in-game economies are vibrant and healthy, allowing for a better gaming experience. </>}
                btn3='Lets Start'

                tit4='Smart Contracts'
                text4={<>  Through smart contracts, game developers can create automated, self-executing agreements that open up an entirely new level of flexibility when creating games. </>}
                btn4='Lets Start'

                tit5='Improved Asset Management'
                text5={<>  Blockchain technology offers improved asset management for developers, allowing them to track and manage in-game items more accurately. This ensures players can quickly and easily access the items they need without any hassle. </>}
                btn5='Lets Start'

                tit6='Enhanced Interoperability'
                text6={<>   Blockchain technology finally enables the creation of more interoperable games, enabling players to exchange game assets and items across different platforms and devices, improving their gaming experience by eliminating the need to start from scratch each time they switch devices. </>}
                btn6='Lets Start'



            />

            {/* <section className='campny'>
                <Container>
                    <Row>
                        <Col>
                            <h3 className='f-20 f-700 black t-center'> OUR <span className='grdiant'>SERVICES ARE WHERE INNOVATION</span> MEETS PLAY </h3>
                            <h2 className='f-50 f-700 black t-center'> <span className='grdiant'>Blockchain Gaming</span> Engineering Services</h2>
                            <p className='f-16 f-500 black t-center mb-5'>From creating multiplayer games to providing secure in-game asset exchange options, BitsWits leverages blockchain technology for game development. Our services include creating next-generation games using the latest technology and tools, such as Unity 3D engine for VR/AR gaming experiences, Augmented Reality (AR) support for games, low-latency gameplay features, HoloLens integration, and blockchain-backed matchmaking.</p>
                        </Col>
                    </Row>
                    <Row className='gy-4'>
                        <Incredible
                            fontpont={fontpont}
                        />
                    </Row>
                </Container>
            </section> */}

            <Stack />










            <Container className='topbottom'>
                <Row>
                    <Col>
                        <h3 className='f-20 f-700 black t-center'>ON-DEMAND</h3>
                        <h2 className='f-50 f-700 black t-center'> Explore a New Dimension of Fun with Our <span className='grdiant'>Blockchain Game Development</span> Company </h2>
                        <p className='f-16 f-500 black t-center mb-5'>Our blockchain-based solutions provide gamers with the highest level of security, ensuring that their digital assets remain safely in their hands. BitsWits is experienced in crafting games for both mobile and PC platforms and boasts a wealth of experience in creating games for both the public and private sectors. We also ensure that all of our games comply with the latest industry standards, so you can be sure that your investment in our technology is secure. From world-class art direction to feature-rich gameplay mechanics, BitsWits is your partner in creating the perfect gaming experience. Contact us today to learn how we can help make your upcoming game a success!</p>

                    </Col>
                </Row>
                <Row>
                    <Play
                        demand={demand}
                    />
                </Row>
            </Container>




            <Combination
                subtitle={<> SOLUTIONS </>}
                title={<>  Take Your <span className='grdiant'>Gaming Experience</span> to the Blockchain! </>}
                text='  BitsWits is at the cutting edge of blockchain game development, offering a suite of products to help businesses create fully featured games with all the security and transparency benefits of distributed ledger technology. Have us on your side to enjoy steady revenue with innovative and future-forward blockchain games.'
                text2='Turn up the action with our innovative blockchain games now!'
                btn='Consult A Gaming Expert To Begin'

            />




            <Developer
                subtitle2={<>  HIRE TOP-NOTCH <span className='grdiant'>BLOCKCHAIN DEVELOPERS</span> </>}
                subtitle={<>  Reason You Will Love Our <span className='grdiant'>Blockchain <br></br> Game Development</span> Company </>}
                pic1={pic1}
                tit1='Business Value-driven Solutions'
                text1={<> BitsWits offers multiple platform support for blockchain game development, meaning your game will reach a much wider audience. </>}


                pic2={pic2}
                tit2='Smooth User Experience'
                text2={<> BitsWits understands that the success of any blockchain game depends on its ability to provide secure transactions in a safe environment. Hence, we take extra care to ensure that our solutions are secure and reliable, ensuring a smooth user experience. </>}

                pic3={pic3}
                tit3='Agile Methodology'
                text3={<> With our agile development process, you can be sure that we will release your game quickly without compromising quality. You can be sure of the quality games with no glitches! </>}


                pic4={pic4}
                tit4='Multi-platforms Game Development'
                text4={<> Our team of experienced developers has the capacity to craft custom blockchain games for any platform—from mobile, desktop, console, and web to virtual reality. </>}


                pic5={pic5}



            />


            <Range />
            <Publication />
            
            <Hireus
                bgColor="black"
            />

            <ClientsThinklp />

            <Contact
              newBg="newBg"
            />

        </>
    )
}
