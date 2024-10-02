import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Splitting from 'splitting';
import './Card.css';

const Card = ({ img, number, tags, name, boxType1, boxType2 }) => {
    const cardRef = useRef(null);
    const imgRef = useRef(null);
    const boxARef = useRef(null);
    const boxBRef = useRef(null);
    const enterTimeline = useRef(null);
    const leaveTimeline = useRef(null);

    useEffect(() => {
        const cardElement = cardRef.current;
        const imgElement = imgRef.current;
        
        const categoryB = boxBRef.current.querySelector('.card__box-category');
        if (categoryB) {
            categoryB.dataset.splitting = '';
            Splitting();
        }

        // Initialize Splitting.js to split text for animations
        // Splitting();

        const handleMouseEnter = () => {
            if (leaveTimeline.current) {
                leaveTimeline.current.kill();
            }

            enterTimeline.current = gsap
                .timeline({
                    defaults: { duration: 0.5, ease: 'expo' },
                })
                .addLabel('start', 0)
                .fromTo(
                    imgElement,
                    { filter: 'saturate(100%) brightness(100%)' },
                    { scale: 0.85, filter: 'saturate(200%) brightness(70%)' },
                    'start'
                )
                .fromTo(
                    cardElement.querySelectorAll('.card__box'),
                    { opacity: 0, xPercent: (index, target) => getXPercent(target), yPercent: (index, target) => getYPercent(target) },
                    { opacity: 1, xPercent: 0, yPercent: 0 },
                    'start'
                )
                .fromTo(
                    [boxARef.current.querySelectorAll('.char'), boxBRef.current.querySelectorAll('.char')],
                    { opacity: 0 },
                    { duration: 0.3, opacity: 1, stagger: 0.1 },
                    'start+=.2'
                );
        };

        const handleMouseLeave = () => {
            if (enterTimeline.current) {
                enterTimeline.current.kill();
            }

            leaveTimeline.current = gsap
                .timeline({
                    defaults: { duration: 0.8, ease: 'expo' },
                })
                .addLabel('start', 0)
                .to(imgElement, {
                    scale: 1,
                    filter: 'saturate(100%) brightness(100%)',
                }, 'start')
                .to(cardElement.querySelectorAll('.card__box'), {
                    opacity: 0,
                    xPercent: (index, target) => getXPercent(target),
                    yPercent: (index, target) => getYPercent(target),
                }, 'start');
        };

        // Attach event listeners
        cardElement.addEventListener('mouseenter', handleMouseEnter);
        cardElement.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup listeners
        return () => {
            cardElement.removeEventListener('mouseenter', handleMouseEnter);
            cardElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    // Functions to calculate animation direction for each box based on class name
    const getXPercent = (target) => {
        if (target.classList.contains('card__box--a')) return -100;
        if (target.classList.contains('card__box--b')) return 100;
        if (target.classList.contains('card__box--c')) return -100;
        if (target.classList.contains('card__box--d')) return 100;
        return 0;
    };

    const getYPercent = (target) => {
        if (target.classList.contains('card__box--a')) return -100;
        if (target.classList.contains('card__box--b')) return -100;
        if (target.classList.contains('card__box--c')) return 100;
        if (target.classList.contains('card__box--d')) return 100;
        return 0;
    };

    return (
        <div className="card" ref={cardRef}>
            <div className="card__img" ref={imgRef} style={{ backgroundImage: `url(${img})` }}></div>
            <div className={`card__box card__box--${boxType1}`} ref={boxARef}>
                <span className="card__box-number" data-splitting>{number}</span>
                <span className="card__box-tags">{tags}</span>
            </div>
            <div className={`card__box card__box--${boxType2}`} ref={boxBRef}>
                <span className="card__box-category">{name}</span>
            </div>
        </div>
    );
};

export default Card;
