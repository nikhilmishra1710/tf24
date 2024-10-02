import React from 'react';
import '../../css/EventPage.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Card from './Card/Card';
import { cardsData } from './data/data';

const EventPage = () => {
    return (
        <section className="section_retro-inspired">
            <div className="retro-inspired_overlay is-top is-retro"></div>
            <div className="padding-global padding-section-medium">
                <div className="container-large">
                    <div className="retro-wrapper">

                        <div className="retro_sticky-wrapper">
                            <div className="sticky-wrapper-element">
                                <div className="sticky_text-wrapper">
                                    <div className="sticky_text-wrapper-top">
                                        <div
                                            className="retro-inspired_eyebrow content__section"
                                            data-animated="true"
                                        >
                                            <div className="text-style-eyebrow text-align-center">
                                                <span className="is-random">
                                                    <span className="char" data-original="/">
                                                        /
                                                    </span>
                                                    <span className="char" data-original="/">
                                                        /
                                                    </span>
                                                </span>
                                                &nbsp;
                                                <span className="is-random">
                                                    <span className="char" data-original="I">
                                                        I
                                                    </span>
                                                    <span className="char" data-original="N">
                                                        N
                                                    </span>
                                                    <span className="char" data-original="T">
                                                        T
                                                    </span>
                                                    <span className="char" data-original="O">
                                                        O
                                                    </span>
                                                </span>{' '}
                                                <span className="is-random">
                                                    <span className="char" data-original="T">
                                                        T
                                                    </span>
                                                    <span className="char" data-original="H">
                                                        H
                                                    </span>
                                                    <span className="char" data-original="E">
                                                        E
                                                    </span>
                                                </span>{' '}
                                                <span className="is-random">
                                                    <span className="char" data-original="P">
                                                        S
                                                    </span>
                                                    <span className="char" data-original="A">
                                                        P
                                                    </span>
                                                    <span className="char" data-original="S">
                                                        A
                                                    </span>
                                                    <span className="char" data-original="T">
                                                        C
                                                    </span>
                                                    <span className="char" data-original="T">
                                                        E
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            className="retro-inspired_title content__section"
                                            data-animated="true"
                                        >
                                            <h2 className="heading-style-h2 text-align-center is-random">
                                                {['T', 'F', ' ', 'E', 'V', 'E', 'N', 'T', 'S', ' ', '2', '0', '2', '4'].map((char, index) => (
                                                    <span key={index} className="char" data-original={char}>
                                                        {char}
                                                    </span>
                                                ))}
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="sticky_text-wrapper-bottom">
                                        <div className="sticky_description">
                                            <div
                                                className="sticky_description-top content__section"
                                                data-animated="true"
                                            >
                                                <div className="text-style-support is-mobile">
                                                    <span className="is-random text-shuffle">
                                                        {['D', 'I', 'G', 'I', 'T', 'A', 'L'].map((char, index) => (
                                                            <span key={index} className="char" data-original={char}>
                                                                {char}
                                                            </span>
                                                        ))}
                                                    </span>{' '}
                                                    <span className="is-random text-shuffle">
                                                        {['B', 'I', 'G', 'B', 'A', 'N', 'G', ':'].map((char, index) => (
                                                            <span key={index} className="char" data-original={char}>
                                                                {char}
                                                            </span>
                                                        ))}
                                                    </span>{' '}
                                                    <span className="is-random text-shuffle">
                                                        {['U', 'N', 'C', 'H', 'A', 'R', 'T', 'E', 'D'].map((char, index) => (
                                                            <span key={index} className="char" data-original={char}>
                                                                {char}
                                                            </span>
                                                        ))}
                                                    </span>{' '}
                                                    <span className="is-random text-shuffle">
                                                        {['R', 'E', 'A', 'L', 'M', 'S'].map((char, index) => (
                                                            <span key={index} className="char" data-original={char}>
                                                                {char}
                                                            </span>
                                                        ))}
                                                    </span>{' '}
                                                    <span className="is-random text-shuffle">
                                                        {['A', 'W', 'A', 'I', 'T'].map((char, index) => (
                                                            <span key={index} className="char" data-original={char}>
                                                                {char}
                                                            </span>
                                                        ))}
                                                    </span>{' '}
                                                    
                                                </div>
                                            </div>
                                            <div
                                                data-w-id="2053ed46-db0a-fa98-c341-89961bd6d525"
                                                className="sticky_description-bottom"
                                            >
                                                <div className="wrapper_description-inner is-1">
                                                    <div
                                                        data-w-id="2053ed46-db0a-fa98-c341-89961bd6d527"
                                                        className="text-size-regular is-mobile"
                                                    >
                                                        Tantra-Fiesta is the premier annual{' '}
                                                    </div>
                                                </div>
                                                <div className="wrapper_description-inner is-2">
                                                    <div
                                                        data-w-id="2053ed46-db0a-fa98-c341-89961bd6d52a"
                                                        className="text-size-regular"
                                                    >
                                                        technical event organized by IIIT Nagpur.{' '}
                                                    </div>
                                                </div>
                                                <div className="wrapper_description-inner is-3">
                                                    <div
                                                        data-w-id="2053ed46-db0a-fa98-c341-89961bd6d52d"
                                                        className="text-size-regular is-mobile"
                                                    >
                                                        Our event promotes research, problem-solving skills,
                                                    </div>
                                                </div>
                                                <div className="wrapper_description-inner is-4">
                                                    <div
                                                        data-w-id="2053ed46-db0a-fa98-c341-89961bd6d530"
                                                        className="text-size-regular is-mobile"
                                                    >
                                                        and fosters a sense of community
                                                    </div>
                                                </div>
                                                <div className="wrapper_description-inner is-5">
                                                    <div
                                                        data-w-id="2053ed46-db0a-fa98-c341-89961bd6d533"
                                                        className="text-size-regular is-mobile"
                                                    >
                                                        among tech enthusiasts.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Retro Cards Section */}
                        <div className="retro_cards">
                            <div className="retro_cards-wrapper">
                                {cardsData.map((cardData, index) => (
                                    <Card
                                        key={index}
                                        classModifier1={cardData.classModifier1}
                                        classModifier2={cardData.classModifier2}
                                        classModifier3={cardData.classModifier3}
                                        project={cardData.project}
                                        sceneId={cardData.sceneId}
                                        charsString={cardData.charsString}
                                        bottomText={cardData.bottomText}
                                    />
                                ))}
                            </div>
                        </div>


                    </div>


                </div>
            </div>
            <div className="retro-inspired_overlay is-bottom is-retro"></div>
        </section>
    );
};

export default EventPage;
