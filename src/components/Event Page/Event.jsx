import { Slash } from 'lucide-react';
import './event.css'
import '../../css/font.css'
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger"
import RegisterButton from './RegisterButton/registerButton';
import Navbar from './Nav/Nav';

function Event() {

    const data = [
        {
            name: "things agency",
            description: "European design & innovation agency pioneering in IoT experience for humans.",
            image: "/3.jpg",
            events: [
                {
                    image: "/test.png",
                    name: "Cosmic Craftathon Game Jam",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eum corporis voluptatum saepe maiores nulla temporibus cumque nostrum a accusamus dolores omnis, aspernatur, aliquam sunt assumenda adipisci reiciendis facilis quo.",
                    prize: "30000",
                    date: "24 October,2024",
                    link: "https://www.google.com"
                },
                {
                    image: "/test.png",
                    name: "Cosmic Craftathon Game Jam",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eum corporis voluptatum saepe maiores nulla temporibus cumque nostrum a accusamus dolores omnis, aspernatur, aliquam sunt assumenda adipisci reiciendis facilis quo.",
                    prize: "30000",
                    date: "24 October,2024",
                    link: "https://www.google.com"
                },
                {
                    image: "/test.png",
                    name: "Cosmic Craftathon Game Jam",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eum corporis voluptatum saepe maiores nulla temporibus cumque nostrum a accusamus dolores omnis, aspernatur, aliquam sunt assumenda adipisci reiciendis facilis quo.",
                    prize: "30000",
                    date: "24 October,2024",
                    link: "https://www.google.com"
                },
            ]
        },
        {
            name: "things agency2",
            description: "European design & innovation agency pioneering in IoT experience for humans.",
            image: "/3.jpg",
            events: [
                {
                    image: "/test.png",
                    name: "Cosmic Craftathon Game Jam",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eum corporis voluptatum saepe maiores nulla temporibus cumque nostrum a accusamus dolores omnis, aspernatur, aliquam sunt assumenda adipisci reiciendis facilis quo.",
                    prize: "30000",
                    date: "24 October,2024",
                    link: "https://www.google.com"
                },
                {
                    image: "/test.png",
                    name: "Cosmic Craftathon Game Jam",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eum corporis voluptatum saepe maiores nulla temporibus cumque nostrum a accusamus dolores omnis, aspernatur, aliquam sunt assumenda adipisci reiciendis facilis quo.",
                    prize: "30000",
                    date: "24 October,2024",
                    link: "https://www.google.com"
                },
                {
                    image: "/test.png",
                    name: "Cosmic Craftathon Game Jam",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eum corporis voluptatum saepe maiores nulla temporibus cumque nostrum a accusamus dolores omnis, aspernatur, aliquam sunt assumenda adipisci reiciendis facilis quo.",
                    prize: "30000",
                    date: "24 October,2024",
                    link: "https://www.google.com"
                },
            ]
        },
    ]

    return (
        <>
            {/* <Navbar /> */}
            {
                data.map((club, index) => {
                    return (
                        <ClubEvents
                            name={club.name}
                            description={club.description}
                            image={club.image}
                            events={club.events}
                            key={index}
                            id={club.name}
                        />
                    )
                })
            }
        </>
    )
}

export default Event

gsap.registerPlugin(ScrollTrigger);

const ClubEvents = ({ name, description, image, events, id }) => {

    const component = useRef()
    const sliderRef = useRef()
    const slider = useRef()

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".card")
            gsap.to(cards, {
                x: () => -(slider.current.scrollWidth - window.innerWidth + 100),
                ease: "none",
                scrollTrigger: {
                    trigger: component.current,
                    start: () => "bottom bottom",
                    end: () => `+=${slider.current.scrollWidth}`,
                    scrub: true,
                    pin: true,
                }
            })
        }, component)
        return () => ctx.revert()
    })

    return (
        <div className="w-[100vw] lg:h-[145vh] md:h-[110vh] h-[130vh] flex flex-col mb-20 px-0 md:px-16 text-white" ref={component} id={id}>
            {/* <div className="h-[15vh] w-full bg-green-200">Logo</div> */}
            <div className=" lg:h-[45vh] md:h-[30vh] h-[30vh] w-full flex justify-between mt-14">
                <div className="h-full w-full items-start justify-between px-10 flex text-white">
                    <div className='h-fit w-[40%] flex flex-col-reverse lg:flex-row items-center justify-center md:justify-between'>
                        <div className="h-fit flex items-center justify-between">
                            <div className="h-20 md:h-36 lg:h-64 aspect-square rounded-full img mr-10" style={{ backgroundImage: `url(${image})` }} />
                        </div>
                        <div>
                            <p className="flex flex-col text-3xl md:text-7xl break-words">
                                {name}
                            </p>
                            <p className="flex flex-col text-xs md:text-sm mt-4 md:my-8 break-words text-[#717A80]">
                                {description}
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="text-3xl md:text-5xl flex items-center">
                            <span>03</span>
                            <span><Slash className="mt-2" size={35} color="#717A80" /></span>
                            <span>08</span>
                        </p>
                        <div className='text-xs md:text-base'>
                            <div className="mt-10">
                                <p>Role</p>
                                <p className="-mt-1 md:-mt-2 text-[#717A80]">Full Stack Dev / Motion</p>
                            </div>
                            <div>
                                <p>Agency</p>
                                <p className="-mt-1 md:-mt-2 text-[#717A80]">Things</p>
                            </div>
                            <div>
                                <p>Year</p>
                                <p className="-mt-1 md:-mt-2 text-[#717A80]">2023</p>
                            </div>
                            <div>
                                <p>Awards</p>
                                <p className="-mt-1 md:-mt-2 text-[#717A80]">CSSDA of the Day</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[80vh] w-full" ref={sliderRef}>
                <div className='h-[100vh] lg:h-[30rem] w-full flex items-start px-6 md:pr-10 gap-20 overflow-hidden no-scrollbar' ref={slider}>
                    {
                        events.map((event, index) => {
                            return (
                                <EventCard
                                    image={event.image}
                                    name={event.name}
                                    description={event.description}
                                    prize={event.prize}
                                    date={event.data}
                                    link={event.link}
                                    key={index}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

import { useState } from 'react';

const EventCard = ({ image, name, description, prize, date, link }) => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setCoords({ x, y });
    };

    return (
        <div
            className="relative h-[90vh] md:h-[90vh] lg:h-[100%] w-[100%] md:w-[30rem] lg:w-[46%] flex flex-none flex-col glass-morph card lg:px-0 clip-path bg-gradient-to-br from-[#aa14f0] via-[#aa14f02e] to-[#b936f500] overflow-hidden"
            style={{
                '--x': `${coords.x}px`,
                '--y': `${coords.y}px`,
            }}
            onMouseMove={handleMouseMove}
        >
            <div className="absolute inset-0 z-10 before:absolute before:content-[''] before:top-[var(--y)] before:left-[var(--x)] before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:bg-[radial-gradient(circle,var(--clr,rgba(255,255,255,0.2)),transparent,transparent)] before:w-[700px] before:h-[700px] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"></div>
            <div
                className="h-[60%] lg:h-full w-full lg:w-full bg-contain bg-center bg-no-repeat z-0"
                style={{ backgroundImage: `url(${image})` }}
            ></div>

            <div className="h-full w-full flex flex-col lg:flex-row justify-between items-start px-5 py-10 tracking-wide z-20">
                <div className="w-full lg:w-1/2">
                    <p className="text-3xl lg:text-3xl font-extrabold break-words tracking-wide mb-5 orbitron">
                        {name}
                    </p>
                    <p className="text-sm lg:text-sm font-normal">
                        {description}
                    </p>
                </div>
                <div className="h-full flex flex-col justify-between items-center">
                    <div className="my-10 lg:my-0 text-left lg:text-right">
                        <p className="text-2xl font-bold">{`Prize Pool : ₹ ${prize}`}</p>
                        <p className="font-bold">{`Date : ${date}`}</p>
                    </div>
                    <div>
                        <RegisterButton link={link} />
                    </div>
                </div>
            </div>
        </div>
    );
};