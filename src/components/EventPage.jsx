import React from 'react';
import '../css/EventPage.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

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
                                            <div className="text-style-eyebrow text-white text-align-center">
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
                                {/* Card 1 */}
                                <div
                                    className="card is-first is-retro1 content__section"
                                    data-animated="true"
                                >
                                    <div className="card-outer is-first is-retro"></div>
                                    <div className="card-image-border"></div>
                                    <div
                                        data-us-project="6Q7OFwXRiyTRhO1EWJYN"
                                        className="card-image is-first"
                                        data-us-initialized="true"
                                        data-scene-id="431a6e4e-f2a3-4e60-a0d6-a9db7d14d7a3"
                                    >
                                        <Canvas
                                            style={{ width: '291px', height: '402px' }}
                                            role="img"
                                        >

                                        </Canvas>
                                    </div>
                                    <div className="card_top-detail"></div>
                                    <div className="text-style-support-small is-card">
                                        <span className="is-random">
                                            {['[', 'T', 'I', 'M', 'E', 'L', 'E', 'S', 'S', ']'].map((char, index) => (
                                                <span key={index} className="char" data-original={char}>
                                                    {char}
                                                </span>
                                            ))}
                                        </span>{' '}
                                        <span
                                            style={{ backgroundColor: 'rgba(189, 184, 168, 0)', willChange: 'background' }}
                                            className="blink-led"
                                        >
                                            &nbsp;
                                        </span>
                                    </div>
                                    <div className="card-row-texture">
                                        <div className="bottom-card_text">//&nbsp;FR-RFT001-23</div>
                                    </div>
                                </div>

                                {/* Repeat similar structure for other cards */}
                                {/* Card 2 */}
                                <div
                                    className="card is-fourth content__section"
                                    data-animated="true"
                                >
                                    <div className="card-outer is-fourth"></div>
                                    <div className="card-image-border"></div>
                                    <div
                                        data-us-project="wDt1D7Tv8twPQcB9ea1b"
                                        className="card-image is-fourth"
                                        data-us-initialized="true"
                                        data-scene-id="ef5937ae-f72e-4881-91e5-7765f6ff4e4b"
                                    >
                                        <Canvas
                                            style={{ width: '325px', height: '424px' }}
                                            role="img"
                                        >

                                        </Canvas>
                                    </div>
                                    <div className="card_top-detail"></div>
                                    <div className="text-style-support-small is-card">
                                        <span className="is-random">
                                            {['[', 'F', 'U', 'S', 'S', 'I', 'O', 'N', ']'].map((char, index) => (
                                                <span key={index} className="char" data-original={char}>
                                                    {char}
                                                </span>
                                            ))}
                                        </span>{' '}
                                        <span
                                            style={{ backgroundColor: 'rgba(189, 184, 168, 0)', willChange: 'background' }}
                                            className="blink-led"
                                        >
                                            &nbsp;
                                        </span>
                                    </div>
                                    <div className="card-row-texture">
                                        <div className="bottom-card_text">//&nbsp;DRP-FSH442-22</div>
                                    </div>
                                </div>


                                {/* {card 3} */}
                                <div class="card is-second content__section" data-animated="true">

                                    <div class="card-outer is-second"></div>
                                    <div class="card-image-border"></div>

                                    <div
                                        data-us-project="o1JfeQkl3hXsVsWh8SC5"
                                        className="card-image is-second"
                                        data-us-initialized="true"
                                        data-scene-id="1c24438e-beff-4d55-ab2b-225cc8c60875"
                                    >
                                        <Canvas
                                            style={{ width: '327px', height: '426px' }}
                                            role="img"
                                        >

                                        </Canvas>
                                    </div>
                                    <div class="card_top-detail"></div>
                                    <div className="text-style-support-small is-card">
                                        <span className="is-random">
                                            {['[', 'T', 'I', 'M', 'E', 'L', 'E', 'S', 'S', ']'].map((char, index) => (
                                                <span key={index} className="char" data-original={char}>
                                                    {char}
                                                </span>
                                            ))}
                                        </span>{' '}
                                        <span
                                            style={{ backgroundColor: 'rgba(108, 105, 96, 0.443)', willChange: 'background' }}
                                            className="blink-led"
                                        >
                                            &nbsp;
                                        </span>
                                    </div>

                                    <div className="card-row-texture">
                                        <div className="bottom-card_text">//&nbsp;FSH-SYL299-24</div>
                                    </div>
                                </div>


                                {/* Card 4 */}
                                <div
                                    className="card is-fourth content__section"
                                    data-animated="true"
                                >
                                    <div className="card-outer is-fourth"></div>
                                    <div className="card-image-border"></div>
                                    <div
                                        data-us-project="wDt1D7Tv8twPQcB9ea1b"
                                        className="card-image is-fourth"
                                        data-us-initialized="true"
                                        data-scene-id="ef5937ae-f72e-4881-91e5-7765f6ff4e4b"
                                    >
                                        <Canvas
                                            style={{ width: '325px', height: '424px' }}
                                            role="img"
                                        >

                                        </Canvas>
                                    </div>
                                    <div className="card_top-detail"></div>
                                    <div className="text-style-support-small is-card">
                                        <span className="is-random">
                                            {['[', 'F', 'U', 'S', 'S', 'I', 'O', 'N', ']'].map((char, index) => (
                                                <span key={index} className="char" data-original={char}>
                                                    {char}
                                                </span>
                                            ))}
                                        </span>{' '}
                                        <span
                                            style={{ backgroundColor: 'rgba(189, 184, 168, 0)', willChange: 'background' }}
                                            className="blink-led"
                                        >
                                            &nbsp;
                                        </span>
                                    </div>
                                    <div className="card-row-texture">
                                        <div className="bottom-card_text">//&nbsp;DRP-FSH442-22</div>
                                    </div>
                                </div>

                                {/* card 5 */}
                                <div class="card is-second content__section" data-animated="true">

                                    <div class="card-outer is-second"></div>
                                    <div class="card-image-border"></div>

                                    <div
                                        data-us-project="o1JfeQkl3hXsVsWh8SC5"
                                        className="card-image is-second"
                                        data-us-initialized="true"
                                        data-scene-id="1c24438e-beff-4d55-ab2b-225cc8c60875"
                                    >
                                        <Canvas
                                            style={{ width: '327px', height: '426px' }}
                                            role="img"
                                        >

                                        </Canvas>
                                    </div>
                                    <div class="card_top-detail"></div>
                                    <div className="text-style-support-small is-card">
                                        <span className="is-random">
                                            {['[', 'T', 'I', 'M', 'E', 'L', 'E', 'S', 'S', ']'].map((char, index) => (
                                                <span key={index} className="char" data-original={char}>
                                                    {char}
                                                </span>
                                            ))}
                                        </span>{' '}
                                        <span
                                            style={{ backgroundColor: 'rgba(108, 105, 96, 0.443)', willChange: 'background' }}
                                            className="blink-led"
                                        >
                                            &nbsp;
                                        </span>
                                    </div>


                                    <div className="card-row-texture">
                                        <div className="bottom-card_text">//&nbsp;FSH-SYL299-24</div>
                                    </div>
                                </div>
                                <div
                                    className="card is-fourth content__section"
                                    data-animated="true"
                                >
                                    <div className="card-outer is-fourth"></div>
                                    <div className="card-image-border"></div>
                                    <div
                                        data-us-project="wDt1D7Tv8twPQcB9ea1b"
                                        className="card-image is-fourth"
                                        data-us-initialized="true"
                                        data-scene-id="ef5937ae-f72e-4881-91e5-7765f6ff4e4b"
                                    >
                                        <Canvas
                                            style={{ width: '325px', height: '424px' }}
                                            role="img"
                                        >

                                        </Canvas>
                                    </div>
                                    <div className="card_top-detail"></div>
                                    <div className="text-style-support-small is-card">
                                        <span className="is-random">
                                            {['[', 'F', 'U', 'S', 'S', 'I', 'O', 'N', ']'].map((char, index) => (
                                                <span key={index} className="char" data-original={char}>
                                                    {char}
                                                </span>
                                            ))}
                                        </span>{' '}
                                        <span
                                            style={{ backgroundColor: 'rgba(189, 184, 168, 0)', willChange: 'background' }}
                                            className="blink-led"
                                        >
                                            &nbsp;
                                        </span>
                                    </div>
                                    <div className="card-row-texture">
                                        <div className="bottom-card_text">//&nbsp;DRP-FSH442-22</div>
                                    </div>
                                </div>
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
