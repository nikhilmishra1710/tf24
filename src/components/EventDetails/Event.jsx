import { Slash, ChevronsLeft, ChevronsRight } from "lucide-react";
import "./event.css";
import "../../css/font.css";
import { useEffect, useRef, useState } from "react";
import RegisterButton from "./RegisterButton/registerButton";
import data from "./data.js";
// import Nav from "../Nav/Nav";

function Event() {


    useEffect(() => {
        document.title = "Events | TantraFiesta 24";
    }, [])

    return (
        <>
            <div className="events-bg fixed top-0 left-0 right-0 bottom-0 -z-50">
                <div class="animation">
                    <div id="events-stars"></div>
                    <div id="events-stars2"></div>
                    <div id="events-stars3"></div>
                </div>
                <div className="hazy"></div>
            </div>
            {
                data.map((club, index) => {
                    return <ClubEvents name={club.name} description={club.description} image={club.image} events={club.events} key={index} id={club.name.toLowerCase()} lead={club.lead} coLead={club.coLead} phone={club.phone} />;
                })
            }
        </>
    );
}

export default Event;


const ClubEvents = ({ name, description, image, events, id, lead, coLead, phone }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [width, setWidth] = useState(0);
    const [arrows, setArrows] = useState(true);

    const slider = useRef(null);
    const btnRef = useRef(null);
    const buttonRight = useRef(null)

    useEffect(() => {

        const hash = window.location.hash;
        let element=null;
        if (hash) {
            element = document.querySelector(hash);
        }

        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setWidth(document.querySelector(".card").offsetWidth + 96);
        if (slider?.current.scrollWidth < document.querySelector(`#${id}`)?.scrollWidth - btnRef.current.scrollWidth * 2 || events?.length === 1) {
            setArrows(false);
        }

        // setInterval(() => {
        //     buttonRight?.current.click()
        // console.log("Interval : ",width)
        // handleScroll(width)

        // }, 2000);

    }, [])

    const handleScroll = (scrollAmount) => {
        let newScrollPosition = scrollPosition + scrollAmount;
        if (newScrollPosition < 0) return
        if (newScrollPosition + scrollAmount / 2 > slider.current.scrollWidth) newScrollPosition = 0

        setScrollPosition(newScrollPosition);

        slider.current.scrollLeft = newScrollPosition;
    };

    return (
        <div className="w-[100vw] lg:h-[135vh] md:h-[100vh] h-[120vh] flex flex-col px-0 md:px-16 text-white" id={id}>
            {/* <div className="h-[15vh] w-full bg-green-200">Logo</div> */}
            <div className=" lg:h-[35vh] md:h-[30vh] h-[30vh] w-full flex justify-between mt-14">
                <div className="h-full w-full items-start justify-between lg:justify-evenly px-10 flex text-white">
                    <div className="h-fit w-[40%] lg:w-[70%] flex flex-col-reverse lg:flex-row items-start lg:items-center justify-start">
                        <div className="h-full flex items-center justify-between">
                            <img className="h-20 md:h-30 lg:h-32 aspect-square rounded-full mr-10 bg-no-repeat" src={image} />
                        </div>
                        <div>
                            <p className="flex flex-col frontman leading-10 tracking-wider text-lg md:text-3xl uppercase break-words md:mr-5 font-light">{name}</p>
                            {/* <p className="flex flex-col text-xs mb-3 md:text-sm mt-0.5 md:my-4 break-words text-[#717A80]">{description}</p> */}
                        </div>
                    </div>
                    <div className="lg:mr-16 font-light tracking-wider">
                        <p className="text-xl md:text-5xl flex items-center">
                            Contact
                        </p>
                        <div className="text-xs md:text-base">
                            <div className="mt-2">
                                <p>Lead</p>
                                <p className="-mt-1 md:-mt-2 text-[#717A80]">{lead}</p>
                            </div>
                            {coLead&&<div>
                                <p>Co-Lead</p>
                                <p className="-mt-1 md:-mt-2 text-[#717A80]">{coLead}</p>
                            </div>}
                            <div>
                                <p>Phone</p>
                                <p className="-mt-1 md:-mt-2 text-[#717A80]">{phone}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[80vh] w-full flex items-center -mt-16 lg:-mt-10">
                <button className={`h-[50%] w-10 lg:mx-5 ${arrows ? "arrow-visible" : "arrow-hidden"} flex justify-center items-center nextBtn hover:animate-pulse`} onClick={() => handleScroll(-width)} ref={btnRef}>
                    <ChevronsLeft />
                </button>
                <div className="h-[100vh] lg:h-[30rem] w-full flex items-center lg:items-start px-6 md:pr-10 gap-24 overflow-auto scroll-smooth no-scrollbar" ref={slider}>
                    {events.map((event, index) => {
                        return (
                            <EventCard image={event.image} name={event.name} description={event.description} prize={event.prize} date={event.date} link={event.link} key={index} />
                        );
                    })}
                </div>
                <button className={`h-[50%] w-10 lg:mx-5 ${arrows ? "arrow-visible" : "arrow-hidden"} flex justify-center items-center nextBtn hover:animate-pulse`} onClick={() => handleScroll(width)} ref={buttonRight}>
                    <ChevronsRight />
                </button>
            </div>
        </div>
    );
};

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
            className="relative h-[62vh] md:h-[65vh] md-lg:h-[100%] w-[100%] md:w-[10rem] md-lg:w-[44%] min-w-[270px] max-w-[44%] flex flex-none flex-col items-center glass-morph card md-lg:px-0 clip-path overflow-hidden border-none"
            // className="card clip-path glass-morph"
            style={{
                "--x": `${coords.x}px`,
                "--y": `${coords.y}px`,
                
            }}
            onMouseMove={handleMouseMove}
        >
            <div className="absolute inset-0 z-10 before:absolute before:content-[''] before:top-[var(--y)] before:left-[var(--x)] before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:bg-[radial-gradient(circle,var(--clr,rgba(255,255,255,0.2)),transparent,transparent)] before:w-[700px] before:h-[700px] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"></div>

            <img className="h-[40%] min-h-[85px] md-lg:h-[700px] max-h-[500px] w-full md-lg:w-[97%] z-0 event-img" src={image}/>

            <div className="h-[500px] w-full md-lg:max-h-60 flex flex-col md-lg:flex-row justify-between items-start px-2 md-lg:px-5 pb-2 md-lg:pb-10 pt-2 mt-2 tracking-wide z-9">
                <div className="w-full md-lg:w-1/2 mb-2 md-lg:mb-0">
                    <p className="text-md-lg md-lg:text-xl font-extrabold break-words uppercase tracking-wide mb-0 orbitron">{name}</p>
                    <p className="text-xs font-normal">{description}</p>
                </div>
                <div className="h-full flex flex-col justify-between items-start md-lg:items-center">
                    <div className="my-4 md-lg:my-0 text-left md-lg:text-right">
                        <p className="text-md-lg font-bold">{`Prize Pool : ₹ ${prize}`}</p>
                        <p className="text-sm font-bold">{`Date : ${date}`}</p>
                    </div>
                    {link&&<div className="mb-5">
                        <RegisterButton link={link} />
                    </div>}
                </div>
            </div>
        </div>
    );
};