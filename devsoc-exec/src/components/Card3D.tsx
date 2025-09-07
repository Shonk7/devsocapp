import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { useSettings3D } from "../contexts/Settings3DContext";

// Hello gamers I tried making use of the 3D component from https://ui.aceternity.com/components/3d-card-effect
// But is was kinda funky so I made my own -> not really a 3D card but the name of the component persists from
// it's inspiration

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  enable3D?: boolean;
}
      
export const Card3D: React.FC<Card3DProps> = ({
  children,
  className,
  style,
  enable3D: enable3DProp,
}) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const { enable3D: enable3DContext } = useSettings3D();
  
  // Use prop if provided, otherwise use context
  const enable3D = enable3DProp !== undefined ? enable3DProp : enable3DContext;

  const hoverEffects = enable3D ? {
    rotateX: 7,
    rotateY: 7,
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(99, 102, 241, 0.1)",
  } : {
    scale: 1.01,
    boxShadow: "0 8px 16px rgba(99, 102, 241, 0.05)",
  };

  return (
    <motion.div
      className={className}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: "12px",
        padding: "24px",
        backgroundColor: "transparent",
        border: isDarkMode
          ? "1px solid rgba(255,255,255,0.2)"
          : "1px solid rgba(0,0,0,0.1)",
        transformStyle: enable3D ? "preserve-3d" : "flat",
        perspective: enable3D ? 1000 : "none",
        overflow: "hidden",
        ...style,
      }}
      whileHover={hoverEffects}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      {children}

      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: "12px",
          background:
            "linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(147, 51, 234, 0.05))",
          pointerEvents: "none",
          opacity: 0,
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};
