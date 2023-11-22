import Head from 'next/head'
import React from 'react';
//components
const ServicesBanner = React.lazy(() => import('@/components/ServicesBanner'));
const ServicesAdvantage = React.lazy(() => import('@/components/ServicesAdvantage'));
const ServicesMaintain = React.lazy(() => import('@/components/ServicesMaintain'));
const NewAddress = React.lazy(() => import('@/components/NewAddress'));
const ServiceSolutions = React.lazy(() => import('@/components/ServiceSolutions'));
const GameCapabilities = React.lazy(() => import('@/components/GameCapabilities'));
const ServiceEngage = React.lazy(() => import('@/components/ServiceEngage'));
const NewHomeAbout = React.lazy(() => import('@/components/NewHomePageAbout'));
const Newsuccess = React.lazy(() => import('@/components/NewMblSuccess'));
const GameTechnologies = React.lazy(() => import('@/components/GameTechnologies'));
const NewHomeGlobal = React.lazy(() => import('@/components/NewHomeGlobal'));
const NewHomeSlider = React.lazy(() => import('@/components/NewHomeSlider'));
const Homenextproject = React.lazy(() => import('@/components/Homenextproject'));
const ServicesFaqs = React.lazy(() => import('@/components/ServicesFaqs'));
const HomeLocation = React.lazy(() => import('@/components/HomeLocation'));
//images
const BannerImage = await import("@/public/blockchaindevelopment/images/blockchainbanner.png");
const AdvantageOne = await import('../public/blockchaindevelopment/images/advantage1.png');
const Solution = await import('../public/blockchaindevelopment/images/solution.png');
const main = await import("@/public/blockchaindevelopment/images/engagecenter.png");
const engIcon1 = await import("@/public/blockchaindevelopment/images/engage1.png");
const engIcon2 = await import("@/public/blockchaindevelopment/images/engage2.png");
const engIcon3 = await import("@/public/blockchaindevelopment/images/engage3.png");
const engIcon4 = await import("@/public/blockchaindevelopment/images/engage4.png");


export default function mobileApplication() {
    return (
        <>
            <Head>
                <title>Top Mobile App Development Company - BitsWits</title>
                <meta name="description" content="Apps that simplify your life, one click at a time, BitsWits is your go-to destination for top mobile app developers who can help you bring your ideas to life." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/icons/favicon.png" />
            </Head>

            <ServicesBanner
                assignClass="gameBlckChain"
                title={<> We Revolutionize The Way Digital <br /> Games Are Designed And Played!!! </>}
                text={<> BitsWits is an up-and-coming blockchain game development company that produces cutting-edge blockchain games <br /> for the global gaming market. We create next-generation games based on distributed ledger technology (DLT). </>}
                BannerImage={BannerImage}
            />

            <ServicesAdvantage
                subTitle="Bounties"
                title={<> Advantages Of <br /> Blockchain For Gaming </>}

                title1='Security'
                content1={<> Blockchain technology offers game developers an unprecedented level of security, ensuring that users' accounts, valuable in-game items, and progress remain safe from hackers. </>}

                title2='Smart Contracts'
                content2='Through smart contracts, game developers can create automated, self-executing agreements that open up an entirely new level of flexibility when creating games.'

                title3='Transparency'
                content3={<> Players can keep track of the entire game's transactions and activities, authorizing greater trust and transparency in game development. This type of data integrity is beneficial for competitive games where players may be incentivized to succeed. </>}

                title4='Improved Asset Management'
                content4='Blockchain technology offers improved asset management for developers, allowing them to track and manage in-game items more accurately. This ensures players can quickly and easily access the items they need without any hassle.'

                title5='Faster Transactions'
                content5='Blockchain technology allows for near-instantaneous payments between players without any additional fees or middlemen. This ensures the in-game economies are vibrant and healthy, allowing for a better gaming experience.'

                title6='Enhanced Interoperability'
                content6={<> Blockchain technology finally enables the creation of more interoperable games, enabling players to exchange game assets and items across different platforms and devices, improving their gaming experience by eliminating the need to start from scratch each time they switch devices. </>}
                AdvantageOne={AdvantageOne}
            />

            <ServicesMaintain
                assignClass="gameBlckChain"
                subtitle="Our Services Are Where Innovation Meets Play"
                title4={<> Blockchain Gaming Engineering Services </>}
                text={<> From creating multiplayer games to providing secure in-game asset exchange options, BitsWits leverages blockchain technology for game development. Our services include creating next-generation games using the latest technology and tools, such as Unity 3D engine for VR/AR gaming experiences, Augmented Reality (AR) support for games, low-latency gameplay features, HoloLens integration, and blockchain-backed matchmaking. </>}
                appContent={[]}
                appContent1={
                    [
                        {
                            title: (<> Ethereum Dapp <br /> Game Development </>),
                            text: 'BitsWits specializes in creating innovative, high-quality Ethereum dapps for businesses and entrepreneurs. All thanks to our dedicated team of developers, we provide reliable solutions to help enterprises to increase their profits and maximize user engagement.',
                            appclass: "app"
                        },
                        {
                            title: (<> Polygon Game <br /> Development </>),
                            text: (<> We specialize in Polygon game development and create detailed game environments and characters with smooth animation capabilities. From design and coding to animation, we create engaging games that push the boundaries of creativity. </>),
                            appclass: "app1",
                        },
                        {
                            title: (<> Solana Blockchain <br /> Development </>),
                            text: (<> Solana Blockchain game development is all the rage right now, and BitsWits is leading the charge. We specialize in creating powerful, high-volume games with a wide range of features – from fast-paced action to deep strategic play. </>),
                            appclass: "app2",
                        }
                    ]
                }
                appContent2={
                    [
                        {
                            title: 'EOS Dapp Game Development',
                            text: "BitsWits offers comprehensive services for developing high-performance and secure blockchain games using the EOS platform. Get in touch to create engaging, user-friendly and intuitive dapps with unique features that help you stand out from the competition.",
                            appclass: "app3",
                        },
                    ]
                }
                appContent3={[
                    {
                        title: 'Metaverse Blockchain Game Development',
                        text: "Using blockchain and cutting-edge technology, we deploy metaverse projects with features such as distributed storage and processing, zero-knowledge transactions, and non-fungible tokens (NFTs). Build next-generation titles with us!",
                        appclass: "app4",
                    },
                    {
                        title: 'NFT Blockchain Game Development',
                        text: "Utilizing blockchain technology, we create games that offer unprecedented levels of customization, security, and transparency. With no middlemen involved in transactions, you can now be sure that your digital games and assets are secure from any external interference.",
                        appclass: "app5",
                    },
                ]}
                appContent4={[]}
                appContent5={[]}
                appContent6={
                    [
                        {
                            title: (<> TRON Game Development </>),
                            text: (<> Boasting some of the best 3D graphics ever seen in a game, our TRON games let you immerse yourself in a virtual world full of adventure, excitement, and action. With realistic animations and stunning sound effects, you'll feel like you're part of the action. </>),
                            appclass: "app",
                            addclass: "app05",
                        },
                        {
                            title: (<> BSC Game Development </>),
                            text: (<> BSC Game Development by BitsWits is a complete suite of game development tools designed for professionals and enthusiasts alike. With its powerful engine, integrated asset library, intuitive interface, and comprehensive visual toolsets, developers can quickly bring their ideas to life. </>),
                            appclass: "app1",
                            addclass: "app06",
                        },
                        {
                            title: (<> Crypto Gambling Games </>),
                            text: (<> Our team of experts is highly knowledgeable about blockchain technology and its applications in gaming, allowing us to develop cutting-edge, secure online casinos and betting platforms with an unparalleled level of safety, fairness, and security. </>),
                            appclass: "app2",
                            addclass: "app07",
                        }
                    ]
                }
                appContent7={[
                    {
                        title: 'In-Game Asset & Token Creation',
                        text: "BitsWits specializes in providing bespoke in-game asset and token creation services. We offer various services tailored to suit your specific requirements: from creating 3D or 2D assets to programming custom tokenization systems and blockchain integration.",
                        appclass: "app4",
                        addclass: "app08",
                    },
                    {
                        title: 'Smart Contract Dapp Game Development',
                        text: "BitsWits provides comprehensive smart-contract solutions for games that operate on blockchain networks. Contact us to bring your notion of a modern and decentralized gaming experience into reality.",
                        appclass: "app5",
                        addclass: "app09",
                    },
                ]}
            />
            <NewAddress
                addresClass="address2d"
            />
            <ServiceSolutions
                addClass="gameBlckChain"
                subTitle="Solutions"
                title="Take Your Gaming Experience to the Blockchain!"
                text="BitsWits is at the cutting edge of blockchain game development, offering a suite of products to help businesses create fully featured games with all the security and transparency benefits of distributed ledger technology."
                Solution={Solution}
            />
            <GameCapabilities />
            <ServiceEngage
                addClass="gameBlckChain"
                subTitle="Hire Top-Notch Blockchain Developers"
                title={<> Reason You Will Love Our Blockchain <br /> Game Development Company </>}
                main={main}
                heading1='Business Value-driven Solutions'
                text1="BitsWits offers multiple platform support for blockchain game development, meaning your game will reach a much wider audience."
                engIcon1={engIcon1}
                heading2='Agile Methodology'
                text2="With our agile development process, you can be sure that we will release your game quickly without compromising quality. You can be sure of the quality games with no glitches!"
                engIcon2={engIcon2}
                heading3='Smooth User Experience'
                text3="BitsWits understands that the success of any blockchain game depends on its ability to provide secure transactions in a safe environment. Hence, we take extra care to ensure that our solutions are secure and reliable, ensuring a smooth user experience."
                engIcon3={engIcon3}
                heading4='Multi-platforms Game Development'
                text4="Our team of experienced developers has the capacity to craft custom blockchain games for any platform—from mobile, desktop, console, and web to virtual reality."
                engIcon4={engIcon4}
            />
            <NewHomeAbout
                title="Our Client’s Feedback Has Been"
                subtitle="Nothing Short Of Amazing!"
                addClass="game3d"
            />
            <Newsuccess
                assignClass="spacing2d"
                subtitle="Ready For Success?"
                maintitle="Brace Yourself for What Happens Next"
                successSteps={
                    [
                        {
                            number: '01',
                            title: 'Talk To Our Experts',
                            text: 'Contact us without obligation by email or phone and secure your free consultation.',
                            buttonText: 'Connect Now!',
                            link: '#',
                        },
                        {
                            number: '02',
                            title: 'Get A Quote',
                            text: 'Get an exact cost breakdown structure of your app.',
                            buttonText: 'Chat Now!',
                            link: '#',
                        },
                        {
                            number: '03',
                            title: 'Build An MVP',
                            text: 'Start your app development journey with no-obligation consultation via email and phone.',
                            buttonText: 'Call Now!',
                            link: '#',
                        },
                    ]
                }
            />
            <GameTechnologies />
            <NewHomeGlobal
                assignClass="game3d"
            />
            <NewHomeSlider />
            <Homenextproject
                title="Brace yourself for an App-venture!"
            />
            <ServicesFaqs
                faqsData={
                    [
                        {
                            question: "What is blockchain game development?",
                            answer:
                                (<> Blockchain game development involves creating video games that leverage blockchain technology for various purposes, including asset ownership, secure transactions, and provably fair gameplay. </>),
                        },
                        {
                            question: "How does blockchain technology work in games?",
                            answer:
                                (<> In games, blockchain technology is used to create, manage, and verify digital assets (such as in-game items, characters, or currencies) as non-fungible tokens (NFTs) or other types of blockchain-based assets. These assets are stored on a decentralized ledger, providing players with true ownership and transparency. </>),
                        },
                        {
                            question: "What are the benefits of using blockchain in game development?",
                            answer:
                                (<> Using blockchain in game development offers benefits such as:True ownership of in-game assets for players.<br /><br />
                                    Immutable ownership records and transparency.<br /><br />
                                    Interoperability, allowing assets to be used across different games or platforms.<br /><br />
                                    Enabling player-driven economies and marketplaces. </>),
                        },
                        {
                            question: "Which blockchain platforms are commonly used for blockchain game development?",
                            answer:
                                (<> Ethereum is one of the most widely used blockchain platforms for creating blockchain-based games. Other platforms like Binance Smart Chain, Flow, and Polygon (formerly Matic) are also gaining popularity in the blockchain gaming space. </>),
                        },
                        {
                            question: "What is the role of smart contracts in blockchain game development?",
                            answer:
                                (<> Smart contracts are self-executing contracts with predefined rules and conditions written in code. In blockchain games, smart contracts handle functions like creating, transferring, and verifying ownership of in-game assets, as well as managing in-game transactions. </>),
                        },
                        {
                            question: "How can players interact with blockchain-based assets in a game?",
                            answer:
                                (<> Players interact with blockchain-based assets through digital wallets that support the blockchain on which the assets are created (e.g., Ethereum wallet for Ethereum-based assets). They can buy, sell, trade, and use these assets within the game ecosystem. </>),
                        },
                    ]
                }
            />
            <HomeLocation />

        </>
    )
}