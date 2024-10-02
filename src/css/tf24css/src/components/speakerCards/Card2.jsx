import React, { useEffect, useRef, useState } from 'react';
import Splitting from 'splitting';
import { gsap } from 'gsap';
import './Card.css'; // Assume you have some styles for the card

// Directional utility
const getMouseEnterDirection = (element, lastX, lastY) => {
    const { top, right, bottom, left } = element.getBoundingClientRect();
    if (lastY <= Math.floor(top)) return 'top';
    if (lastY >= Math.floor(bottom)) return 'bottom';
    if (lastX <= Math.floor(left)) return 'left';
    if (lastX >= Math.floor(right)) return 'right';
    return 'unknown';
};

const CardComponent = ({ img, number, tags, name, boxType1, boxType2 }) => {
    const [lastMouseX, setLastMouseX] = useState(null);
    const [lastMouseY, setLastMouseY] = useState(null);

    const cardRef = useRef(null);
    const imgRef = useRef(null);
    const boxRefs = useRef([]);

    useEffect(() => {
        // Splitting the text inside the number and category after rendering
        boxRefs.current.forEach((box) => {
            const number = box.querySelector('.card__box-number');
            const category = box.querySelector('.card__box-category');
            if (number) number.dataset.splitting = '';
            if (category) category.dataset.splitting = '';
        });
        Splitting();

        document.addEventListener('mousemove', (e) => {
            setLastMouseX(e.clientX);
            setLastMouseY(e.clientY);
        });
    }, []);

    const handleMouseEnter = (event) => {
        const card = cardRef.current;
        const direction = getMouseEnterDirection(card, lastMouseX, lastMouseY);
        card.dataset.direction = direction;

        // Kill any existing animation timelines
        if (card.enterTimeline) {
            card.enterTimeline.kill();
        }

        // GSAP animation timeline for entering
        card.enterTimeline = gsap.timeline({ defaults: { duration: 0.7, ease: 'expo' } })
            .addLabel('start', 0)
            .fromTo(imgRef.current, {
                filter: 'grayscale(0%)',
            }, {
                xPercent: direction === 'left' ? -10 : direction === 'right' ? 10 : 0,
                yPercent: direction === 'top' ? -10 : direction === 'bottom' ? 10 : 0,
                filter: 'grayscale(40%)'
            }, 'start')
            .fromTo(boxRefs.current, {
                opacity: 0,
                xPercent: direction === 'left' ? -20 : direction === 'right' ? 20 : 0,
                yPercent: direction === 'top' ? -20 : direction === 'bottom' ? 20 : 0,
                rotation: -10
            }, {
                opacity: 1,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                stagger: 0.08
            }, 'start')
            .fromTo(card.querySelectorAll('.char'), {
                opacity: 0,
            }, {
                opacity: 1,
                stagger: 0.1,
            }, 'start+=.1');
    };

    const handleMouseLeave = (event) => {
        const direction = cardRef.current.dataset.direction;

        if (cardRef.current.enterTimeline) {
            cardRef.current.enterTimeline.kill();
        }

        gsap.timeline({ defaults: { duration: 0.7, ease: 'expo' } })
            .to(imgRef.current, {
                xPercent: 0,
                yPercent: 0,
                filter: 'grayscale(0%)',
            });
        gsap.timeline({ defaults: { duration: 0.7, ease: 'expo' } })
            .to(boxRefs.current, {
                opacity: 0,
                xPercent: direction === 'left' ? -20 : direction === 'right' ? 20 : 0,
                yPercent: direction === 'top' ? -20 : direction === 'bottom' ? 20 : 0,
                rotation: -10,
            });
    };

    return (
        <div
            className="card"
            ref={cardRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="card__img card__img2" ref={imgRef} style={{ backgroundImage: `url(${img})` }}></div>
            <div className={`card__box card__box--${boxType1}`} ref={(el) => boxRefs.current[0] = el}>
                <span className="card__box-number">{number}</span>
                <span className="card__box-tags">{tags}</span>
            </div>
            <div className={`card__box card__box--${boxType2}`} ref={(el) => boxRefs.current[1] = el}>
                <span className="card__box-category">{name}</span>
            </div>
        </div>
    );
};

export default CardComponent;
