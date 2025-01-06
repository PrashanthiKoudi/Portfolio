import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-image.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Box, Typography, IconButton, Link } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact Us"
                />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Contact Me</h2>
                  <Box
                    display="block"
                    alignItems="center"
                    justifyContent="space-around"
                    p={2}
                    borderRadius={2}
                    boxShadow={3}
                    marginRight={'20%'}
                    bgcolor="#ccb1c0"
                  >
                    <Box textAlign="center" >
                      <IconButton color="primary" aria-label="call" >
                        <PhoneIcon fontSize="large" />
                      </IconButton>
                      <Typography>
                        <Link href="tel:+1 9196336405" underline="none" color="textPrimary">
                          +1 (919)633-6405
                        </Link>
                      </Typography>
                    </Box>
                    <Box textAlign="center" marginTop='5%'>
                      <IconButton color="primary" aria-label="email">
                        <EmailIcon fontSize="large" />
                      </IconButton>
                      <Typography>
                        <Link href="mailto:prashanthikoudi@gmail.com" underline="none" color="textPrimary">
                          prashanthikoudi@gmail.com
                        </Link>
                      </Typography>
                    </Box>
                    <Box textAlign="center" marginTop='5%'>
                      <IconButton color="primary" aria-label="linkedin">
                        <LinkedInIcon fontSize="large" />
                      </IconButton>
                      <Typography>
                        <Link
                          href="https://www.linkedin.com/in/prashanthi-koudi/"
                          target="_blank"
                          rel="noopener noreferrer"
                          underline="none"
                          color="textPrimary"
                        >
                          LinkedIn
                        </Link>
                      </Typography>
                    </Box>
                  </Box>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
