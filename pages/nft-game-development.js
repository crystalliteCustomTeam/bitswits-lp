import Head from "next/head";
import React, { useState, useEffect } from "react";
// css
import styles from "@/styles/ServiceEngage.module.css";
import style from "@/styles/Globallp.module.css";
import styleTwo from "@/styles/Justbuildit.module.css";
//components
const Formnewlp = React.lazy(() => import("@/components/Formnewlp"));
const Partnerships = React.lazy(() => import("@/components/Partnerships"));
const People = React.lazy(() => import("@/components/People"));
const LpForm = React.lazy(() => import("@/components/LpForm"));
const Nothing = React.lazy(() => import("@/components/Nothing"));
const LpChoose = React.lazy(() => import("@/components/LpChoose"));
const HomeBannerSlider = React.lazy(() => import("@/components/HomeBannerSlider"));
const Globallp6 = React.lazy(() => import("@/components/GlobalLp6"));
const Technologieswe = React.lazy(() => import("@/components/NewMblTechnologiesWe"));
const ServicesBanner = React.lazy(() => import("@/components/ServicesBanner"));
const Justbuildit = React.lazy(() => import("@/components/Justbuildit"));
const ServicesAdvantage = React.lazy(() => import("@/components/ServicesAdvantage"));
const ServicesMaintain = React.lazy(() => import("@/components/ServicesMaintain"));
const ServiceSolutions = React.lazy(() => import("@/components/ServiceSolutions"));
const ServiceGenre = React.lazy(() => import("@/components/ServiceGenre"));
const Capabilitiesnft = React.lazy(() => import("@/components/Capabilitiesnft"));
const ServiceEngage = React.lazy(() => import("@/components/ServiceEngage"));
const Newsuccess = React.lazy(() => import("@/components/NewMblSuccess"));
const ServicesFaqs = React.lazy(() => import("@/components/ServicesFaqs"));
const HomeLocation = React.lazy(() => import("@/components/HomeLocation"));
const ServicesMaintainmobile = React.lazy(() => import("@/components/ServicesMaintainmobile"));
//images
const BannerImage = await import("@/public/images/nft/nft.png");
const AdvantageOne = await import("../public/newHomePageImages/donkey.png");
const Solution = await import("../public/newHomePageImages/ply3.png");
const gameicon1 = await import("@/public/gameicon/1nft.png");
const gameicon2 = await import("@/public/gameicon/2nft.png");
const gameicon3 = await import("@/public/gameicon/3nft.png");
const main = await import("@/public/sharknft/don.png");
const engIcon1 = await import("@/public/sharknft/1.png");
const engIcon2 = await import("@/public/sharknft/2.png");
const engIcon3 = await import("@/public/sharknft/3.png");
const engIcon4 = await import("@/public/sharknft/4.png");
const customios = await import("/public/nftapp/takehomewhatyouearn.png");
const iphoneapp = await import("/public/nftapp/rewardingchallenges.png");
const applewatch = await import("/public/nftapp/strengthenyourcharacter.png");
const appletvappdevelopment = await import("/public/nftapp/createyourownpath.png");
const iphoneappdesigning = await import("/public/nftapp/diversityofgames.png");
const hybridiphone = await import("/public/nftapp/collectrareitems.png");
const flutter = await import("/public/nftapp/showoffyourskills.png");
const pythone = await import("/public/nftapp/makeconnections.png");
const html = await import("/public/nftapp/competeforrewards.png");


export default function gamedevelopmentcompany() {

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
        title1: `Unlock Treasure Troves of Fun with Play-
        to-Earn NFT Games!`,
        text: `Are you ready to take your gaming experience to the next level? With play-to-earn NFT games, the possibilities are endless! Whether
        you're a hardcore collector or just looking for some extra cash, these interactive experiences can offer you something special.
        Explore the features of play-to-earn games, and get the ball rolled today!`,
      },
      serdata: [
        {
          title: "Take Home What You Earn",
          text: "Play-to-Earn NFT games create an opportunity for players to take home what they earn, either through rewards or tokens. With these games, you can build up your wealth without ever taking a loss!",
          appclass: "app",
          imgservice: customios,
        },
        {
          title: <> Rewarding Challenges </>,
          text: (
            <>
              {" "}
              With these NFT games, you will face rewarding challenges that test
              your abilities and allow you to earn rewards or tokens for
              completing them. It's a great way to increase your skills and
              expand your knowledge.{" "}
            </>
          ),
          appclass: "app1",
          imgservice: iphoneapp,
        },
        {
          title: <> Strengthen Your Character </>,
          text: `These Play-to-Earn NFT games can help you develop your character
          and increase confidence. As you make progress in the game, you
          learn more about yourself and can become a better player.`,
          appclass: "app2",
          imgservice: applewatch,
        },
        {
          title: "Create Your Own Path",
          text: "With Play-to-Earn NFT games, you can be your own boss. Create an economy for yourself by earning tokens, rewards, and additional items to help you progress in the game. The possibilities are endless with what you can achieve!",
          appclass: "app3",
          imgservice: appletvappdevelopment,
        },
        {
          title: "Diversity of Games",
          text: "A massive variety of NFT games is available for players to choose from, so you can find something that fits your interests and tastes. From sports games to puzzle games, there's something for everyone!",
          appclass: "app4",
          imgservice: iphoneappdesigning,
        },
        {
          title: "Collect Rare Items",
          text: "Step into a world of exclusive collectibles with NFT games! Unlock rare items that can't be found in other games and flaunt your one-of-a-kind collection to your friends. It's time to level up your gaming experience and invest in something unique.",
          appclass: "app5",
          imgservice: hybridiphone,
        },
        {
          title: <> Show Off Your Skills </>,
          text: "What better way to show off your skills than playing Play-to-Earn NFT games? You can gain recognition as you progress in the game and make your mark on the gaming world.",
          appclass: "app5",
          imgservice: flutter,
        },
        {
          title: "Make Connections",
          text: ` Play-to-Earn NFT games are a great way to connect with other
          players and enjoy the gaming experience together. Connecting
          with others helps build an online community and fosters
          collaboration and friendship.`,
          appclass: "app5",
          imgservice: pythone,
        },
        {
          title: "Compete for Rewards",
          text: `Competing in these games allows you to compete for rewards or
          tokens, which can be used to purchase additional items, upgrade
          your character, and even purchase real-world products! With the
          challenge of competition comes great rewards! With Play-to-Earn
          NFT games, you can truly have it all!`,
          appclass: "app5",
          imgservice: html,
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
        assignClass="gameNft"
        title={
          <>
            World-Class Provider Of NFT Game <br /> Development Solutions!
          </>
        }
        text={
          <>
            BitsWits specializes in creating NFT games using smart contracts on
            Ethereum, EOS, Tron, and Cardano. <br /> Our team spends countless
            hours crafting unique storylines, artwork, and game mechanics that
            bring <br /> the world of NFTs to life.
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
        title={<> Discover A World Of Possibilities! </>}
        title1="Unique Ownership"
        content1="NFT game development allows digital assets, such as artwork and collectibles, to be securely owned with a unique, blockchain-based identifier. This enables users to own digital assets without being replicated or copied by other players."
        title2="Enhanced Interactivity"
        content2="With NFT game development, players can interact directly with other players in various ways, from trading collectibles to participating in tournaments or competitions."
        title3="New Revenue Streams"
        content3="Developers can create new ways for players to monetize their experiences, such as selling in-game items or running virtual markets with rare items. This opens up a whole new range of potential sources of income for players."
        title4="Increased Immersion"
        content4="By leveraging the power of blockchain technology, NFT game development can provide an immersive gaming experience by allowing developers to create real-world objects and experiences within the game world."
        title5="Digital Authenticity"
        content5="By using an immutable ledger, NFTs provide an unparalleled level of digital authenticity, ensuring that users can verify the ownership and provenance of their digital assets."
        title6="Open-Source Platforms"
        content6={
          <>
            Many NFT game development platforms are open source, meaning players
            can help shape their games and contribute to their development. This
            allows for greater experimentation and creativity, resulting in a
            more engaging experience for players.
          </>
        }
        AdvantageOne={AdvantageOne}
      />
      {isSliderActive ? (
        <ServicesMaintain
          assignClass="gameNft"
          title0={
            <>
              Unlock Treasure Troves of Fun with Play-
              <br />
              to-Earn <span className="">NFT Games!</span>
            </>
          }
          text={
            <>
              Are you ready to take your gaming experience to the next level?
              With play-to-earn NFT games, the possibilities are endless!
              Whether
              <br /> you're a hardcore collector or just looking for some extra
              cash, these interactive experiences can offer you something
              special.
              <br /> Explore the features of play-to-earn games, and get the
              ball rolled today!
            </>
          }
          appContent={[]}
          appContent1={[
            {
              title: (
                <>
                  Take Home <br /> What You Earn
                </>
              ),
              text: "Play-to-Earn NFT games create an opportunity for players to take home what they earn, either through rewards or tokens. With these games, you can build up your wealth without ever taking a loss!",
              appclass: "app",
            },
            {
              title: (
                <>
                  Rewarding <br /> Challenges
                </>
              ),
              text: (
                <>
                  With these NFT games, you will face rewarding challenges that
                  test your abilities and allow you to earn rewards or tokens
                  for completing them. It's a great way to increase your skills
                  and expand your knowledge.
                </>
              ),
              appclass: "app1",
            },
            {
              title: (
                <>
                  Strengthen Your <br /> Character
                </>
              ),
              text: (
                <>
                  These Play-to-Earn NFT games can help you develop your
                  character and increase confidence. As you make progress in the
                  game, you learn more about yourself and can become a better
                  player.
                </>
              ),
              appclass: "app2",
            },
          ]}
          appContent2={[
            {
              title: "Create Your Own Path",
              text: "With Play-to-Earn NFT games, you can be your own boss. Create an economy for yourself by earning tokens, rewards, and additional items to help you progress in the game. The possibilities are endless with what you can achieve!",
              appclass: "app3",
            },
          ]}
          appContent3={[
            {
              title: "Diversity of Games",
              text: "A massive variety of NFT games is available for players to choose from, so you can find something that fits your interests and tastes. From sports games to puzzle games, there's something for everyone!",
              appclass: "app4",
            },
            {
              title: "Collect Rare Items",
              text: "Step into a world of exclusive collectibles with NFT games! Unlock rare items that can't be found in other games and flaunt your one-of-a-kind collection to your friends. It's time to level up your gaming experience and invest in something unique.",
              appclass: "app5",
            },
          ]}
          appContent4={[]}
          appContent5={[]}
          appContent6={[
            {
              title: <> Show Off Your Skills </>,
              text: "What better way to show off your skills than playing Play-to-Earn NFT games? You can gain recognition as you progress in the game and make your mark on the gaming world.",
              appclass: "app",
              addclass: "app05",
            },
            {
              title: <> Make Connections </>,
              text: (
                <>
                  Play-to-Earn NFT games are a great way to connect with other
                  players and enjoy the gaming experience together. Connecting
                  with others helps build an online community and fosters
                  collaboration and friendship.
                </>
              ),
              appclass: "app1",
              addclass: "app06",
            },
            {
              title: <> Compete for Rewards </>,
              text: (
                <>
                  Competing in these games allows you to compete for rewards or
                  tokens, which can be used to purchase additional items,
                  upgrade your character, and even purchase real-world products!
                  With the challenge of competition comes great rewards! With
                  Play-to-Earn NFT games, you can truly have it all!
                </>
              ),
              appclass: "app2",
              addclass: "app07",
            },
          ]}
          appContent7={[]}
        />
      ) : (
        <ServicesMaintainmobile severcedata={severcedata} />
      )}
      <LpChoose transform="transform" />
      <ServiceSolutions
        addClass="gameNft"
        subTitle="We'll Make Your NFT Game Dreams A Reality!"
        title="Be at the Forefront of Blockchain Technology and Utilize NFT Games for Big Wins"
        text="With our games, users have the power to create their own custom story and journey through the world of NFTs. To cut a long story short, we strive to marry our artistic vision with the latest technologies, allowing us to create stunning visuals and immersive experiences while maintaining excellent performance on all platforms."
        Solution={Solution}
      />
      <ServiceGenre
        subTitle="Services"
        title={
          <>
            Unstoppable Fun: <br /> NFT Game Development Services
          </>
        }
        sections={[
          {
            title: <> NFT Game Concept Design </>,
            text: "We specialize in crafting engaging and entertaining NFT experiences through our unique approach to concept design and game mechanics. BitsWits is simply bridging the gap between concept and reality.",
            gameicon: gameicon1,
          },
          {
            title: <> Play-to-Earn Game Development </>,
            text: "With our Play-to-Earn NFT games, you can create a unique game that rewards players with valuable digital tokens as they progress through levels or missions. It’s a great way to monetize your gaming experience and earn money while playing video games.",
            gameicon: gameicon2,
          },
          {
            title: <> Custom NFT Game Development </>,
            text: "We use our cutting-edge technology and industry-leading expertise to create high-quality non-fungible tokens that allow you to offer exclusive gaming experiences like no other. We specialize in building custom NFT games that are fun and engaging and provide a truly memorable gaming experience.",
            gameicon: gameicon3,
          },
        ]}
      />
      <Capabilitiesnft />
      <ServiceEngage
        addClass="gameNft"
        subTitle="Hire Developers"
        title={
          <>
            Ready to Unleash Your NFT Gaming <br /> Potential? Choose BitsWits!
          </>
        }
        main={main}
        heading1="Wide Range Of Expertise"
        text1="We have a wide range of expertise in developing NFT games, from simple mini-games to complex simulations. Our team is well-versed in developing games with an innovative edge and providing cost-effective solutions to meet your project goals."
        engIcon1={engIcon1}
        heading2="Custom/Adaptable Solutions"
        text2="We understand that no two NFT projects are the same. Our team is flexible enough to adapt our solutions to meet the unique requirements of your project. We deeply understand different game engines, platforms, and tools to ensure that your NFT game is designed to bring the best outcomes."
        engIcon2={engIcon2}
        heading3="Eye On The Latest"
        text3="We use the latest technologies, tools, and game development platforms to give our clients the best gaming experience. We also keep up with the latest trends in NFT gaming and use cutting-edge technologies to develop visually appealing, interactive, and immersive games."
        engIcon3={engIcon3}
        heading4="Security Measures"
        text4="They use enterprise-level technologies like encryption, authentication mechanisms, and authorization protocols to ensure that each game is safeguarded against data theft and malicious attacks. We also provide a secure infrastructure for the storage and secure delivery of digital assets."
        engIcon4={engIcon4}
        css={styles.marginTop}
        paddingTop={styles.paddingTop}
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
      <Justbuildit paddingBottom={styleTwo.paddingBottom} />
      <Globallp6 paddingTop={style.paddingTop} />
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
                experience that will keep customers coming back for more.{" "}
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
                decision that can benefit your business in numerous ways.{" "}
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
}
