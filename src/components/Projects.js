import { Col, Container, Row } from "react-bootstrap";


export const Projects = () => {
  const projects = [
    {
      title: "LLM Webscraper",
      description: "Web Scraping tool that uses LLM to extract data from websites",
      url: "https://github.com/darrenhjle/LLM-Web-Scraper",
    },
    {
      title: "MRT Face Recognition Gantry",
      description: "An advanced MRT gantry system using facial recognition for seamless entry.",
      url: "https://github.com/darrenhjle/Cloud_MRT",
    },
    {
      title: "LMS Portal",
      description: "A learning management system for streamlined education and training.",
      url: "https://github.com/darrenhjle/CSC1106-Web-Programming-Group-Project",
    },
    {
      title: "CCTV Object Detection",
      description: "Collaborative project with Panasonic to detect objects in CCTV footage using machine learning.",
      url: "",
    },
    {
      title: "Asset Sentiment Analysis",
      description: "Simple project that uses NLP and web scraping to analyze sentiment of assets.",
      url: "https://github.com/darrenhjle/Asset-Sentiment-Analysis",
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <h4>These are personal and group projects that I have worked on</h4>
          </Col>
        </Row>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} md={4} className="mb-4">
              <div className="project-card">
              <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                {project.url ? (
                  <a
                    href={project.url}
                    className="view-more"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View More
                  </a>
                ) : (
                  <p className="unavailable-message">
                    Project is unavailable for viewing due to licensing
                  </p>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
