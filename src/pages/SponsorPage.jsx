import SponsorsPage from "@components/SponsorsPage/SponsorsPage.jsx";
import sponsors from "../components/SponsorsPage/data/sponsors.json";
import Navbar from "../components/Navbar/Navbar.jsx";
import '../css/SponsorPage.css'

const SponsorPage = () => {
  const sponsor = sponsors.TantraFiesta_Sponsors_2024;

  return (
    <>
      <Navbar />
      <div className="sponsor-page">
        {Object.keys(sponsor).map((sponsorKey) => (
          <SponsorsPage key={sponsorKey} title={sponsorKey.replace('-', ' ')} sponsors={sponsor[sponsorKey]} />
        ))}
      </div>
    </>
  );
};

export default SponsorPage;