import { clear } from "@testing-library/user-event/dist/cjs/utility/clear.js";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Software Developer', 'Web Developer', 'Machine Learning'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => 50 - Math.random() * 50);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section id="home" className="banner">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} className="mx-auto">
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hello I am Darren `}</h1>
                        <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Developer", "Web Deverloper", "Machine Learning" ]'><span className="wrap">{text}</span></span></h1>
                        <p>
                            I am currently pursuing a Bachelor's with Honors in Computer Science at the Singapore Institute of Technology, 
                            as part of a joint degree program with the University of Glasgow. My passion for technology and problem-solving 
                            drives me to explore innovative solutions in various fields such as machine learning, blockchain, and software engineering.
                        </p>

                        <p>
                            I enjoy tackling complex challenges and continuously improving my skills through hands-on projects, research, and collaboration. 
                            As a detail-oriented and adaptable individual, I strive to create efficient and impactful technologies that can contribute to a better future.
                        </p>

                        <p>
                            This portfolio showcases some of my work, highlighting my dedication to learning and growing as a computer scientist.
                        </p>
                        <button onClick={() => console.log('Contact me')} >Let's Connect<ArrowRightCircle size={25} /></button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}