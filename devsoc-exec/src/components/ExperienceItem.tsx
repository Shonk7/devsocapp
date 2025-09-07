import React from "react";
import { Box, Typography } from "@mui/material";

interface ExperienceItemProps {
  title: string;
  period: string;
  description: string;
  backgroundImage: string;
  imageHeight?: number;
  onClick?: () => void;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  period,
  description,
  backgroundImage,
  imageHeight = 200,
  onClick
}) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Box
        onClick={onClick}
        sx={{
          width: "100%",
          height: imageHeight,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: 2,
          mb: 2,
          position: "relative",
          cursor: onClick ? "pointer" : "default",
          transition: "transform 0.3s ease",
          "&:hover": onClick ? {
            transform: "scale(1.05)",
          } : {},
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.3)",
            borderRadius: 2,
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: 16,
            left: 16,
            zIndex: 1,
            color: "white",
          }}
        >
          <Typography variant="h6" component="span" sx={{ color: "white" }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>
            {period}
          </Typography>
        </Box>
      </Box>
      <Typography variant="body2" sx={{ mt: 1 }}>
        {description}
      </Typography>
    </Box>
  );
};

export default ExperienceItem;
