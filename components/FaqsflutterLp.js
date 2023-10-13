import React from 'react'
import styles from '@/styles/FaqsLp.module.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Link from 'next/link'
import Accordion from 'react-bootstrap/Accordion';
import { FaAngleDown } from 'react-icons/fa';


const FaqsLp = () => {

    return (
        <>
            <section className={styles.faqsLp}>
                <Container className='faqsLp'>
                    <h3 className="font50 grdiant f-montserrat f-700 text-center mb-5">
                        Frequently Asked Questions
                    </h3>

                    <Row className='mt-4'>
                        <Accordion defaultActiveKey="00">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    How Much Does Flutter App Development Cost?
                                    <FaAngleDown size={25} />
                                </Accordion.Header>
                                <Accordion.Body>
                                    Flutter mobile app development is an increasingly popular and cost-effective way to develop mobile applications. Developing with Flutter is faster, easier, and produces more reliable results than other cross-platform solutions. <b>But how much does flutter app development cost?</b> <br></br>
                                    The answer depends on the complexity of the application and the number of features you want to include. Generally speaking, simple applications with basic functionality can cost anywhere from $[Our Basic Package] - $[Our Premium Package], while more complex applications can range up to $[Our Basic Package] or more.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    Why Should I Choose Flutter for App Development?
                                    <FaAngleDown size={25} />
                                </Accordion.Header>
                                <Accordion.Body>
                                    Flutter app development is the ideal choice because it offers a wide range of advantages. It is an open-source framework that simplifies mobile app creation, giving flutter developers more control over their projects and enabling them to write code faster. You should choose Flutter app development because it allows for the rapid development of high-performance apps with expressive and flexible UI, using minimal effort, time, and code.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header> What Are the Six 6 Advantages of Flutter?
                                    <FaAngleDown size={25} />
                                </Accordion.Header>
                                <Accordion.Body>
                                    The Flutter framework is quickly becoming one of the most popular development tools around. It's easy to see why, as it offers developers many advantages over traditional app development methods. Here are six big benefits of Flutter: <br></br>
                                    1. <b>Faster Development Speed</b> - Flutter enables developers to create apps at lightning speed thanks to its hot reload feature. This allows developers to quickly make changes and see the results immediately, rather than waiting for a build cycle every time they make an adjustment.<br></br>
                                    2. <b>Easy to Learn</b> - Flutter is designed with simplicity in mind and requires very little code to get started. It's a great choice for new developers who want to get their feet wet in the world of app development.<br></br>
                                    3. <b>Increased Productivity</b> - With Flutter, developers can make changes quickly and easily as well as reuse code for future projects. This helps speed up development time and increases productivity overall.<br></br>
                                    4. <b>Cross-Platform Support</b> - One of the biggest advantages of using Flutter is its cross-platform support. It allows developers to create apps for multiple platforms without having to rewrite code for each one.<br></br>
                                    5. <b>Accessibility</b> - With Flutter, developers can easily make their apps accessible to people with disabilities by taking advantage of the accessible components and APIs within the framework itself. This helps ensure that the app is accessible to everyone.<br></br>
                                    6. <b>Open Source</b> - Flutter is open source, meaning developers can use the source code and freely distribute it as they please. This helps keep development costs low and allows developers to build apps faster by taking advantage of existing libraries and components.<br></br>
                                    In short, Flutter application development is the ultimate choice for app development because it offers an easy-to-use interface and powerful features that make developing apps faster and simpler.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>What Is Flutter App Development?
                                    <FaAngleDown size={25} />
                                </Accordion.Header>
                                <Accordion.Body>
                                Flutter mobile app development is a powerful software development kit (SDK) created by Google. It allows developers to quickly create beautiful, high-performance mobile applications for both iOS and Android platforms from the same codebase. Flutter apps are built using the Dart programming language and have access to a wide range of powerful features such as hardware acceleration, advanced UI elements, and animation capabilities. Flutter apps run smoothly on both platforms because of their highly optimized codebase.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Is Flutter Good for Mobile App Development?
                                    <FaAngleDown size={25} />
                                </Accordion.Header>
                                <Accordion.Body>
                                Flutter is a great choice for mobile app development. It is an open-source UI toolkit created by Google to help developers build beautiful and engaging apps quickly and efficiently. Flutter makes it easy for developers to create cross-platform applications with near-native performance. With features like hot reloading, extensive libraries of widgets, and its own rendering engine, Flutter can help you create beautiful mobile apps faster than ever before. These are some of the most prominent reasons why Flutter is better for app development.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>What Does Flutter Firebase Do?
                                    <FaAngleDown size={25} />
                                </Accordion.Header>
                                <Accordion.Body>
                                Flutter Firebase is a mobile development platform that combines the power of Flutter, Google's UI toolkit for building beautiful apps, with the robustness and scalability of Firebase. It offers a wide range of features like cloud storage, authentication, analytics, messaging, and much more. With Flutter Firebase, you can create powerful and dynamic mobile apps with ease. With the help of its extensive framework, developers can quickly and easily create beautiful user interfaces and powerful backends, enabling a smooth user experience. It also allows you to build complex data structures without having to write complicated code, making it perfect for quickly prototyping ideas and building highly-functional applications.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="6">
                                <Accordion.Header>Why BitsWits Is an Ideal Choice for Flutter Apps Development.
                                    <FaAngleDown size={25} />
                                </Accordion.Header>
                                <Accordion.Body>
                                Without a shadow of a doubt, <b>BitsWits</b> is an ideal choice for flutter application development. With our extensive experience and expertise, we share the ability to create powerful, intuitive, and dynamic applications that are tailor-made to meet specific needs and requirements. From a technological standpoint, <b>BitsWits</b> is at the forefront when it comes to developing with Flutter – utilizing native code to ensure the highest performance of native apps with a minimum of code complexity. As well, our flutter developers have access to the latest technology and platforms – ensuring that any project developed with us stays up-to-date and secure.
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>


                    </Row>
                </Container>


            </section>



        </>
    )
}

export default FaqsLp