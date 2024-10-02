import { motion } from "framer-motion";
import { useInView } from "react-hook-inview";
import { RandomReveal } from "react-random-reveal";
import { useState } from "react";

// import './bstyleFont.css'
import "../css/font.css";

export default function About() {
    const [ref, inView] = useInView({ threshold: 0.5 });
    const [hover, setHover] = useState(true);

    const characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz,.;'[]<>?:{}0123456789*-+`~!@#$%^&()_=";
    const characterSetArray = characterSet.split("");

    return (
        <div ref={ref} className="w-[100vw] h-[100vh] flex flex-col justify-between bg-red-500 text-[#f3edd8] px-8 md:px-10 py-10">
            <div className="w-full md:w-[70vw] h-[90vh] -z-50 absolute right-1"></div>
            <div>
                <div className="uppercase text-lg offbit-bold flex gap-2">
                    <span>//</span>
                    <span>THE</span>
                    <span>STORY</span>
                </div>
                <div className="-ml-3">
                    <div className="uppercase bstyle-bold text-5xl md:text-7xl lg:text-9xl tracking-tight flex gap-1.5 -mt-2 md:-mt-3 lg:-mt-4">
                        <span>
                            <RandomReveal isPlaying={inView} duration={1} revealDuration={1} characters="ABOUT" characterSet={characterSetArray} />
                        </span>
                        <span>
                            <RandomReveal isPlaying={inView} duration={1} revealDuration={1} characters="US" characterSet={characterSetArray} />
                        </span>
                        
                    </div>
                    <div className="h-72 md:w-[40rem] px-2 text-sm md:text-lg pt-10 break-words">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestias atque voluptatem assumenda hic? Consectetur vero, deserunt, laborum tenetur,
                        quidem sed provident iure impedit quasi alias id veritatis cum officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestias atque
                        voluptatem assumenda hic? Consectetur vero, deserunt, laborum tenetur, quidem sed provident iure impedit quasi alias id veritatis cum officiis.
                    </div>
                </div>
            </div>
            <div className="w-full h-48 flex items-end justify-between">
                <div className="h-full flex flex-col justify-end">
                    <div className="h-[0.7vw] flex justify-start gap-2 mb-5">
                        <motion.div
                            initial={{ background: "#f3edd800" }}
                            animate={{ background: "#f3edd8" }}
                            transition={{ duration: 0.1, delay: 0.1, repeat: Infinity, repeatDelay: 0.1, repeatType: "mirror" }}
                            className="h-[7px] w-[20px] md:h-[10px] md:w-[30px] border border-[#f3edd8]"
                        ></motion.div>
                        <motion.div
                            initial={{ background: "#f3edd8" }}
                            animate={{ background: "#f3edd800" }}
                            transition={{ duration: 0.1, delay: 0.1, repeat: Infinity, repeatDelay: 0.1, repeatType: "mirror" }}
                            className="h-[7px] w-[20px] md:h-[10px] md:w-[30px] border border-[#f3edd8] bg-[#f3edd8]"
                        ></motion.div>
                    </div>
                    <div className="max-h-48 w-52 md:w-96 text-sm md:text-base lg:text-lg break-words offbit-bold flex flex-col overflow-hidden uppercase">
                        <div
                            className="break-words"
                            onMouseOver={() => {
                                setHover(!hover);
                            }}
                        >
                            <RandomReveal
                                key={hover}
                                isPlaying={inView}
                                duration={1}
                                revealDuration={1}
                                characters="STEP INTO A WORLD WHERE THE CHARM OF YESTERYEARS COMES ALIVE"
                                characterSet={characterSetArray}
                            />
                        </div>
                    </div>
                    <div className="max-h-48 w-52 md:w-96 text-xs md:text-sm break-words font-semibold flex flex-col leading-tight">
                        Reslish in the nostalgic beauty and timeless creativity that continue to inspire today's fashion visions.
                    </div>
                </div>
                <div className="bstyle-bold">
                    <div>
                        <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-end">
                            <div className="text-xl md:text-3xl flex gap-1 -mb-2">
                                <span>FEEL</span>
                                <span>INTO</span>
                            </div>
                            <div className="bg-red-500 h-28 w-16 ml-3 rotate-6"></div>
                        </div>
                        <div className="text-3xl md:text-5xl lg:text-6xl flex gap-1">
                            <span>THE</span>
                            <span>PAST</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
