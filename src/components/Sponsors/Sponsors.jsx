import React, { useState } from "react";
import "./sponsor.css";
import sponsorsData from "./sponsorsData.json";

function Sponsors() {
    const { left, right } = sponsorsData;
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setCoords({ x, y });
    };

    return (
        <div className="sponsors-container bg-black" id="sponsors">
            <div className="main">
                <div className="title">OUR SPONSORS</div>

                <div className="slider">
                    <div className="left">
                        {left.map((el, index) => (
                            <div
                                className="images"
                                key={index}
                                style={{
                                    '--x': `${coords.x}px`,
                                    '--y': `${coords.y}px`,
                                }}
                                onMouseMove={handleMouseMove}
                            >
                                <img src={el} alt={`sponsor-left-${index}`} />
                            </div>
                        ))}
                    </div>
                    <div className="left">
                        {left.map((el, index) => (
                            <div
                                className="images"
                                key={index}
                                style={{
                                    '--x': `${coords.x}px`,
                                    '--y': `${coords.y}px`,
                                }}
                                onMouseMove={handleMouseMove}
                            >
                                <img src={el} alt={`sponsor-left-${index}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="slider">
                    <div className="right">
                        {right.map((el, index) => (
                            <div
                                className="images"
                                key={index}
                                style={{
                                    '--x': `${coords.x}px`,
                                    '--y': `${coords.y}px`,
                                }}
                                onMouseMove={handleMouseMove}
                            >
                                <img src={el} alt={`sponsor-right-${index}`} />
                            </div>
                        ))}
                    </div>
                    <div className="right">
                        {right.map((el, index) => (
                            <div
                                className="images"
                                key={index}
                                style={{
                                    '--x': `${coords.x}px`,
                                    '--y': `${coords.y}px`,
                                }}
                                onMouseMove={handleMouseMove}
                            >
                                <img src={el} alt={`sponsor-right-${index}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sponsors;