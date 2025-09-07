import { createTheme } from "@mui/material/styles";

export const createCustomTheme = (darkMode: boolean) => {
  return createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#D9807E", // DevSoc red
        light: "#F2B8B5",
        dark: "#B75B57",
      },
      secondary: {
        main: "#5B8FD8", // DevSoc blue
        light: "#A3C4F3",
        dark: "#2C5FA9",
      },
      background: {
        default: darkMode ? "#121212" : "#f7f6f0",
        paper: darkMode ? "#1e1e1e" : "#f9f8f2",
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h2: {
        fontWeight: 700,
      },
      h4: {
        fontWeight: 600,
      },
      h6: {
        fontWeight: 600,
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            transition: "all 0.3s ease-in-out",
            backgroundColor: darkMode ? "#1e1e1e" : "#f9f8f2",
            border: darkMode ? "none" : "1px solid #e8e6e0",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: darkMode
                ? "0 12px 24px rgba(0,0,0,0.15)"
                : "0 12px 24px rgba(0,0,0,0.08)",
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-2px)",
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: darkMode ? "#1e1e1e" : "#f9f8f2",
            color: darkMode ? "#ffffff" : "#333333",
            boxShadow: darkMode
              ? "0 2px 4px rgba(0,0,0,0.1)"
              : "0 2px 4px rgba(0,0,0,0.05)",
          },
        },
      },
    },
  });
};
