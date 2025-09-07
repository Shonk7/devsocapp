import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  FormControlLabel,
  IconButton,
  Box,
} from "@mui/material";
import { Brightness4, Brightness7, ThreeDRotation, Stop } from "@mui/icons-material";

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  enable3D: boolean;
  toggle3D: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  darkMode,
  toggleDarkMode,
  enable3D,
  toggle3D,
}) => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          DevSoc Exec App
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <FormControlLabel
            control={
              <Switch
                checked={enable3D}
                onChange={toggle3D}
                color="default"
              />
            }
            label={
              <IconButton color="inherit" size="small">
                {enable3D ? <ThreeDRotation /> : <Stop />}
              </IconButton>
            }
            labelPlacement="start"
            sx={{ mr: 1 }}
          />
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={toggleDarkMode}
                color="default"
              />
            }
            label={
              <IconButton color="inherit" size="small">
                {darkMode ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            }
            labelPlacement="start"
            sx={{ mr: 0 }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { Navigation };
export default Navigation;
