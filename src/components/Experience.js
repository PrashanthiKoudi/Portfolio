import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { Code, Build, CheckCircle } from "@mui/icons-material"; // Importing Material-UI icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faSyncAlt, faChartLine, faServer, faLifeRing } from '@fortawesome/free-solid-svg-icons';
import ibm from "../assets/img/ibm.png"

export const Experience = () => {
  return (
    <div>
      <Box
      id="experience"
        sx={{
          background: "linear-gradient(to bottom,#740f41, #4B0082, #000000)", // Gradient from pink to purple to black
          color: "#fff",
          p: 4,
          minHeight: "100vh",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          align="center"
          mb={4}
          style={{ fontWeight: "bold" }}
        >
          PROFESSIONAL EXPERIENCE
        </Typography>
        <Grid container spacing={4} justifyContent="center" mb={6}>
          {/* Skills Section */}
          <Grid item xs={12} md={6} display="flex" alignItems="center" justifyContent="center">
            <Typography variant="h5" align="center" mb={2}>
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              {[
                { name: "MySQL", icon: <FontAwesomeIcon icon={faDatabase} /> },
                { name: "Mainframe", icon: <FontAwesomeIcon icon={faServer} /> },
                { name: "ETL", icon: <FontAwesomeIcon icon={faSyncAlt} /> },
                { name: "Dashboards", icon: <FontAwesomeIcon icon={faChartLine} /> },
                { name: "Python", icon: <Code /> },
                { name: "Development", icon: <Build /> },
                { name: "Testing & Deployment", icon: <CheckCircle /> },
                { name: "Support", icon: <FontAwesomeIcon icon={faLifeRing} /> },
              ].map((skill, index) => (
                <Grid item xs={6} sm={3} key={index} display="flex" justifyContent="center">
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box
                      bgcolor="#14213d"
                      borderRadius="20%"
                      width={40}
                      height={40}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      mb={1}
                    >
                      {skill.icon}
                    </Box>
                    <Typography variant="subtitle1" color="#fff" align="center">
                      {skill.name}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Work Experience Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" align="center" mb={2}>
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {[
                {
                  role: "Software Analyst",
                  company: "IBM",
                  period: "Aug, 2021 - Jun 2023",
                  points: [
                    "Worked on Data Pipeline Development",
                    "Designed and executed job scheduling strategies for efficient resource utilization using Python",
                    "Performed timely updates and enhancements to meet SLA obligations.",
                  ],
                  logo: ibm,
                },
                {
                  role: "Software Engineer",
                  company: "IBM",
                  period: "Jan, 2021 - Aug, 2021",
                  points: [
                    "Managed ETL data pipeline developments with IBM InfoSphere to enhance data deliverability.",
                    "Developed workflows in CP4D, integrating Data Refinery Flows and Data Virtualization.",
                    "Conducted data validation, unit testing, and debugging with Python and SQL, improving result accuracy by 15% and ensuring regulatory compliance.",
                  ],
                  logo: ibm,
                },
              ].map((job, index) => (
                <Grid item xs={12} key={index}>
                  <Paper
                    elevation={3}
                    style={{
                      padding: "16px",
                      backgroundColor: "#14213d",
                      borderRadius: "8px",
                    }}
                  >
                    <Box display="flex" alignItems="center" mb={2}>
                      <img
                        src={job.logo}
                        alt={`${job.company} logo`}
                        style={{ width: 40, height: 40, marginRight: "16px" }}
                      />
                      <Box>
                        <Typography
                          variant="h6"
                          style={{ fontWeight: "bold", color: "#fff" }}
                        >
                          {job.role}, {job.company}
                        </Typography>
                        <Typography variant="body2" color="#ccc">
                          {job.period}
                        </Typography>
                      </Box>
                    </Box>
                    <ul style={{ paddingLeft: "16px" }}>
                      {job.points.map((point, i) => (
                        <li key={i} style={{ color: "#fff" }}>
                          <Typography variant="body2">{point}</Typography>
                        </li>
                      ))}
                    </ul>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
