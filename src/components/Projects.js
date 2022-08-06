import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Tiktok from './Tiktok';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Web Design",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Graphic Design",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Backend Application Support",
      description: "Technical Support & Development",
      imgUrl: projImg1,
    },
    {
      title: "Code Editing & Cleanup",
      description: "Technical Support & Development",
      imgUrl: projImg2,
    },
    {
      title: "Project Design",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Some of the projects I have worked on range from Python functions, React Apps such as portfolio apps, blog apps, pulling APIs from websites and rendering them on the page.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Praise</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">TikTok</Nav.Link>

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
                      <Tab.Pane eventKey="second">
                        <p>Bottega University gave me so much experience with coding There are so many skills I know now that I never would have been able to figure out before. I wanna thank them for my knowledge today.</p>

                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>I'm also a very avid video game player and I post tiktoks! Wanna check them out?? Click the button below!</p>
                        <div className='tiktok-btn'>
                          <button><a href="https://www.tiktok.com/@destineejanay">TikTok Feed</a></button>
                        </div>
                        <Tiktok />
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}