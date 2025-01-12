import Carousel from "react-multi-carousel";
import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import js from "../assets/img/js.svg";
import html from "../assets/img/html.svg";
import java from "../assets/img/java.svg";
import python from "../assets/img/python.svg";
import react from "../assets/img/react.svg";
import tf from "../assets/img/tensorflow.svg";
import c from "../assets/img/c.svg";
import django from "../assets/img/django.svg";
import laravel from "../assets/img/laravel.svg";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    return (
        <section className="skills" id="skills">
            <div>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h1>Skills</h1>
                            <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={1500} className="skill-slider">
                                <div className="item">    
                                    <img src={js} alt="JavaScript" />      
                                </div>
                                <div className="item">  
                                    <img src={python} alt="Python" />      
                                </div>
                                <div className="item">
                                    <img src={tf} alt="TensorFlow" />
                                </div>
                                <div className="item"> 
                                    <img src={html} alt="HTML" />         
                                </div>
                                <div className="item">  
                                    <img src={java} alt="Java" />        
                                </div>
                                <div className="item">
                                    <img src={laravel} alt="Laravel" />
                                </div>
                                <div className="item">
                                    <img src={django} alt="Django" />
                                </div>
                                <div className="item">
                                    <img src={react} alt="React" />
                                </div>
                                <div className="item">
                                    <img src={c} alt="C" />
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}