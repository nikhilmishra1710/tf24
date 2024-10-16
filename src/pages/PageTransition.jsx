import { motion } from "framer-motion";

// Define animation variants
const pageVariants = {
    initial: {
        opacity: 0,
        x: "-100vw",
    },
    in: {
        opacity: 1,
        x: 0,
    },
    out: {
        opacity: 0,
        x: "100vw",
    },
};

// Define transition timing
const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
};

export default function PageTransition({ children }) {
    return (
        <motion.span
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            {children}
        </motion.span>
    );
}
