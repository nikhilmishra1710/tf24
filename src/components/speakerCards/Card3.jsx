import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Splitting from 'splitting';
import './Card.css'; // Assuming your styles are here

const Card3 = ({ img, number, tags, name, boxType1, boxType2 }) => {
    const cardRef = useRef(null);
    const imgRef = useRef(null);
    const boxARef = useRef(null);
    const boxBRef = useRef(null);
    const enterTimeline = useRef(null);
    const leaveTimeline = useRef(null);

    // Initialize Splitting.js and set up character splitting for animations
    useEffect(() => {
        const numberA = boxARef.current.querySelector('.card__box-number');
        const categoryB = boxBRef.current.querySelector('.card__box-category');

        if (numberA) {
            numberA.dataset.splitting = '';
            Splitting();
        }

        if (categoryB) {
            categoryB.dataset.splitting = '';
            Splitting();
        }
    }, []);

    // Handle mouse enter for animation
    const handleMouseEnter = () => {
        if (leaveTimeline.current) {
            leaveTimeline.current.kill();
        }

        enterTimeline.current = gsap.timeline({
            defaults: { duration: 0.7, ease: 'expo' },
        })
            .addLabel('start', 0)
            .fromTo(imgRef.current, { filter: 'grayscale(0%)' }, { filter: 'grayscale(90%)' }, 'start')
            .to(imgRef.current, { ease: 'power4', duration: 0.6, scaleY: 1 }, 'start')
            .to(imgRef.current, { duration: 1.5, scale: 1 }, 'start')
            .fromTo(
                [boxARef.current, boxBRef.current],
                { opacity: 0, scale: 0, rotation: -10 },
                { opacity: 1, scale: 1, rotation: 0, stagger: 0.08 },
                'start'
            )
            .fromTo(
                [boxARef.current.querySelectorAll('.char'), boxBRef.current.querySelectorAll('.char')],
                { opacity: 0 },
                { duration: 0.3, opacity: 1, stagger: 0.1 },
                'start+=.2'
            );
    };

    // Handle mouse leave for animation
    const handleMouseLeave = () => {
        if (enterTimeline.current) {
            enterTimeline.current.kill();
        }

        leaveTimeline.current = gsap.timeline({
            defaults: { duration: 0.8, ease: 'expo' },
        })
            .addLabel('start', 0)
            .to(imgRef.current, { scale: 1.2, filter: 'grayscale(0%)' }, 'start')
            .to(
                [boxARef.current, boxBRef.current],
                { scale: 0, opacity: 0, rotation: -10 },
                'start'
            );
    };

    return (
        <div
            className="card"
            ref={cardRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="card__img card__img3" ref={imgRef} style={{ backgroundImage: `url(${img})` }}></div>

            {/* Card Box A */}
            <div className={`card__box card__box--${boxType1}`} ref={boxARef}>
                <span className="card__box-number">{number}</span>
                {/* <span className="card__box-tags">{tags}</span> */}
            </div>

            {/* Card Box B */}
            <div className={`card__box card__box--${boxType2}`} ref={boxBRef}>
                <span className="card__box-category">{name}</span>
            </div>
        </div>
    );
};

export default Card3;
