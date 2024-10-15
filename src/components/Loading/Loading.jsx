import { motion } from "framer-motion";

const Loading = () => {
    return (
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-xl">
            <div className="w-full h-52 flex justify-center items-center animate-pulse">


                <motion.div className="absolute" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}>
                    <img src="/tflogo.png" width={140} height={140} alt="logo2" />
                </motion.div>
            </div>
            <div className="text-white font-bord flex animate-[pulse_2s_cubic-bezier(0,0,0.2,1)_infinite]">
                Loading
            </div>
        </div>
    );
};

export default Loading;
