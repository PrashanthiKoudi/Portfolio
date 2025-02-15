import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Project-img1.png"; 
import projImg2 from "../assets/img/Project-img21.png"; 
import projImg3 from "../assets/img/Project-img3.png"; 
import projImg4 from "../assets/img/Project-img4.png"; 
import projImg5 from "../assets/img/Project-img5.png"; 
import projImg6 from "../assets/img/Project-img6.png"; 
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Yodha",
      description: "Online Voting System using Blockchain",
      imgUrl: projImg1,
    },
    {
      title: "Sales Power BI Dashboard",
      description: "Power BI Dashboard on sales data",
      imgUrl: projImg4,
    },

    {
      title: "Face Rec",
      description: "Facial recognition System",
      imgUrl: projImg3,
    },
    {
      title: "Vasthavik",
      description: "certificate Storing System using Blockchain",
      imgUrl: projImg2,
    },
    {
      title: "Home Harbor",
      description: "Website to buy and sell your properties",
      imgUrl: projImg5,
    },
    {
      title: "Bharath Spices",
      description: "Website for curated Indian recipies",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Few of many...</Nav.Link>
                    </Nav.Item>
 
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h3 style={{ textAlign: "center" }}>My Motivation</h3>
                      <p>My work is my purpose, my driving force. It's the reason I get up every day and do what I do. Most importantly, it keeps pushing me to achieve bigger and better things with each new challenge.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
