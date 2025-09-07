import React from "react";
import { Box } from "@mui/material";

interface AnimatedBackgroundProps {
  darkMode: boolean;
  children: React.ReactNode;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  darkMode,
  children,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -2,
          background: darkMode
            ? `
              radial-gradient(ellipse at top, #1a1a2e 0%, #16213e 40%, #0f3460 100%),
              linear-gradient(135deg, #667eea 0%, #764ba2 100%)
            `
            : `
              radial-gradient(ellipse at top, #f8fafc 0%, #e2e8f0 40%, #cbd5e1 100%),
              linear-gradient(135deg, #667eea 0%, #764ba2 100%)
            `,
          backgroundBlendMode: darkMode ? "multiply" : "soft-light",
          animation: "gradientShift 15s ease infinite",
        },
        "&::after": {
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          background: darkMode
            ? `
              radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(120, 219, 226, 0.3) 0%, transparent 50%)
            `
            : `
              radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(120, 219, 226, 0.1) 0%, transparent 50%)
            `,
          animation: "float 20s ease-in-out infinite",
        },
        "@keyframes gradientShift": {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
        "@keyframes float": {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)",
          },
          "33%": {
            transform: "translateY(-30px) rotate(1deg)",
          },
          "66%": {
            transform: "translateY(-20px) rotate(-1deg)",
          },
        },
      }}
    >
      {children}
    </Box>
  );
};

export default AnimatedBackground;
