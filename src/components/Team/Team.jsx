import { useState } from "react";
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import "./Team.css";

const Team = ({ title, members }) => {
    const [mousePos, setMousePos] = useState({ x: '50%', y: '50%' });

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePos({ x: `${x}%`, y: `${y}%` });
    };

    const handleClick = (ytLink) => {
        if (ytLink) {
            window.open(ytLink, '_blank', 'noopener,noreferrer');
        } else {
            console.log('No YouTube link provided for this member');
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    };

    return (
        <div className="team-section">
            <h3>{title}</h3>
            <div className="line"></div>
            <div className="team-list">
                {members.map((member) => (
                    <motion.div
                        className="team-member"
                        key={member.Name}
                        onMouseMove={handleMouseMove}
                        onClick={() => handleClick(member.ytLink)} // Check if the member has a YouTube link
                        style={{
                            '--mouseX': mousePos.x, '--mouseY': mousePos.y
                        }}
                        initial="hidden"
                        whileInView="visible"
                        variants={cardVariants}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h4>{member.Name}</h4>
                        <p>{member.designation}</p>
                        {/* {member.Phone && (
                            <p><FontAwesomeIcon icon={faPhone} /> {member.Phone}</p>
                        )} */}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Team;
