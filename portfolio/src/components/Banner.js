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
                        <h1>{`Hello I am Darren Ho `}</h1>
                        <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Developer", "Web Deverloper", "Machine Learning" ]'><span className="wrap">{text}</span></span></h1>
                        <p>Computer Science student with passion in software development, web design, and machine learning.</p>
                        <button onClick={() => console.log('Contact me')} >Let's Connect<ArrowRightCircle size={25} /></button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}