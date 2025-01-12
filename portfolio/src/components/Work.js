import { Container, Row, Col } from "react-bootstrap";

export const Work = () => {
  const experiences = [
    {
        role: "Diploma in Multimedia & Infocomm Technology",
        company: "Nanyang Polytechnic",
        duration: "Apr 2018 - Apr 2021",
        description: "Web Design & Development | Open-Source Web Solutions Development | Cyber security essentials | Mobile App Development | Virtualization Essentials",
    },
    {
        role: "Web Developer & Designer Intern",
        company: "SportSG",
        duration: "Sep 2020 - Feb 2021",
        description: "Led and managed projects on creating dynamic webpages and animation regarding cybersecurity at the company",
      },
    {
        role: "Bachelor with Honours in Computing Science degree",
        company: "Singapore institute of technology/ University of Glasgow (Joint degree)",
        duration: "Aug 2023 (on-going)",
        description: "",
    },
    {
        role: "Project member for CCTV object detection ",
        company: "Panasonic",
        duration: "Oct 2024 (on-going)",
        description: "Utilized real-time machine learning models to identify and track objects from CCTV inputs effectively to implement safe distancing and monitor overcrowding.",
},
  ];

  return (
    <section className="work" id="work">
    <Container className="work-experience" id="work-experience">
      <h2 className="text-center mb-4">Work & Study</h2>
      <Row className="timeline">
        {experiences.map((experience, index) => (
          <Col key={index} xs={12} className="timeline-item mb-4">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>{experience.role}</h4>
              <h5>{experience.company}</h5>
              <p className="text">{experience.duration}</p>
              <p>{experience.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
    </section>
  );
};
