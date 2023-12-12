import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/NewIndex2Banner.module.css";
//
import next from "../public/homeslideimg/next.png";
import prev from "../public/homeslideimg/prev.png";

const itemData = [
  {
    linkHref: "tel:+18335006007",
    linkText: "LET'S CONNECT",
  },
];

const NewIndex2Banner = () => {
  const sliderRef = React.useRef(null);

  const activate = (e) => {
    const items = sliderRef.current.querySelectorAll(".item");

    if (e.target.matches(".next")) {
      sliderRef.current.append(items[0].cloneNode(true));
      sliderRef.current.append(items[0]);
      items[0].remove();
    }

    if (e.target.matches(".prev")) {
      sliderRef.current.prepend(items[items.length - 1].cloneNode(true));
      sliderRef.current.prepend(items[items.length - 1]);
      items[items.length - 1].remove();
    }
  };

  return (
    <>
      <section className={styles.newHomeBg}>
        <ul className={`${styles.slider}`} ref={sliderRef}>
          <li className={`${styles.item} item ${styles.item1}`}>
            {itemData.map((item, index) => (
              <div key={index} className={styles.content}>
                <p className={`${styles.just} f-20 mb-lg-0`}>
                  Top Mobile App Development Company
                </p>
                <h1 className={`${styles.develop} font50 font-bold mt-2`}>
                  Turning Challenges Into Opportunities With Expert App
                  Development
                </h1>
                <p className="text-white font16 mt-3">
                  We blend art and technology to create mobile apps that are as
                  user-friendly as they are innovative. Elevate your presence in
                  the mobile world with us.
                </p>
                <div className={styles.pont}>
                  <Link className={styles.about} href={item.linkHref}>
                    {item.linkText}
                  </Link>
                </div>
              </div>
            ))}
          </li>
          <li className={`${styles.item} item ${styles.item2}`}>
            {itemData.map((item, index) => (
              <div key={index} className={styles.content}>
                <p className={`${styles.just} font-bold f-20 mb-0`}>
                  Blockchain App Development Experts
                </p>
                <h1 className={`${styles.develop} font50 font-bold mt-sm-2 mt-0 `}>
                  Secure, Smart Blockchain Solutions. Building The Future, Block
                  By Block.
                </h1>
                <p className="text-white font16 mt-sm-3 mt-1 mb-0 mb-sm-2">
                  Lead the blockchain revolution with our expertly developed
                  apps, offering unmatched security and innovation. Choose us
                  for solutions that revolutionize transactions and trust.
                </p>
                <div className={styles.pont}>
                  <Link className={styles.about} href={item.linkHref}>
                    {item.linkText}
                  </Link>
                </div>
              </div>
            ))}
          </li>
          <li className={`${styles.item} item ${styles.item3}`}>
            {itemData.map((item, index) => (
              <div key={index} className={styles.content}>
                <p className={`${styles.just} font-bold f-20 mb-lg-0`}>
                  Top-Rated Game Development Company
                </p>
                <h1 className={`${styles.develop} font50 font-bold mt-2`}>
                  Where Exceptional Apps Are Just The Beginning.
                </h1>
                <p className="text-white font16 mt-3">
                  As a top-rated mobile app development company, Bitswits excels
                  in transforming ideas into engaging, high-performance apps.
                  Trust us to deliver solutions that combine innovation with a
                  seamless user experience, propelling your business to new
                  heights
                </p>
                <div className={styles.pont}>
                  <Link className={styles.about} href={item.linkHref}>
                    {item.linkText}
                  </Link>
                </div>
              </div>
            ))}
          </li>
          <li className={`${styles.item} item ${styles.item4}`}>
            {itemData.map((item, index) => (
              <div key={index} className={styles.content}>
                <p className={`${styles.just} font-bold f-20 mb-lg-0`}>
                  Top Artificial Intelligence Development Company
                </p>
                <h1 className={`${styles.develop} font50 font-bold mt-2`}>
                  Where Artificial Intelligence Meets Real-World Innovation
                </h1>
                <p className="text-white font16 mt-3">
                  We turn artificial intelligence into real business results,
                  building AI apps that are as clever as they are effective.
                </p>
                <div className={styles.pont}>
                  <Link className={styles.about} href={item.linkHref}>
                    {item.linkText}
                  </Link>
                </div>
              </div>
            ))}
          </li>
          <li className={`${styles.item} item ${styles.item5}`}>
            {itemData.map((item, index) => (
              <div key={index} className={styles.content}>
                <p className={`${styles.just} font-medium f-20 mb-lg-0`}>
                  Custom Software Development Solutions
                </p>
                <h1 className={`${styles.develop} font50 font-bold mt-2`}>
                  Tailored Software Solutions For Unique Business Needs
                </h1>
                <p className="text-white font16 mt-3">
                  Your business is unique, and your software should be too. We
                  create custom software solutions that fit perfectly with your
                  business goals.
                </p>
                <div className={styles.pont}>
                  <Link className={styles.about} href={item.linkHref}>
                    {item.linkText}
                  </Link>
                </div>
              </div>
            ))}
          </li>
        </ul>
        <div className={styles.nav}>
          <div className={`${styles.btn} prev`} onClick={activate}>
            <Image src={prev} alt="BitsWits" className="img-fluid prev" />
          </div>
          <div className={`${styles.btn} next`} onClick={activate}>
            <Image src={next} alt="BitsWits" className="img-fluid next" />
          </div>
        </div>
      </section>
    </>
  );
};

export default NewIndex2Banner;
