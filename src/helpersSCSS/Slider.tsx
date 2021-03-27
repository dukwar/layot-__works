import React from "react";
import {Carousel} from "react-bootstrap";
import Photo1 from "../img/slide-1.jpg"
import Photo2 from "../img/slide-2.jpg"
import Photo3 from "../img/slide-3.jpg"





let Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-50"
                    src={Photo1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-50"
                    src={Photo2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-50"
                    src={Photo3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider