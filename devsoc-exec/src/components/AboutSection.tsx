import React from "react";
import { Typography, Box, Chip } from "@mui/material";
import { Person as PersonIcon } from "@mui/icons-material";
import { Card3D } from "./Card3D";
import aryan from '../assets/aryan.png';
// I like Pokémon
const skills = [
  "Front-end Development (React)",
  "N from Pokémon Black and White",
  "C++",
  "Rafayel ifykyk",
  "Event Management",
  "Roundhouse Events",
  "LeBron James",
  "Sponsor Relations",
  "Pokémon Black and White",
  "Account Management",
  "Control Systems",
  "CSE Tutoring",
  "Derrick White",
  "Dynamic Programming",
  "Soccer",
  "Digital Circuits",
  "Pokémon Black and White 2",
];

const AboutSection: React.FC = () => {
  return (
    <Card3D className="h-full">
      <Box display="flex" alignItems="center" mb={3}>
        <PersonIcon color="primary" sx={{ mr: 2, fontSize: 28 }} />
        <Typography variant="h4" component="h2">
          About Me
        </Typography>
      </Box>

      <Typography variant="body1" mb={3}>
        Hola! I was originally an Electrical Engineering BE/ME student but
        after starting my bachelor's thesis I realised I'm not built for
        research haha. So I switched to a double degree in Computer Science and it's been pretty fun!
        DevSoc's been a big part of why!
    
      </Typography>
      <Typography variant="body1" mb={3}>
       Last year, due to my experiences working as a Full-stack
       at Transport and my other society roles, I applied for the Sponsorship team.
       It was pretty fun working with the team, managing sponsors and
        helping with some of the bigger events → Starlight 🔥
      </Typography>

      <Box
        sx={{
          width: "100%",
          height: 500,
          backgroundImage: `url(${aryan})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 2,
          mb: 3,
          position: "relative",
        }}
      />

      <Typography variant="body1" mb={3}>
       I like reviewing office bathrooms → the above is a 9/10.
      </Typography>

      <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
        Skills & Interests
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={1}>
        {skills.map((skill, index) => (
          <Chip
            key={index}
            label={skill}
            color="primary"
            variant="outlined"
            size="small"
          />
        ))}
      </Box>
    </Card3D>
  );
};

export default AboutSection;
