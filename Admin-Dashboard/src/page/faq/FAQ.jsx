import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Stack } from "@mui/material";
import Header from "../../components/Header";

const FAQ = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      <Header
        title="Settings"
        subTitle="Configure and manage your application settings here"
      />

      <Stack direction="column" spacing={2}>
        <Accordion defaultExpanded onChange={handleChange("panel1")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              General Settings
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Configure the basic application settings
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Adjust various general settings of the application to customize
              its behavior and appearance according to your preferences.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              User Management
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Manage and administer user accounts
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Efficiently handle user accounts, access rights, and permissions
              to ensure smooth and secure user interactions within the
              application.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6bh-content"
            id="panel6bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Crafters Management
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Manage the details and operations related to crafters
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Effectively handle crafters' profiles, services, and operations to
              ensure seamless interactions and quality services for users.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Advanced Settings
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Access and manage advanced configurations
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Explore and manage advanced configurations and settings for a more
              tailored and powerful experience within the application.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Personal Data Management
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Manage personal data and privacy settings to ensure compliance
              with data protection regulations and user privacy preferences.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Box>
  );
};

export default FAQ;
