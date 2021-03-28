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
                    <h3>Douglas Everett </h3>
                    <p>Problems should not push you in the back, but dreams should lead you forward. </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-50"
                    src={Photo2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Ralph Emerson</h3>
                    <p>You will not grow unless you try to accomplish something beyond what you already know perfectly. </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-50"
                    src={Photo3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Albert Einstein</h3>
                    <p>You will never be able to solve a problem that has arisen if you keep the same mindset and the same approach that led you to this problem. </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider