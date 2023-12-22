import Head from "next/head";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// style
import styles from "@/styles/ServicesAdvantage.module.css";
//components
const Technologieswe = React.lazy(() => import("@/components/Technologieswe"));
const ServicesBanner = React.lazy(() => import("@/components/ServicesBanner"));
const ServicesAdvantage = React.lazy(() => import("@/components/ServicesAdvantage"));
const ServiceTarget = React.lazy(() => import("@/components/ServiceTarget"));
const ServicesMaintain = React.lazy(() =>import("@/components/ServicesMaintain"));
const ServiceSolutions = React.lazy(() =>import("@/components/ServiceSolutions"));
const ServiceGenre = React.lazy(() => import("@/components/ServiceGenre"));
const ServiceEngage = React.lazy(() => import("@/components/ServiceEngage"));
const Newsuccess = React.lazy(() => import("@/components/NewMblSuccess"));
const ServicesFaqs = React.lazy(() => import("@/components/ServicesFaqs"));
const HomeLocation = React.lazy(() => import("@/components/HomeLocation"));
const HomeBannerSlider = React.lazy(() => import("@/components/HomeBannerSlider"));
const LpForm = React.lazy(() => import("@/components/LpForm"));
const Nothing = React.lazy(() => import("@/components/Nothing"));
const People = React.lazy(() => import("@/components/People"));
const LpChoose = React.lazy(() => import("@/components/LpChoose"));
const Partnerships = React.lazy(() => import("@/components/Partnerships"));
const Globallp6 = React.lazy(() => import("@/components/GlobalLp6"));
const Justbuildit = React.lazy(() => import("@/components/Justbuildit"));
const Formnewlp = React.lazy(() => import("@/components/Formnewlp"));
const ServicesMaintainmobile = React.lazy(() => import("@/components/ServicesMaintainmobile"));
//images
const BannerImage = await import("@/public/newMobilePageImages/gameappbanner.png");
const AdvantageOne = await import("../public/newHomePageImages/lady.png");
const Solution = await import("../public/newHomePageImages/playgame.png");
const gameicon1 = await import("@/public/gameicon/1.png");
const gameicon2 = await import("@/public/gameicon/2.png");
const gameicon3 = await import("@/public/gameicon/3.png");
const main = await import("@/public/shark/main.png");
const engIcon1 = await import("@/public/shark/shark.png");
const engIcon2 = await import("@/public/shark/shark2.png");
const engIcon3 = await import("@/public/shark/shark3.png");
const engIcon4 = await import("@/public/shark/shark4.png");
const customios = await import("../public/images/gameappdevelopement/unity3dgames.png");
const iphoneapp = await import("../public/images/gameappdevelopement/virtualrealitygames.png");
const applewatch = await import("../public/images/gameappdevelopement/3dgamedevelopment.png");
const appletvappdevelopment = await import("../public/images/gameappdevelopement/unrealgamedevelopment.png");
const iphoneappdesigning = await import("../public/images/gameappdevelopement/argamedevelopment.png");
const hybridiphone = await import("../public/images/gameappdevelopement/mrgamedevelopment.png");
const react = await import("../public/images/gameappdevelopement/crossplatformgamedevelopment.png");
const reactnative = await import("../public/images/gameappdevelopement/buildboxgamedevelopment.png");

export default function Gameapplicationdevelopment() {
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
        Here's an exciting rundown of what we bring to the table.`,
      },
      serdata: [
        {
          title: " Unity 3D Games",
          text: `We work with Unity 3D technology to foster unforgettable gaming
          experiences that push the boundaries of what's possible. Whether
          you want an action-packed shooter or a more peaceful puzzle
          title, we can ensure your game is a success and tends to become
          a revenue-generating machine!`,
          appclass: "app",
          imgservice: customios,
        },
        {
          title: "Virtual Reality Games",
          text: `Producing immersive and mind-blowing virtual reality experiences
          for gamers and businesses alike. Our games are designed with the
          player's experience in mind and feature intuitive controls,
          immersive soundscapes, and realistic visuals that transport
          players into another world. Get ready to hook your gamers and
          urge them to return for more!`,
          appclass: "app1",
          imgservice: iphoneapp,
        },
        {
          title: "3D Game Development",
          text: `BitsWits masters the art of creating stunning 3D games,
          harnessing the power of cutting-edge technology and
          state-of-the-art tools. We know that a successful 3D game
          requires more than just great visuals – it's also about a
          compelling gameplay experience. Hence, we ensure games that are
          balanced, entertaining, and mesmerizing for players of all ages!
          Believe it or not, we are the perfect place to get your next
          gaming project off the ground!`,
          appclass: "app2",
          imgservice: applewatch,
        },
        {
          title: "Unreal Game Development",
          text: "Unleashing the potential of Unreal Engine Technology, BitsWits create games that push the boundaries of what's possible in gaming and transport players into new worlds with breathtaking visuals and engaging gameplay. Let your imagination run wild with the one-of-a-kind gaming studio, BitsWits!!!",
          appclass: "app3",
          imgservice: appletvappdevelopment,
        },
        {
          title: "AR Game Development",
          text: "BitsWits helps you unlock a world of dazzling possibilities and experience the ultimate gaming entertainment with its sheer expertise in building AR games. With cutting-edge technologies such as 3D scanning, game engine creation, and cloud-based storage, we provide innovative solutions built to stand the test of time!",
          appclass: "app4",
          imgservice: iphoneappdesigning,
        },
        {
          title: "MR Game Development",
          text: "BitsWits create technology-advanced MR games using the latest 3D graphics, motion capture systems, and robust gaming engines. From intense battles, realistic racing simulators, exciting open-world exploration, and highly interactive first-person shooters to interactive puzzles, there is nothing our gaming maestros don't excel at. Time to leave your gamers gasping for more; after all, this is what we always ensure!",
          appclass: "app5",
          imgservice: hybridiphone,
        },
        {
          title: "Cross-platform Game Development",
          text: `BitsWits capitalizes on the latest technologies to develop games that look and run seamlessly on all devices and gadgets. We share the experience in a slew of genres, i.e., casual, RPG, FPS, and more. Hire us to get a game that serves as the ticket to reaching a global audience!`,
          appclass: "app6",
          imgservice: react,
        },
        {
          title: "Buildbox Game Development",
          text: "BitsWits cashes in on the Buildbox platform and creates beautiful 3D worlds, physics-based levels, mind-bending puzzles, heart-pumping action games, side-scrolling runners, and whatnot. Tap into the power of this ground-breaking space with our world-class game developers, and let your rivals be knocked out of the competition!",
          appclass: "app7",
          imgservice: reactnative,
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
        assignClass="gameApp"
        subtitle="AWARDED #1 GAME APP DEVELOPMENT COMPANY"
        title={
          <>
            {" "}
            Experience The Roller Coaster Of <br /> The Gaming World With Us!{" "}
          </>
        }
        BannerImage={BannerImage}
      />
      <People People="people" />
      <HomeBannerSlider />
      <LpForm />
      <Nothing Nothing="nothingLp6" />
      <ServicesAdvantage
        title={
          <>
            {" "}
            Bullet-Proof Game <br /> Development Action Plan{" "}
          </>
        }
        text="Custom Development Roadmap For Games That Brings Fame"
        title1="Ideation"
        content1="We get our creative juices flowing by brainstorming ideas and concepts for your game. We work together to figure out what kind of game you want to create, the story behind it, and how you want players to interact with it."
        title2="Testing"
        content2="Before launching your game, we ensure it works properly by testing it thoroughly. This includes running the game on different platforms and devices to ensure everything runs smoothly."
        title3="Design"
        content3="We create a blueprint for your new game. This follows through designing all elements, from characters and levels to user interface features and environment settings. We ponder how each part fits together to work well in harmony."
        title4="Finalization"
        content4={
          <>
            {" "}
            Once we have tested your game, it's time to finalize by adding any
            last-minute features or tweaks we think are necessary. Also, now's
            the perfect time to start marketing your game! Let's get people
            excited about it before launch day, so they can't wait to play.{" "}
          </>
        }
        title5="Development"
        content5="The development phase is where the real magic happens. Our experienced developers will bring your project to life by coding it and creating the graphics that you have designed."
        title6="Launch"
        content6={
          <>
            {" "}
            Now that your game is finished and tested, it's time to let the
            world know about it. Finally, launch your game and watch as people
            flock to play it!{" "}
          </>
        }
        AdvantageOne={AdvantageOne}
        css={styles.maxWidth}
      />
      <ServiceTarget
        addClass="gameApp"
        subTitle="Features Of Our Development Endeavors"
        title={
          <>
            {" "}
            Invigorate Your Target Audience <br /> With Dynamic Gameplay{" "}
          </>
        }
        text={
          <>
            {" "}
            It's time to develop compelling storylines and rich characters with
            BitsWits; after all, don't you want to create an immersive
            experience? <br></br> We use the latest technologies and
            cutting-edge visuals to enable players to interact intuitively,
            whether playing on a PC, console, or mobile device.{" "}
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
          assignClass="gameApp"
          subtitle="The Work We Undertake"
          title0={
            <>
              {" "}
              The Genres Of <span className="">Games</span> We Develop{" "}
            </>
          }
          text={
            <>
              {" "}
              We are famous for creating immersive game experiences with
              engaging storylines, stunning visuals, and innovative gameplay
              mechanics. <br />
              Here's an exciting rundown of what we bring to the table.{" "}
            </>
          }
          appContent={[]}
          appContent1={[
            {
              title: (
                <>
                  {" "}
                  Unity 3D <br /> Games{" "}
                </>
              ),
              text: (
                <>
                  {" "}
                  We work with Unity 3D technology to foster unforgettable
                  gaming experiences that push the boundaries of what's
                  possible. Whether you want an action-packed shooter or a more
                  peaceful puzzle title, we can ensure your game is a success
                  and tends to become a revenue-generating machine!{" "}
                </>
              ),
              appclass: "app",
            },
            {
              title: (
                <>
                  {" "}
                  Virtual Reality <br /> Games{" "}
                </>
              ),
              text: (
                <>
                  {" "}
                  Producing immersive and mind-blowing virtual reality
                  experiences for gamers and businesses alike. Our games are
                  designed with the player's experience in mind and feature
                  intuitive controls, immersive soundscapes, and realistic
                  visuals that transport players into another world. Get ready
                  to hook your gamers and urge them to return for more!{" "}
                </>
              ),
              appclass: "app1",
            },
            {
              title: (
                <>
                  {" "}
                  3D Game <br /> Development{" "}
                </>
              ),
              text: (
                <>
                  {" "}
                  BitsWits masters the art of creating stunning 3D games,
                  harnessing the power of cutting-edge technology and
                  state-of-the-art tools. We know that a successful 3D game
                  requires more than just great visuals – it's also about a
                  compelling gameplay experience. Hence, we ensure games that
                  are balanced, entertaining, and mesmerizing for players of all
                  ages! Believe it or not, we are the perfect place to get your
                  next gaming project off the ground!{" "}
                </>
              ),
              appclass: "app2",
            },
          ]}
          appContent2={[
            {
              title: "Unreal Game Development",
              text: "Unleashing the potential of Unreal Engine Technology, BitsWits create games that push the boundaries of what's possible in gaming and transport players into new worlds with breathtaking visuals and engaging gameplay. Let your imagination run wild with the one-of-a-kind gaming studio, BitsWits!!!",
              appclass: "app3",
            },
          ]}
          appContent3={[
            {
              title: "AR Game Development",
              text: "BitsWits helps you unlock a world of dazzling possibilities and experience the ultimate gaming entertainment with its sheer expertise in building AR games. With cutting-edge technologies such as 3D scanning, game engine creation, and cloud-based storage, we provide innovative solutions built to stand the test of time!",
              appclass: "app4",
            },
            {
              title: "MR Game Development",
              text: "BitsWits create technology-advanced MR games using the latest 3D graphics, motion capture systems, and robust gaming engines. From intense battles, realistic racing simulators, exciting open-world exploration, and highly interactive first-person shooters to interactive puzzles, there is nothing our gaming maestros don't excel at. Time to leave your gamers gasping for more; after all, this is what we always ensure!",
              appclass: "app5",
            },
          ]}
          appContent4={[
            {
              title: "Cross-platform Game Development",
              text: (
                <>
                  BitsWits capitalizes on the latest technologies to develop
                  games that look and run seamlessly{" "}
                  <br className="d-lg-block d-none" /> on all devices and
                  gadgets. We share the experience in a slew of genres, i.e.,
                  casual, RPG, FPS,
                  <br className="d-lg-block d-none" /> and more. Hire us to get
                  a game that serves as the ticket to reaching a global
                  audience!
                </>
              ),
              appclass: "app03",
            },
          ]}
          appContent5={[
            {
              title: "Buildbox Game Development",
              text: "BitsWits cashes in on the Buildbox platform and creates beautiful 3D worlds, physics-based levels, mind-bending puzzles, heart-pumping action games, side-scrolling runners, and whatnot. Tap into the power of this ground-breaking space with our world-class game developers, and let your rivals be knocked out of the competition!",
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
      <ServiceSolutions
        addClass="gameApp"
        title="Leverage Our Proficiency in Mobile Game Development Today"
        text="Our team brings a wealth of expertise to the table. We celebrate a team of experts in game design, programming, and art direction, ensuring your vision for a video game comes to life with precision and accuracy."
        Solution={Solution}
      />
      <ServiceGenre
        addClass="gameApp"
        subTitle="OUR SERVICES ARE WHERE INNOVATION MEETS PLAY"
        title="What Genre Of Games Do We Create?"
        sections={[
          {
            title: <> 2D Game Development </>,
            text: "BitsWits ensure your vision is realized in an exciting, compelling 2D form from concept to completion. We specialize in pixel art and animations, level designs, scripting and effects, UI/UX design, audio production, and integration. Whether a simple arcade game, a complex platformer, puzzle-solving adventures, or an adventure-filled RPG, our team can design and develop the perfect game for you. Contact us today to bring your ideas to tangible reality!!!",
            gameicon: gameicon1,
          },
          {
            title: <> 3D Game Development </>,
            text: "At BitsWits, we help you build 3D games that captivate your audience. Our experienced developers share an in-depth understanding of the latest technologies and techniques, i.e., Maya, 3ds Max, and whatnot, to ensure games that look and play like no other. By incorporating rendering techniques and advanced physics into each game, we simply help your project succeed in the fierce gaming competition! Connect with us to roll out a game never played before!",
            gameicon: gameicon2,
          },
          {
            title: <> NFT Game Development </>,
            text: "BitsWits proudly shares its ability to create innovative and secure NFT games that give players control over their gaming assets, allowing them to be creative and have more ownership of the content they create in-game. By leveraging the power of DLT, we commit to high-quality, secure code that offers seamless UI with minimal latency. We disrupt every genre with our creative potential, from action, adventure, and strategy to simulations. Give us a try, and let us help you enter the crypto sphere with confidence!!!",
            gameicon: gameicon3,
          },
        ]}
      />
      <ServiceEngage
        subTitle="HIRE THE BEST; FORGET THE REST!"
        title="Why Engage BitsWits As Your Game Development Studio?"
        main={main}
        heading1="Unpaired Expertise"
        text1="Our team brings a wealth of expertise to the table. We celebrate a team of experts in game design, programming, and art direction, ensuring your vision for a video game comes to life with precision and accuracy."
        engIcon1={engIcon1}
        heading2="Tabs On Latest Trends"
        text2="We are passionate about gaming and strive to stay up-to-date on the latest trends in the industry. We are equipped with the necessary tools, knowledge, and skills to create an engaging video game experience."
        engIcon2={engIcon2}
        heading3="Creative Solutions"
        text3="BitsWits offers innovative solutions tailored to your specific needs and marketing objectives. Whether you're looking to create a game that educates, entertains, or helps you earn a steady stream of revenue, our team can craft the perfect experience to meet your needs."
        engIcon3={engIcon3}
        heading4="Prices That Make Sense"
        text4="We offer competitive prices for our services, meaning you get a great game at an even better price. Plus, if you're not 100% satisfied with the final product, we offer a full refund so you can be sure that your money is being well spent. There is one thing for sure at BitsWits, your hard-earned money won't go down the drain."
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
                {" "}
                iOS development is a complex process that requires careful
                planning and budgeting. The stages of iOS development involve
                concepts to launch. The first stage is concept creation, which
                involves coming up with an idea for an app and determining how
                it will be designed and developed. Next comes the design phase,
                where developers create wireframes that help define the look and
                feel of an app. After that, the development stage begins, where
                coding and testing take place. Finally, the launch stage
                involves ensuring the app is compliant with Apple standards and
                distributing it through either the App Store or other means.{" "}
              </>
            ),
          },
          {
            question: "What are the types of iOS development?",
            answer: (
              <>
                {" "}
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
                experience that will keep customers coming back for more.{" "}
              </>
            ),
          },
          {
            question:
              "Why you should consider investing in iOS app development?",
            answer: (
              <>
                {" "}
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
                decision that can benefit your business in numerous ways.{" "}
              </>
            ),
          },
          {
            question:
              "What are the programming language(s) for iOS development?",
            answer: (
              <>
                {" "}
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
                most comfortable for you.{" "}
              </>
            ),
          },
          {
            question: "What is Swift iOS app development?",
            answer: (
              <>
                {" "}
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
                swift developers has you covered!{" "}
              </>
            ),
          },
          {
            question: "What are iOS app development services?",
            answer: (
              <>
                {" "}
                iOS app development company help businesses create custom,
                engaging, and user-friendly applications for Apple's iOS
                platform. With their experienced professionals, they provide
                comprehensive services to develop an app that fits your business
                needs and stands out from the competition. They are well-versed
                in the latest iOS technologies and have a proven track record of
                developing apps for both the App Store and enterprise solutions.
                Whether you need an app to increase customer engagement or
                expand your market reach, iOS app development company will help
                take your business to the next level.{" "}
              </>
            ),
          },
        ]}
      />
      <HomeLocation />
    </>
  );
}
