import React from 'react';
import style from '@/styles/Languages.module.css';
import Image from 'next/image';
import Link from 'next/link';
// import { Container, Row, Col } from 'react-bootstrap';
// import dynamic from 'next/dynamic'

const InfiniteLoopSlider = ({children, duration, reverse = false}) => {
  return (
    <>
   <div className={style.loopslider}
      style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal'
      }}
    >
      <span className={style.inner}>
        {children}
        {children}
      </span>
    </div>
    </>
  );
};

export default InfiniteLoopSlider;

