import React from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Button from "@mui/material/Button";
import { DownloadOutlined } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import Header from "../../components/Header";
import "./style.css";
import EmailIcon from "@mui/icons-material/Email";
import ArticleIcon from "@mui/icons-material/Article";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PaidIcon from "@mui/icons-material/Paid";
function Card1({ heading, description, icon, className }) {
  return (
    <div className={`card ${className}`}>
      <div className="min-w-max">{icon}</div>
      <div className="card-content">
        <h3 className="card-heading">{heading}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

const Dashboard = () => {
  return (
    <div>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header
          isDashboard={true}
          title={"DASHBOARD"}
          subTitle={"Welcome to your dashboard"}
        />

        <Box sx={{ textAlign: "right", mb: 1.3 }}>
          <Button
            sx={{
              padding: "6px 8px",

              textTransform: "capitalize",

              backgroundColor: "#8c633f",
            }}
            variant="contained"
            color="primary"
          >
            <DownloadOutlined />
            Download Reports
          </Button>
        </Box>
      </Stack>

      <div className="grid-container">
        <Card1
          className="bg-fcf4ff"
          heading="Transactions Overview"
          description="Get a comprehensive view of your financial transactions. Analyze transaction volumes, trends, and key metrics instantly. Stay informed and in control to make data-driven decisions that drive business success."
          icon={
            <PaidIcon
              className="card-icon"
              style={{ fontSize: "3rem", marginTop: "15" }}
            />
          }
        />

        <Card1
          className="bg-fefaf0"
          heading="Effortless Article Management"
          description="Simplify your content strategy with our streamlined article management system. Organize, edit, and publish articles seamlessly. Track engagement and performance metrics to optimize your content for maximum impact, all from a centralized and user-friendly platform."
          icon={
            <ArticleIcon
              className="card-icon"
              style={{ fontSize: "3rem", marginTop: "15" }}
            />
          }
        />

        <Card1
          className="bg-fff4f4"
          heading="Efficient Email Handling"
          description="Handle your emails efficiently and effectively with our intuitive email management tool. Streamline communication, organize threads, and manage your inbox effortlessly. Monitor email performance and engagement, ensuring your messages are impactful and drive meaningful interactions with your audience."
          icon={
            <EmailIcon
              className="card-icon"
              style={{ fontSize: "3rem", marginTop: "15" }}
            />
          }
        />

        <Card1
          className="bg-f3faff"
          heading="User-Centric Platform"
          description="Empower people—users, crafters, and admins alike—with our user-centric platform. Tailored experiences for seamless navigation, robust tools for crafters, and insightful controls for admins. A holistic approach to enhance engagement and satisfaction across the board"
          icon={
            <PeopleOutlineIcon
              className="card-icon"
              style={{ fontSize: "3rem", marginTop: "15" }}
            />
          }
        />
      </div>

      <Row1 />

      <br />

      <Row2 />
    </div>
  );
};

export default Dashboard;
