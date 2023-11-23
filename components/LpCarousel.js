import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Carousel.module.css'
//
import animi1 from '../public/images/case-beats/animi20.png';
import animi2 from '../public/images/case-crave/animi1.png';
import animi3 from '../public/images/case-dreamhome/animi1.png';
import animi4 from '../public/images/case-fitnow/animi3.png';
import animi5 from '../public/images/case-homepro/animi1.png';
import animi6 from '../public/images/case-monkey/animi3.png';
import animi7 from '../public/images/case-ready/animi1.png';
import animi8 from '../public/images/case-scribe/animi1.png';


const Carousel = () => {

    const carouselRef = useRef(null);
    const carouselPivotRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        const carouselPivot = carouselPivotRef.current;

        var carouselRadius = 160;
        var carouselRotation = 0;
        var carouselTilt = 0;
        var carouselVelocity = 5;
        var carouselIsDragging = false;
        var carouselDragPosition = 0;

        function start() {
            var items = carouselPivot.children;
            var arc = 360 / items.length;
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                item.style.transform =
                    'translate3d(-50%, -50%, 0) rotateY(' +
                    i * arc +
                    'deg) translateZ(' +
                    carouselRadius * 2 +
                    'px)';
            }
        }

        function dragStart(position) {
            carouselIsDragging = true;
            carouselVelocity = 0;
            carouselDragPosition = position.x;
        }

        function dragMove(position) {
            carouselVelocity =
                (Math.atan2(position.x - carouselDragPosition, carouselRadius * 2) *
                    180) /
                Math.PI;
            carouselDragPosition = position.x;
        }

        function dragEnd() {
            carouselIsDragging = false;
        }

        function update() {
            carouselRotation += carouselVelocity;

            if (!carouselIsDragging) {
                carouselVelocity *= 0.95;
            }

            carouselTilt += (carouselVelocity * 0.1 - carouselTilt) / 10;

            carouselPivot.style.transform =
                'translateZ(-' +
                carouselRadius * 2 +
                'px) rotateX(' +
                -carouselTilt +
                'deg) rotateY(' +
                carouselRotation +
                'deg) ';
        }

        // Touch/mouse event handling
        const location = (evt) => {
            var t1 = evt.touches,
                t2 = evt.changedTouches;
            var s = (t1 && t1[0]) || (t2 && t2[0]) || evt;
            return { x: s.pageX, y: s.pageY };
        };

        const prevent = (evt) => {
            evt.preventDefault();
        };

        const handler = (evt) => {
            switch (evt.type) {
                case 'mousedown':
                    add(document, ['mousemove', 'mouseup']);
                case 'mousedown':
                case 'touchstart':
                    prevent(evt);
                    dragStart(location(evt));
                    break;
                case 'mousemove':
                case 'touchmove':
                    dragMove(location(evt));
                    break;
                case 'mouseup':
                    remove(document, ['mousemove', 'mouseup']);
                case 'mouseup':
                case 'touchend':
                case 'touchcancel':
                    dragEnd(location(evt));
                    break;
            }
        };

        const add = (target, events) => {
            for (var i = 0; i < events.length; i++) {
                target.addEventListener(events[i], handler);
            }
        };

        const remove = (target, events) => {
            for (var i = 0; i < events.length; i++) {
                target.removeEventListener(events[i], handler);
            }
        };

        add(carousel, ['mousedown', 'touchstart', 'touchmove', 'touchend', 'touchcancel']);
        carousel.ondragstart = () => false;

        // Animation loop
        const timestamp = window.performance
            ? () => window.performance.now() / 1000
            : () => new Date().getTime() / 1000;

        const requestFrame =
            window.requestAnimationFrame ||
            function (callback) {
                setTimeout(callback, 16);
            };

        start();
        var time = timestamp();
        const enterFrame = () => {
            var now = timestamp();
            var delta = now - time;
            time = now;
            update(delta);
            requestFrame(enterFrame);
        };
        requestFrame(enterFrame);

        return () => {
            // Cleanup code if needed
        };
    }, []);

    return (
        <>

            <div className={styles.carousel} ref={carouselRef}>
                <div className={styles.carouselPivot} ref={carouselPivotRef}>
                    <div className={styles.carouselItem}>
                        <Image src={animi1} alt="carousel-item" />
                    </div>
                    <div className={styles.carouselItem}>
                        <Image src={animi2} alt="carousel-item" />
                    </div>
                    <div className={styles.carouselItem}>
                        <Image src={animi3} alt="carousel-item" />
                    </div>
                    <div className={styles.carouselItem}>
                        <Image src={animi4} alt="carousel-item" />
                    </div>
                    <div className={styles.carouselItem}>
                        <Image src={animi5} alt="carousel-item" />
                    </div>
                    <div className={styles.carouselItem}>
                        <Image src={animi6} alt="carousel-item" />
                    </div>
                    <div className={styles.carouselItem}>
                        <Image src={animi7} alt="carousel-item" />
                    </div>
                    <div className={styles.carouselItem}>
                        <Image src={animi8} alt="carousel-item" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carousel;
