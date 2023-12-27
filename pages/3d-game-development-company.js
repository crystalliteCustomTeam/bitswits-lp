import Head from "next/head";
import React, { useState, useEffect } from "react";
//components
const ServicesBanner = React.lazy(() => import("@/components/ServicesBanner"));
const ServicesAdvantage = React.lazy(() => import("@/components/ServicesAdvantage"));
const ServiceTarget = React.lazy(() => import("@/components/ServiceTarget"));
const ServicesMaintain = React.lazy(() => import("@/components/ServicesMaintain"));
const ServiceExperience = React.lazy(() => import("@/components/ServiceExperience"));
const ServiceSolutions = React.lazy(() => import("@/components/ServiceSolutions"));
const ServiceGenre = React.lazy(() => import("@/components/ServiceGenre"));
const Capabilities3d = React.lazy(() => import("@/components/3dCapabilities"));
const ServiceEngage = React.lazy(() => import("@/components/ServiceEngage"));
const Newsuccess = React.lazy(() => import("@/components/NewMblSuccess"));
const ServicesFaqs = React.lazy(() => import("@/components/ServicesFaqs"));
const HomeLocation = React.lazy(() => import("@/components/HomeLocation"));
const Formnewlp = React.lazy(() => import("@/components/Formnewlp"));
const Globallp6 = React.lazy(() => import("@/components/GlobalLp6"));
const HomeBannerSlider = React.lazy(() => import("@/components/HomeBannerSliderlp"));
const Justbuildit = React.lazy(() => import("@/components/Justbuildit"));
const LpChoose = React.lazy(() => import("@/components/LpChoose"));
const LpForm = React.lazy(() => import("@/components/LpForm"));
const Technologieswe = React.lazy(() => import("@/components/NewMblTechnologiesWe"));
const Nothing = React.lazy(() => import("@/components/Nothing"));
const Partnerships = React.lazy(() => import("@/components/Partnerships"));
const People = React.lazy(() => import("@/components/People"));
//images
const BannerImage = await import("@/public/3d-game-development/images/bannerImage.png");
const AdvantageOne = await import("../public/3d-game-development/images/advantage1.png");
const Solution = await import("../public/3d-game-development/images/solution.png");
const gameicon1 = await import("@/public/3d-game-development/images/gameicon1.png");
const gameicon2 = await import("@/public/3d-game-development/images/gameicon2.png");
const gameicon3 = await import("@/public/3d-game-development/images/gameicon3.png");
const main = await import("@/public/3d-game-development/images/engagemain.png");
const engIcon1 = await import("@/public/3d-game-development/images/engage1.png");
const engIcon2 = await import("@/public/3d-game-development/images/engage2.png");
const engIcon3 = await import("@/public/3d-game-development/images/engage3.png");
const engIcon4 = await import("@/public/3d-game-development/images/engage4.png");
const ServicesMaintainmobile = React.lazy(() => import("@/components/ServicesMaintainmobile"));
const customios = await import("/public/3dapp/3dgameconceptart.png");
const iphoneapp = await import("/public/3dapp/3dwebandappdevelopment.png");
const applewatch = await import("/public/3dapp/advanced3dvideos.png");
const appletvappdevelopment = await import("/public/3dapp/3dgameappintegration.png");
const iphoneappdesigning = await import("/public/3dapp/3dimaginingart.png");
const hybridiphone = await import("/public/3dapp/supportandmaintenance.png");


const mobileApplication = () => {

  const [isSliderActive, setIsSliderActive] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1201) {
        setIsSliderActive(false);
      } else {
        setIsSliderActive(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const severcedata = [
    {
      classlayout: {
        newclass: "iosclass",
      },
      heading: {
        subtitle: "The Work We Undertake",
        title1: "The Genres Of Games We Develop",
        text: `We are famous for creating immersive game experiences with engaging storylines, stunning visuals, and innovative gameplay mechanics.
        Here's an exciting rundown of what we bring to the table.`

      },
      serdata: [

        {
          title: (<>3D Game Concept Art </>),
          text: "Our design and 3D game development team have extensive experience crafting vibrant and immersive artwork for various gaming applications. From characters and environmental designs to UI/UX, we can help define the visual identity of any game.",
          appclass: "app",
          appclass: "app1",
          imgservice: customios,
        },
        {
          title: (<> 3D Web and App Development </>),
          text: 'BitsWits offers world-class solutions for both web and mobile platforms. We specialized in creating stunning 3D apps with modern technologies such as Augmented Reality, Virtual Reality, 3D Modeling and Animation, WebGL, HTML5/CSS3, etc.',
          appclass: "app2",
          imgservice: iphoneapp,
        },
        {
          title: 'Advanced 3D Videos',
          text: "With our state-of-the-art technology, we can turn your ideas into fully rendered 3D game videos with stunning visuals. Our services range from custom-created 3D game videos to motion capture animation.",
          appclass: "app3",
          imgservice: applewatch,
        },
        {
          title: "3D Game App Integration",
          text: "BitsWits allow you to quickly and easily add 3D gaming experiences to your existing apps so that you can play high-end games without extra coding or hardware configurations. With our services, you can also easily and quickly integrate a virtual reality (VR) or augmented reality (AR) game into your project.",
          appclass: "app4",
          imgservice: appletvappdevelopment,
        },
        {
          title: "3D Imagining Art",
          text: "Our team of experienced 3D artists and engineers can turn your ideas into reality with stunning visuals that will wow your players. We specialize in creating engaging worlds with realistic landscapes, characters, and environments.",
          appclass: "app5",
          imgservice: iphoneappdesigning,
        },
        {
          title: "Support and Maintenance",
          text: "BitsWits recognizes that the game development journey doesn't end with its launch. That's why we provide our clients with comprehensive support and maintenance services to ensure their games remain attractive, immersive, and up-to-date with the latest trends.",
          appclass: "app5",
          imgservice: hybridiphone,
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Top Mobile App Development Company - BitsWits</title>
        <meta
          name="description"
          content="Apps that simplify your life, one click at a time, BitsWits is your go-to destination for top mobile app developers who can help you bring your ideas to life."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/icons/favicon.png" />
      </Head>

      <ServicesBanner
        assignClass="game3d"
        subtitle="AWARDED #1 GAME APP DEVELOPMENT COMPANY"
        title={
          <>
            Experience The Roller Coaster Of <br /> The Gaming World With Us!
          </>
        }
        text={
          <>
            We deliver great results, on time and on budget. Contact us to start
            talking about your project today!
          </>
        }
        BannerImage={BannerImage}
      />
      <People People="people" />
      <HomeBannerSlider />
      <LpForm />
      <Nothing Nothing="nothingLp6" />
      <ServicesAdvantage
        subTitle="Bounties"
        title={
          <> Attractive/Creative Opportunities 3D Game Development Offers </>
        }
        title1="More Control Options"
        content1="It enables the 3D game developer to provide gamers with more control options, such as the ability to customize their gaming experience by adjusting settings or controlling multiple characters."
        title2="Increased Reach"
        content2="3D games can be developed with a broader range of devices in mind, appealing to an increasingly global audience and expanding the potential customer base for businesses."
        title3="Increased Customer Loyalty"
        content3="With 3D game development, businesses can create entertaining and engaging games, creating a sense of loyalty amongst prospects that may result in repeat customers and long-term fans of the business."
        title4="Scalability"
        content4="3D games are incredibly scalable, allowing firms to add or remove the content as needed, depending on the customer base. This makes it easy for businesses to adjust their games to cater to different markets or demographics."
        title5="Enhanced Visualization"
        content5="The enhanced graphics, lighting, physics, and rendering capabilities of 3D game development create an interactive, immersive, and captivating environment for gaming enthusiasts."
        title6="Increased Realism"
        content6="It allows game developers to create a realistic world for gamers to explore. The improved graphics and rendering capabilities of 3D engines make the game look more pragmatic and believable."
        AdvantageOne={AdvantageOne}
      />
      <ServiceTarget
        subTitle="Features Of Our Development Endeavors"
        title={
          <>
            Invigorate Your Target Audience <br /> With Dynamic Gameplay
          </>
        }
        text={
          <>
            It's time to develop compelling storylines and rich characters with
            BitsWits; after all, don't you want to create an immersive
            experience? <br></br> We use the latest technologies and
            cutting-edge visuals to enable players to interact intuitively,
            whether playing on a PC, console, or mobile device.
          </>
        }
        heading1="We Ideate, Design, and Construct Expressive Games!!!"
        content1="BitsWits bring your visions into gaming reality following a structured and mindful approach. Our ideation process starts by exploring potential themes and genres to create an ideal design concept. We then move on to planning out the game's structure and detailing the game design document. Once the plan is locked in, we move on to building the game prototype. Our team works in tandem to create the basic visuals and gameplay for the game with all features intact. The end result is nothing short of amazing - a game that best aligns with the interests and goals of the client and functions seamlessly!"
        heading2="We Design Flawless, Captivating User Interfaces And Experiences!!!"
        content2="BitsWits shares a renowned name in developing top-class UI/UX processes that glues gamers to the screen for stretched hours. Our in-depth analysis of user behavior helps us create the perfect interface for each game, ensuring that no two experiences are the same. Our industry-trained game developers develop UI/UX optimized for maximum engagement and satiation."
        heading3="We Utilize Cutting-Edge Mobile Gaming Technologies!!!"
        content3="BitsWits collar the intricacies of mobile gaming technology and help develop a strategy for success. We use cutting-edge software, languages, and frameworks; you can enjoy superior graphics and sound that bring every battle, mission, or quest to life. Our innovative network protocols will keep your game running smoothly with low latency and excellent responsiveness."
      />
      {isSliderActive ? (
        <ServicesMaintain
          assignClass="game3d"
          subtitle="The Work We Undertake"
          title0={
            <>

              The Genres Of <span>Games</span> We Develop
            </>
          }
          text={
            <>

              We are famous for creating immersive game experiences with engaging
              storylines, stunning visuals, and innovative gameplay mechanics.
              <br />
              Here's an exciting rundown of what we bring to the table.
            </>
          }
          appContent={[]}
          appContent1={[
            {
              title: (
                <>
    
                  3D Game <br /> Concept Art
                </>
              ),
              text: "Our design and 3D game development team have extensive experience crafting vibrant and immersive artwork for various gaming applications. From characters and environmental designs to UI/UX, we can help define the visual identity of any game.",
              appclass: "app",
            },
            {
              title: (
                <>
    
                  3D Web and App <br /> Development
                </>
              ),
              text: "BitsWits offers world-class solutions for both web and mobile platforms. We specialized in creating stunning 3D apps with modern technologies such as Augmented Reality, Virtual Reality, 3D Modeling and Animation, WebGL, HTML5/CSS3, etc.",
              appclass: "app1",
            },
            {
              title: (
                <>
    
                  Advanced <br /> 3D Videos
                </>
              ),
              text: "With our state-of-the-art technology, we can turn your ideas into fully rendered 3D game videos with stunning visuals. Our services range from custom-created 3D game videos to motion capture animation.",
              appclass: "app2",
            },
          ]}
          appContent2={[
            {
              title: "3D Game App Integration",
              text: "BitsWits allow you to quickly and easily add 3D gaming experiences to your existing apps so that you can play high-end games without extra coding or hardware configurations. With our services, you can also easily and quickly integrate a virtual reality (VR) or augmented reality (AR) game into your project.",
              appclass: "app3",
            },
          ]}
          appContent3={[]}
          appContent4={[
            {
              title: "3D Imagining Art",
              text: "Our team of experienced 3D artists and engineers can turn your ideas into reality with stunning visuals that will wow your players. We specialize in creating engaging worlds with realistic landscapes, characters, and environments.",
              appclass: "app03",
            },
          ]}
          appContent5={[
            {
              title: "Support and Maintenance",
              text: "BitsWits recognizes that the game development journey doesn't end with its launch. That's why we provide our clients with comprehensive support and maintenance services to ensure their games remain attractive, immersive, and up-to-date with the latest trends.",
              appclass: "app04",
            },
          ]}
          appContent6={[]}
          appContent7={[]}
        />
      ) : (
        <ServicesMaintainmobile severcedata={severcedata} />
      )}
      <LpChoose transform="transform" />
      <ServiceExperience />
      <ServiceSolutions
        title="Create Engaging Worlds with Our 3D Game Development Studio!"
        text="BitsWits creates highly interactive and immersive 3D games that take players on an unforgettable journey into a thrilling world of realism. Our services feature designing complex characters, environments, objects, and textures, animating scenes, creating realistic physics for game objects to interact with each other, and integrating user controls and interfaces. From designing and developing 3D models to producing and integrating game logic, we provide end-to-end solutions for creating cutting-edge gaming experiences."
        Solution={Solution}
      />
      <ServiceGenre
        subTitle="OUR SERVICES ARE WHERE INNOVATION MEETS PLAY"
        title="What Genre Of Games Do We Create?"
        sections={[
          {
            title: <> 2D Games In Unity </>,
            text: "BitsWits ensure your vision is realized in an exciting, compelling 2D form from concept to completion. We specialize in pixel art and animations, level designs, scripting and effects, UI/UX design, audio production, and integration. Whether a simple arcade game, a complex platformer, puzzle-solving adventures, or an adventure-filled RPG, our team can design and develop the perfect game for you. Contact us today to bring your ideas to tangible reality!!!",
            gameicon: gameicon1,
          },
          {
            title: <> 3D Games In Unity </>,
            text: "At BitsWits, we help you build 3D games that captivate your audience. Our experienced developers share an in-depth understanding of the latest technologies and techniques, i.e., Maya, 3ds Max, and whatnot, to ensure games that look and play like no other. By incorporating rendering techniques and advanced physics into each game, we simply help your project succeed in the fierce gaming competition! Connect with us to roll out a game never played before!",
            gameicon: gameicon2,
          },
          {
            title: <> 3D Mobile Games </>,
            text: "BitsWits proudly shares its ability to create innovative and secure NFT games that give players control over their gaming assets, allowing them to be creative and have more ownership of the content they create in-game. By leveraging the power of DLT, we commit to high-quality, secure code that offers seamless UI with minimal latency. We disrupt every genre with our creative potential, from action, adventure, and strategy to simulations. Give us a try, and let us help you enter the crypto sphere with confidence!!!",
            gameicon: gameicon3,
          },
        ]}
      />
      <Capabilities3d />
      <ServiceEngage
        subTitle="HIRE THE BEST; FORGET THE REST!"
        title="Why Engage BitsWits As Your Game Development Studio?"
        main={main}
        heading1="Skilled Team"
        text1="BitsWits celebrates a team of experienced game developers and designers with the necessary skills and knowledge to create engaging, highly-converting 3D games. Our developers always keep an eye on innovation and creativity."
        engIcon1={engIcon1}
        heading2="Quality Graphics"
        text2="BitsWits is committed to providing its clients with high-quality 3D graphics that capture the attention of players, making the gaming experience even more immersive."
        engIcon2={engIcon2}
        heading3="Cutting Edge Technology"
        text3="The developers at BitsWits are always looking to stay ahead of the curve when it comes to using innovative technology in their 3D games. They utilize the latest technologies and tools to ensure top-quality 3D games with immersive graphics, engaging gameplay, and high performance."
        engIcon3={engIcon3}
        heading4="Quality Assurance"
        text4="BitsWits employs a rigorous quality assurance process to ensure that every game created meets the highest standards of excellence. This helps to guarantee an exciting and bug-free gaming experience for all players."
        engIcon4={engIcon4}
      />
      <Newsuccess
        assignClass="spacing"
        subtitle="Ready For Success?"
        maintitle="Brace Yourself for What Happens Next"
        successSteps={[
          {
            number: "01",
            title: "Talk To Our Experts",
            text: "Contact us without obligation by email or phone and secure your free consultation.",
            buttonText: "Connect Now!",
            link: "#",
          },
          {
            number: "02",
            title: "Get A Quote",
            text: "Get an exact cost breakdown structure of your app.",
            buttonText: "Chat Now!",
            link: "#",
          },
          {
            number: "03",
            title: "Build An MVP",
            text: "Start your app development journey with no-obligation consultation via email and phone.",
            buttonText: "Call Now!",
            link: "#",
          },
        ]}
      />
      <Technologieswe />
      <Justbuildit />
      <Globallp6 />
      <Partnerships />
      <Formnewlp />
      <ServicesFaqs
        faqsData={[
          {
            question:
              "What are the stages and costs involved in iOS app development?",
            answer: (
              <>
  
                iOS development is a complex process that requires careful
                planning and budgeting. The stages of iOS development involve
                concepts to launch. The first stage is concept creation, which
                involves coming up with an idea for an app and determining how
                it will be designed and developed. Next comes the design phase,
                where developers create wireframes that help define the look and
                feel of an app. After that, the development stage begins, where
                coding and testing take place. Finally, the launch stage
                involves ensuring the app is compliant with Apple standards and
                distributing it through either the App Store or other means.
              </>
            ),
          },
          {
            question: "What are the types of iOS development?",
            answer: (
              <>
  
                iOS development is an incredibly versatile field. Whether you're
                creating a brand-new app, tweaking an existing one, or
                developing a mobile-friendly website, there are several
                different types of iOS development to explore. Here's a look at
                some of the most popular:
                <br />
                <br />
                1. Native Development: This type of development involves using
                Apple's Xcode IDE and the official SDK to create apps that are
                specifically designed for iOS devices. Native development is
                popular because it takes full advantage of all the latest
                features available on iOS, including access to device hardware
                and software libraries.
                <br />
                <br />
                2. Cross-Platform Development: This type of development involves
                creating a single app that can be used on both iOS and Android
                devices. Cross-platform development is becoming increasingly
                popular as it reduces the need to develop multiple versions of
                the same app.
                <br />
                <br />
                3. Web Development: This type of development involves creating a
                mobile-friendly version of an existing website using HTML, CSS,
                and JavaScript technologies. Web development is ideal for
                companies that want their users to access content on the go.
                <br />
                <br />
                4. Hybrid App Development: This type of development combines
                elements of native and web development to create an app that is
                both functional and visually appealing. It’s ideal for companies
                who want a custom solution that looks great on any device.
                <br />
                <br />
                No matter what type of iOS development you choose, a
                well-designed and optimized app can help your business stand out
                from the competition. With the right iOS and android app
                developer such as BitsWits, you can create an amazing user
                experience that will keep customers coming back for more.
              </>
            ),
          },
          {
            question:
              "Why you should consider investing in iOS app development?",
            answer: (
              <>
  
                Investing in iOS app development company is a great way to
                ensure that your business stands out from the competition.
                Here’s how:
                <br />
                <br />
                1. Increased Brand Visibility: Developing an iOS app can make
                your business more visible to potential customers, allowing them
                to easily find and use your services. This is especially useful
                if you want to reach a wider audience outside of your
                traditional local area.
                <br />
                <br />
                2. Improved Customer Engagement: By giving customers the ability
                to access and interact with your services via an iOS app, you
                can improve customer engagement and build stronger relationships
                with them. This in turn could lead to an increase in sales or a
                more loyal customer base.
                <br />
                <br />
                3. Increased Efficiency: Developing an iOS app can streamline
                processes such as ordering products or services, making
                payments, and scheduling appointments. By automating many of
                these tasks, you can save time and money, allowing you to focus
                on other areas of your business.
                <br />
                <br />
                4. Improved Security: iOS apps are more secure than other
                platforms, providing an added layer of protection for customer
                data. This can help to give customers peace of mind that their
                information is being kept safe and secure when using your
                services.
                <br />
                <br />
                Overall, investing in iOS app development company is a smart
                decision that can benefit your business in numerous ways.
              </>
            ),
          },
          {
            question:
              "What are the programming language(s) for iOS development?",
            answer: (
              <>
  
                The best programming language for iOS development depends on the
                app you want to create. If you’re just starting, consider
                learning Swift—Apple’s modern and intuitive coding language. It
                features a streamlined syntax that makes it easy to learn, and
                its versatile nature allows developers to create everything from
                simple apps with minimal code to advanced applications with
                elaborate features. Objective-C is another popular choice for
                the apple app development language, and if you’ve already
                written apps in this language, it might be a good option to
                stick with it. Both languages are supported by Apple, so the
                decision ultimately comes down to personal preference and what's
                most comfortable for you.
              </>
            ),
          },
          {
            question: "What is Swift iOS app development?",
            answer: (
              <>
  
                Swift iOS App Development is the process of creating, coding,
                and designing mobile applications for Apple's iOS operating
                system. With Swift being an open-source language, it allows
                developers to develop apps quickly with fewer code lines and
                robust features. The result? A faster, more efficient
                development process that produces exceptionally designed,
                user-friendly applications. For those who are looking for an
                innovative and reliable way to build their app, Swift is a
                perfect choice. From simple games to complex enterprise
                solutions – whatever you need, iOS App Development with hire
                swift developers has you covered!
              </>
            ),
          },
          {
            question: "What are iOS app development services?",
            answer: (
              <>
  
                iOS app development company help businesses create custom,
                engaging, and user-friendly applications for Apple's iOS
                platform. With their experienced professionals, they provide
                comprehensive services to develop an app that fits your business
                needs and stands out from the competition. They are well-versed
                in the latest iOS technologies and have a proven track record of
                developing apps for both the App Store and enterprise solutions.
                Whether you need an app to increase customer engagement or
                expand your market reach, iOS app development company will help
                take your business to the next level.
              </>
            ),
          },
        ]}
      />
      <HomeLocation />
    </>
  );
};

export default mobileApplication;
