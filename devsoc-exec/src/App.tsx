import { useState, useEffect } from "react";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import { Container as BootstrapContainer, Row, Col } from "react-bootstrap";
import { Analytics } from "@vercel/analytics/next"
// Import cursor CSS
import "./components/CustomCursor.css";

// Components
import {
  Navigation,
  HeroSection,
  AboutSection,
  ExperienceSection,
  VisionSection,
  CustomCursor,
} from "./components";

// Theme
import { createCustomTheme } from "./theme/theme";
import { Settings3DProvider } from "./contexts/Settings3DContext";

import "./portfolio.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : true; // Default to dark mode
  });

  const [enable3D, setEnable3D] = useState(() => {
    const saved = localStorage.getItem("enable3D");
    return saved ? JSON.parse(saved) : false; // Default to 3D disabled
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("enable3D", JSON.stringify(enable3D));
  }, [enable3D]);

  const theme = createCustomTheme(darkMode);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggle3D = () => {
    setEnable3D(!enable3D);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Settings3DProvider enable3D={enable3D}>
        <CustomCursor imageSrc="/raf.png" size={48} />
        <div className="App custom-cursor-container no-select">
          {/* Add no-select to prevent text selection conflicts */}
          <Navigation 
            darkMode={darkMode} 
            toggleDarkMode={toggleDarkMode}
            enable3D={enable3D}
            toggle3D={toggle3D}
          />

          <Container
            maxWidth="lg"
            sx={{ py: 6, position: "relative", zIndex: 1 }}
          >
            <HeroSection />

            <BootstrapContainer fluid>
              <Row className="g-4">
                <Col lg={6}>
                  <AboutSection />
                </Col>

                <Col lg={6}>
                  <ExperienceSection />
                </Col>

                <Col lg={12}>
                  <VisionSection />
                </Col>
              </Row>
            </BootstrapContainer>
          </Container>
        </div>
      </Settings3DProvider>
      <Analytics />
    </ThemeProvider>
  );
}

export default App;
