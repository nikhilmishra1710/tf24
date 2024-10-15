import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ classModifier1, classModifier2, classModifier3, project, sceneId, charsString, bottomText }) => {
    // Split charsString into an array of individual characters
    const charsArray = charsString.split('');
    const idRef = classModifier3.split(" ")[1];
    return (
        <Link to={`/events#${idRef}`}>
            <div className={`cardofevent ${classModifier1} content__section`} data-animated="true">
                <div className={`card-outer ${classModifier2}`}></div>
                <div className="card-image-border"></div>
                <div
                    data-us-project={project}
                    className={`card-image ${classModifier3}`}
                    data-us-initialized="true"
                    data-scene-id={sceneId}
                >
                    {/* You can add any additional content here */}
                </div>
                <div className="card_top-detail"></div>
                <div className="text-style-support-small is-card">
                    <span className="is-random">
                        {charsArray.map((char, index) => (
                            <span key={index} className="char" data-original={char}>
                                {char}
                            </span>
                        ))}
                    </span>
                    <span
                        style={{ backgroundColor: 'rgba(189, 184, 168, 0)', willChange: 'background' }}
                        className="blink-led"
                    >
                        &nbsp;
                    </span>
                </div>
                <div className="card-row-texture">
                    <div className="bottom-card_text">//&nbsp;{bottomText}</div>
                </div>
            </div>
        </Link>
    );
};

export default Card;
