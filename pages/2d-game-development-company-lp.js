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

import pic1 from '/public/images/super/1.png'
import pic2 from '/public/images/super/2.png'
import pic3 from '/public/images/super/3.png'
import pic4 from '/public/images/super/4.png'
import pic5 from '/public/images/super/5.png'

import engagement from '/public/images/step/1.png'



import icon1 from '../public/images/2dgamedevelopment/sideimg.png'
import icon2 from '../public/images/2dgamedevelopment/game.png'
import icon3 from '../public/images/2dgamedevelopment/web30.png'
import icon4 from '../public/images/2dgamedevelopment/blockchain.png'
import icon5 from '../public/images/2dgamedevelopment/webflow.png'
import icon6 from '../public/images/2dgamedevelopment/artifical.png'
import Ourservices from '@/components/Ourservices'
import Aboutlp from '@/components/Aboutlp'
import NewSliderFy from '@/components/NewSliderFy'
import NewBannerFy from '@/components/NewBannerFy'
import Contact from '@/components/Contact'
import Consultation2 from '@/components/Consultation2'
import Consultation from '@/components/Consultation'

export default function gamedevelopmentcompany2dlp() {


    const [gameshow, gameapp] = useState('tab1');

    function game(tab) {
        gameapp(tab);
    }


    const services1 = [

        {
            id: '1',
            title: '2D Concept Art and Design',
            text: (<> 2D Concept Art and Design is an art form that combines creative design with technical know-how. Our team of experienced artists is well-versed in various techniques, including digital painting, 3D modeling, and animation. From character concept artwork to product designs, environments, and storyboards, we provide complete professional service for our clients.

                LET'S START </>),
            click1: 'tab1',
            img: icon1,
            fun: game,
            data: gameshow
        },
        {
            id: '2',
            title: 'Single Player Games',
            text: (<> Our team is well versed in various technologies such as C++, Unity, Unreal Engine, HTML5, and more to provide a seamless single-player gaming experience across different platforms. BitsWits guarantee bug-free code, easy navigation, intuitive controls, and perfect performance in our games so players can enjoy their experience without frustration. Whether you're looking for a complex 2D game or an old-school classic side-scroller, our 2D game developers can make it happen. </>),
            click1: 'tab2',
            img: icon2,
            fun: game,
            data: gameshow
        },
        {
            id: '3',
            title: 'Game App Integration',
            text: (<> Our integration services offer a range of features across platforms, including multiplayer mode, leaderboard integration, in-app purchases, analytics, and more. Our streamlined integration process ensures your game runs smoothly while maintaining high-security standards. Whether it's connecting your game app with existing APIs or creating custom solutions, we guarantee that our solutions are robust and secure. </>),
            click1: 'tab3',
            img: icon3,
            fun: game,
            data: gameshow
        },
        {
            id: '4',
            title: 'Multiplayer Games',
            text: (<> Whether you're looking to build a complex, engaging multiplayer game from the ground up or optimize an existing project with cutting-edge technology, we have you covered! From first-person shooters and RPGs to strategic board games and party games, we foster multiplayer gaming experiences for businesses to help them make huge bucks. </>),
            click1: 'tab4',
            img: icon4,
            fun: game,
            data: gameshow
        },
        {
            id: '5',
            title: 'UI/UX Graphics',
            text: 'Our UI/UX Graphics services greatly enhance the player experience, making it more immersive and enjoyable. We focus on creating engaging visuals through color palette selection, typography choice, and iconography, as well as developing an easy-to-navigate layout to keep your players engaged with the game.',
            click1: 'tab5',
            img: icon5,
            fun: game,
            data: gameshow
        },
        {
            id: '6',
            title: 'Storyboarding',
            text: (<> With our team of expert animators, you can watch your characters come alive and see your story unfold in vivid detail. Our 2D animation and storyboard services allow you to visually represent what is happening in your script or story before it gets animated. This ensures that all elements are in place for a successful storyboard. </>),
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
            title: '2D Concept Art and Design',
            text: '2D Concept Art and Design is an art form that combines creative design with technical know-how. Our team of experienced artists is well-versed in various techniques, including digital painting, 3D modeling, and animation. From character concept artwork to product designs, environments, and storyboards, we provide complete professional service for our clients.',
            btn1: (
                <>
                    LET'S START
                </>
            ),

        },
        {
            title: 'Single Player Games',
            text: (<> Our team is well versed in various technologies such as C++, Unity, Unreal Engine, HTML5, and more to provide a seamless single-player gaming experience across different platforms. BitsWits guarantee bug-free code, easy navigation, intuitive controls, and perfect performance in our games so players can enjoy their experience without frustration. Whether you're looking for a complex 2D game or an old-school classic side-scroller, our 2D game developers can make it happen. </>),
            btn1: (
                <>
                    LET'S START
                </>
            ),

        },
        {
            title: 'Game App Integration',
            text: (<> Our integration services offer a range of features across platforms, including multiplayer mode, leaderboard integration, in-app purchases, analytics, and more. Our streamlined integration process ensures your game runs smoothly while maintaining high-security standards. Whether it's connecting your game app with existing APIs or creating custom solutions, we guarantee that our solutions are robust and secure. </>),
            btn1: (
                <>
                    LET'S START
                </>
            ),

        },

        {
            title: 'Multiplayer Games',
            text: (<> Whether you're looking to build a complex, engaging multiplayer game from the ground up or optimize an existing project with cutting-edge technology, we have you covered! From first-person shooters and RPGs to strategic board games and party games, we foster multiplayer gaming experiences for businesses to help them make huge bucks. </>),
            btn1: (
                <>
                    LET'S START
                </>
            ),

        },
        {
            title: 'UI/UX Graphics',
            text: (<> Our UI/UX Graphics services greatly enhance the player experience, making it more immersive and enjoyable. We focus on creating engaging visuals through color palette selection, typography choice, and iconography, as well as developing an easy-to-navigate layout to keep your players engaged with the game. </>),
            btn1: (
                <>
                    LET'S START
                </>
            ),

        },
        {
            title: 'Storyboarding',
            text: (<> With our team of expert animators, you can watch your characters come alive and see your story unfold in vivid detail. Our 2D animation and storyboard services allow you to visually represent what is happening in your script or story before it gets animated. This ensures that all elements are in place for a successful storyboard. </>),
            btn1: (
                <>
                    LET'S START
                </>
            ),

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
                <title>Professional 2D Game Development Company- Bitswits!</title>
                <meta name="description" content="Take your gaming experience to the next level with our award-winning 2D game developers! We craft innovative games with superior graphics, sounds, and controls." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Professional 2D Game Development Company- Bitswits!" />
                <meta property="og:description" content="Take your gaming experience to the next level with our award-winning 2D game developers! We craft innovative games with superior graphics, sounds, and controls." />
                <meta property="og:url" content="https://bitswits.co/2d-game-development-company/" />
                <meta property="og:site_name" content="Professional 2D Game Development Company- Bitswits!" />
                <link rel="canonical" href="https://bitswits.co/2d-game-development-company/" />
                <meta name="msvalidate.01" content="7BBFFA763CEB48CAC0828E22D44DD12B" />
                <meta name="DC.title" content="2d game development company, 2d game app developers, hire 2d game app developers" />
                <meta name="geo.region" content="US-CA" />
                <meta name="geo.placename" content="Los Angeles" />
                <meta name="geo.position" content="36.701463;-118.755997" />
                <meta name="ICBM" content="36.701463, -118.755997" />
                <meta name="DC.title" content="2d game development company, 2d game app developers, hire 2d game app developers" />
                <meta name="geo.region" content="US-DE" />
                <meta name="geo.placename" content="Dover" />
                <meta name="geo.position" content="38.692045;-75.401331" />
                <meta name="ICBM" content="38.692045, -75.401331" />
                <meta name="DC.title" content="2d game development company, 2d game app developers, hire 2d game app developers" />
                <meta name="geo.region" content="US" />
                <meta name="geo.position" content="39.78373;-100.445882" />
                <meta name="ICBM" content="39.78373, -100.445882" />
                <link rel="icon" href="images/icons/favicon.png" />

            </Head>


            <NewBannerFy
                subtitle='Best In Animation, Graphics, & Design - Your Own'
                title={<> 2D Game <br />  Development Company! </>}
                text={<> From classic platformers to immersive RPGs, our 2D games will have your target market addicted in no time. We specialize in crafting highly detailed and interactive worlds, characters, and stories that will capture your imagination and keep your prospects hooked for hours on end. With ultra-realistic visuals and cutting-edge physics, we ensure that your games look and feel as realistic as possible. Whether you're looking for an app, a console game, or something completely different – we are here to help! </>}
                btn1='Consult A Gaming Expert To Begin'
                banClass="game2d"
            />


            <NewSliderFy />

            <Aboutlp />


            <Ourservices
                services={services1}
            />


            <Creativeopportunities

                subtitle='BOUNTIES'
                title={<>Attractive/Creative Opportunities <br></br> <span className='grdiant'> 2D Games Development</span> Offers</>}

                eng={engagement}


                tit1='Improved Engagement'
                text1={<> Since 2D games typically feature minimal graphics and fewer special
                    effects, players with slow internet connections or limited hardware
                    capabilities can easily enjoy them. </>}
                btn1='Lets Start'

                tit2='Quicker To Develop'
                text2={<>  Due to the simpler coding process and fewer assets needed, 2D games can
                    be developed in a shorter amount of time than 3D games. </>}
                btn2='Lets Start'

                tit3='Accessible For All Players'
                text3={<>  2D games have simpler graphics and coding, which makes them playable on
                    multiple devices and expands the potential audience for your game. </>}
                btn3='Lets Start'

                tit4='Enhanced Engagement'
                text4={<>  With 2D games, businesses can amuse their customers with fun and
                    interactive activities that keep them inquisitive about the products or
                    services offered. </>}
                btn4='Lets Start'

                tit5='Cost-Effective'
                text5={<>  Developing games in 2D is a cost-effective way to produce top-notch
                    quality games with minimal overhead costs. </>}
                btn5='Lets Start'

                tit6='Easier Maintenance'
                text6={<>   Since 2D games can be updated without major overhauls, businesses don't
                    have to worry about the constant maintenance and bug fixes of 3D game
                    development. This allows for faster iteration cycles and easier
                    deployment of new content. </>}
                btn6='Lets Start'

            />


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


            <section className='campny pb-5'>
                <Container>
                    <Row>
                        <Col>
                            <h3 className='f-20 f-700 black t-center'>OUR <span className='grdiant'>SERVICES</span> ARE WHERE INNOVATION MEETS PLAY</h3>
                            <h2 className='f-50 f-700 black t-center mb-5'>What You May Expect <span className='grdiant'>When Committing</span> To Us?</h2>
                        </Col>
                    </Row>
                    <Row className='gy-4'>
                        <Incredible
                            fontpont={fontpont}
                        />
                    </Row>
                </Container>
            </section>


            <Consultation />


            <Container className='campny'>
                <Row>
                    <Col xl={12} className='mb-3'>
                        <h3 className='f-20 f-700 black t-center'>SUITE OF TOOLS IN OUR ARSENAL</h3>
                        <h2 className='f-50 f-700 black t-center'>Our <span className='grdiant'>Technology Stack to Help Businesses Rise</span> Above and Conquer Their Competitors</h2>

                    </Col>
                    <Col xl={12}>
                        <Tabplays
                            demand1={demandpont}
                        />
                    </Col>
                </Row>
            </Container>


            <Container className='campny pb-5'>
                <Row className='gy-4'>

                    <Incredible
                        fontpont={incredible}
                    />

                </Row>
            </Container>


            <Range />


            <Container className='topbottom'>
                <Row>
                    <Col>
                        <h3 className='f-20 f-700 black t-center'>ON-DEMAND</h3>
                        <h2 className='f-50 f-700 black t-center'>Join the Revolution - Play on Any Platform with <span className='grdiant'>BitsWits' 2D Game Development</span> Company</h2>
                        <p className='f-16 f-500 black t-center mb-5'>We provide an optimal gaming experience across multiple platforms by developing games for iOS, Android, Windows, and Mac OS. Our cross-platform approach ensures that your game reaches the broadest possible audience of gamers. We also provide extensive testing and optimization services to ensure seamless performance and compatibility on the target platforms. BitsWits uses high-quality tools such as Unity 2D and HTML5 to develop custom games to ensure maximum device performance. So, get in touch with us today, and let us help you take your gaming venture to the next level!</p>

                    </Col>
                </Row>
                <Row>
                    <Col xl={12}>
                        <Play
                            demand={demand}
                        />
                    </Col>
                </Row>
            </Container>




            <Combination
                subtitle={<> THE  <span className='grdiant'>BEST GAME DEVELOPER</span> IN THE TOWN </>}
                title={<>   The Future Of <span className='grdiant'>2D Games</span> Is Here  We're Leading The Charge! </>}
                text='  Our 2D game developers use a combination of vibrant colors, intuitive controls, and engaging storylines to create something truly unique and always captivating. Our 2D game development services include concept creation, level design, character design, animation, asset integration, dynamic UI/UX design, programming, and debugging. Our custom 2D game engine provides hours of high-quality entertainment for those who take their gaming business seriously. With us, your gaming experience is guaranteed to be the best!'
                btn='Consult A Gaming Expert To Begin'

            />




            <Developer
                subtitle={<>  Compelling Reasons To Enlist Our <br></br> <span className='grdiant'>2D  Game Development</span> Company </>}
                title={<>   BitsWits shares a wealth of experience developing cutting-edge, engaging 2D games to help you
                    knock out your competitors, capture customers' attention and increase your revenues. From
                    concept design to programming, testing, and deployment of your custom-made 2D game, we offer
                    comprehensive services that guarantee success in the world of 2D gaming. With our expertise, you
                    can ensure your 2D game will be one of the best in the market. </>}
                pic1={pic1}
                tit1='Customized Solutions'
                text1={<> BitsWits provides tailor-made 2D games development services tailored to each client's needs and requirements. This helps create an engaging gaming experience for the user, which can be further modified according to their preferences. </>}


                pic2={pic2}
                tit2='Innovative Solutions'
                text2={<> BitsWits is always looking for new and innovative ways to develop 2D games that provide a unique and immersive gaming experience. We use the latest technologies and techniques to ensure that the users enjoy the best gaming experience. </>}

                pic3={pic3}
                tit3='Experienced Professionals'
                text3={<> The team at BitsWits consists of experienced professionals with years of experience in 2D game development. This ensures that the games developed are efficient and bug-free, providing a fantastic gaming experience to the users. </>}


                pic4={pic4}
                tit4='Exclusive Client Services'
                text4={<> We are also proud to offer exclusive client services, including game beta testing and post-release support. We guarantee a smooth launch for your game and ensure your players have the best experience possible. </>}

                pic5={pic5}

            />


            <Tribute
                subtitle='GAME DEVELOPMENT'
                title='Past Projects Are A Glorious Tribute To Our Unwavering Devotion to Quality and Innovation!'
                text={<> Whether you're a fan of classic arcade games, modern blockbusters, or quirky indie titles, our portfolio has something for everyone. Dive into our past projects and discover why we're one of the industry's most sought-after 2D game developers. </>}
                video='/images/game2dvideo/video1.mp4'
            />

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
