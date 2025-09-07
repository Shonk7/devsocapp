import React, { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
} from "@mui/icons-material";
import { Card3D } from "./Card3D";
import ContactModal from "./ContactModal";

const HeroSection: React.FC = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleContactClick = () => {
    setContactModalOpen(true);
  };

  const handleContactClose = () => {
    setContactModalOpen(false);
  };

  return (
    <>
    <Card3D
      style={{
        padding: "48px",
        textAlign: "center",
        marginBottom: "32px",
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom color="primary">
        Aryan Rajnandan
      </Typography>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Running for:
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" color="secondary" sx={{ fontWeight: 'medium' }}>
          1. Vice President (Externals)
        </Typography>
        <Typography variant="h6" color="primary" sx={{ fontWeight: 'medium' }}>
          2. Administrative Officer
        </Typography>
      </Box>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
        Electrical Engineering (Honours) + Computer Science 
      </Typography>
      <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
        <Button
          variant="outlined"
          startIcon={<EmailIcon />}
          onClick={handleContactClick}
        >
          Contact Me
        </Button>
        <Button
          variant="outlined"
          startIcon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/aryan-rajnandan-3a7b17201/"
          // ngl I only just found out that target="_blank" is a thing
          target="_blank"
        >
          LinkedIn
        </Button>
        <Button
          variant="outlined"
          startIcon={<GitHubIcon />}
          href="https://github.com/Shonk7/devsocapp"
          target="_blank"
        >
          GitHub
        </Button>
      </Box>
    </Card3D>
    
    <ContactModal 
      open={contactModalOpen} 
      onClose={handleContactClose} 
    />
    </>
  );
};

export default HeroSection;
