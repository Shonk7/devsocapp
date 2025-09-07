import React from "react";
import { Typography, Box, Divider } from "@mui/material";
import { Work as WorkIcon } from "@mui/icons-material";
import { Card3D } from "./Card3D";
import ExperienceItem from "./ExperienceItem";
import transport from '../assets/transport.jpg';
import spons from '../assets/spons.png';
import aunsw from '../assets/aunsw.png';
const ExperienceSection: React.FC = () => {
  return (
    <Card3D className="h-full">
      <Box display="flex" alignItems="center" mb={3}>
        <WorkIcon color="primary" sx={{ mr: 2, fontSize: 28 }} />
        <Typography variant="h4" component="h2">
          Experience
        </Typography>
      </Box>

      <ExperienceItem
        title="DevSoc Sponsorships"
        period="Nov 2024 - Present"
        description="Sponsorship Subcom. Pretty fun experience working with industry partners. 
        In particular, enjoyed keeping in touch with IMC, Jane Street and 
        Citadel Securities (note: Citadel and Citadel Securities are distinct entities 😆).
        Also worked on the website, i.e the Sponsors and Starlight pages."
        backgroundImage={spons}
        // devsoc shill please pay me
        onClick={() => window.open('https://devsoc.app/supporters', '_blank')}
      />

      <Divider sx={{ my: 2 }} />

      <ExperienceItem
        title="Full Stack Engineer Intern"
        period="Dec 2024 - Present"
        description="Engineer (Cadet) at Transport for NSW Coordinator General Operational Strategy and Intelligence team (long ass name ik). Developing TomTom based full-stack applications using React and Java (Spring boot)."
        backgroundImage={transport}
        imageHeight={250}
      />

      <Divider sx={{ my: 2 }} />

      <ExperienceItem
        title="Aunsw President/Sponsorship Director"
        period="Oct 2022 - Dec 2024"
        description="AnimeSoc 2023 VP/Spons Director and President in 2024. Biggest highlights include: working with various sponsors
         (Bandai Namco, Ito-En), organising the production of club merchandise (hoodies + SMASH! merch) and collaborating with other uni clubs 
         for 600+ people events. Secured two Arc Elevation grants (more of this below) and two Arc Clubs Awards."
        backgroundImage={aunsw}
        imageHeight={280}
      />
    </Card3D>
  );
};

export default ExperienceSection;
