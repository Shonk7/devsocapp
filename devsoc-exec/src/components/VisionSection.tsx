import React from "react";
import { Typography, Box } from "@mui/material";
import { Lightbulb as LightbulbIcon } from "@mui/icons-material";
import { Card3D } from "./Card3D";
import arcElevationGrant from '../assets/arc-event-elevation-grant.png';

const VisionSection: React.FC = () => {
  return (
    <Card3D>
      <Box display="flex" alignItems="center" mb={3}>
        <LightbulbIcon color="primary" sx={{ mr: 2, fontSize: 28 }} />
        <Typography variant="h4" component="h2">
          Visions and Actions
        </Typography>
      </Box>

      <Typography variant="h6" gutterBottom color="primary" sx={{ mb: 2 }}>
        Goals 🎯
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        <strong>🤝 Strengthen External Portfolio Connections:</strong> Better coordination 
        between Events, Sponsorship, and Marketing teams so that our events can be 
        planned and run effectively. Ensuring that our sponsors and members' needs are met
        throughout the process.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        <strong>🌐 Expand Industry Partnerships:</strong> Naturally, as I come from a sponsorship
        background, I want to leverage our existing connections and build new ones within
        tech and other adjacent companies. Not only for sponsorship revenue,
        but also to provide members a gateway to internships, mentorships, project collaborations and more.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        <strong>💡 Improve Sponsorship Engagement:</strong> Adding onto before, I want to get more of our sponsors 
        more involved in our events: running workshops, giving talks, and connecting with members 
        rather than just sending money and logos.
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        <strong>🔗 Bridge External, Internal and Project Portfolios:</strong> I want to create better connections between 
        external portfolios (Events, Sponsorship, Marketing) and the rest of DevSoc so everyone understands 
        what we're working on. This means regular updates to other portfolios about our partnerships and 
        projects, while also learning about what they're up to so we can spot opportunities to work together.
      </Typography>


      <Typography variant="h6" gutterBottom color="primary" sx={{ mb: 2 }}>
        What I Value Most 🩵
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        DevSoc's collaborative nature. I want to maintain this both in the External portfolio
        and society-wide while ensuring every member has opportunities to grow and contribute 
        meaningfully to whatever they are working on.
      </Typography>

      <Typography variant="h6" gutterBottom color="primary" sx={{ mb: 2 }}>
        Areas for Improvement 🛠️
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        <strong>📅 Event Organisation:</strong> Stronger planning systems and clearer timelines 
        so we don't have last-minute scrambles. Better communication so all portfolios should know their roles 
        well before events kick off.
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        <strong>📣 Marketing Collaboration:</strong> Get Marketing working more closely with 
        non-external portfolios like TP. Ensuring the communication pipelines consistenty remain open
        and that both parties are active and involved in the conversation from day one.
      </Typography>

      <Typography variant="h6" gutterBottom color="primary" sx={{ mb: 2, mt: 4 }}>
        Actions 🚀
      </Typography>
      
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          alignItems: 'flex-start',
          mb: 3,
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>💸 Event Elevation Grant:</strong> Back at AUNSW, we were able to 
            secure two Event Elevation Grants for our Roundhouse Events in 2023 and 2024, totalling around $10,000 of funding. 
            I want to bring this strategy to DevSoc to fund flagship events like Starlight. Typically these grants,
            are only available to club events with high attendance, held at UNSW and provides novel engagement for Arc members
            which DevSoc events definitely do.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>🗂️ Event Responsibility Matrix:</strong> I want to create a clear responsibility matrix that shows exactly who does what and when for each event. 
            Think something like RACI charts but simpler, so everyone knows if they're responsible, consulted, or just informed 
            for each task, with specific handoff points between portfolios.
          </Typography>
          <Typography variant="body1">
            <strong>📊 Sample Slide Deck:</strong> We should create a consistent slide deck template that all portfolios 
            can use for scenarios in which non-Event portfolios are presenting. This will make our presentations look more professional 
            even in situations where the Events portfolio aren't able to make slides. Also makes it easier to make slides quickly.
            Not suggesting that every presentations need these slides, but having a template ready to go would be super useful.
          </Typography>
        </Box>
        
        <Box
          sx={{
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: 2,
            minWidth: { xs: '100%', md: 200 },
            maxWidth: { xs: '100%', md: 200 },
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
            mt: { xs: 2, md: 0 },
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
          onClick={() => window.open('https://www.arc.unsw.edu.au/clubs/club-forms/grants/club-elevation-grant', '_blank')}
        >
          <img
            src={arcElevationGrant}
            alt="Arc Event Elevation Grant"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </Box>
      </Box>
    </Card3D>
  );
};

export default VisionSection;
