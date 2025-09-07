import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import "./CustomCursor.css";

interface CustomCursorProps {
  imageSrc: string;
  size?: number;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ imageSrc, size = 32 }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      document.body.style.cursor = "none";
      setTimeout(() => {
        document.body.style.cursor = "none";
      }, 10); // Small delay to override browser behavior
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("contextmenu", handleContextMenu);

    // Simple cursor hiding - let CSS handle the rest
    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("contextmenu", handleContextMenu);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isVisible ? "visible" : ""} ${theme.palette.mode === "dark" ? "dark-mode" : "light-mode"}`}
      style={{
        left: mousePosition.x - size / 2,
        top: mousePosition.y - size / 2,
        width: size,
        height: size,
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        zIndex: 10000, // Ensure it's on top
      }}
    />
  );
};

export default CustomCursor;
