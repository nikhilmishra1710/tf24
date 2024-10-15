import { useState } from "react";
import "./Team.css";

const Team = ({title,members}) => {

    const [mousePos, setMousePos] = useState({ x: '50%', y: '50%' });

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x: `${x}%`, y: `${y}%` });
  };

    return (
        <div className="team-section">
            <h3>{title}</h3>
            <div className="line"></div>
            <div className="team-list">
                {members.map((member) => (
                    <div className="team-member" key={member.Name} onMouseMove={handleMouseMove} style={{ '--mouseX': mousePos.x, '--mouseY': mousePos.y }}>
                        <img src={"/eventcards/crispr.png"} alt={member.Name} className="member-image" />
                        <h4>{member.Name}</h4>
                        <p>{member.designation}</p>
                        <p>Phone: {member.Phone}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Team;