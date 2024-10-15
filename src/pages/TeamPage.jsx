import Team from "../components/Team/Team.jsx";
import teamData from "../components/Team/data/team.json";
import Navbar from "../components/Navbar/Navbar.jsx";
import '../css/TeamPage.css'

const TeamPage = () => {
    const teams = teamData.TantraFiesta_Team_2024;
  
    return (
      <>
      <Navbar />
      <div className="team-page">
        {Object.keys(teams).map((teamKey) => (
          <Team key={teamKey} title={teamKey.replace('-', ' ')} members={teams[teamKey]} />
        ))}
      </div>
      </>
    );
  };
  
export default TeamPage;