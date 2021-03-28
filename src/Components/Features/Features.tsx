import React from 'react';
import './Features.scss';
import works1 from "../../img/faetures/атом.png"
import works2 from "../../img/faetures/карандаш.png"
import works3 from "../../img/faetures/лампочка.png"
import works4 from "../../img/faetures/облако.png"
import works5 from "../../img/faetures/сумка.png"
import works6 from "../../img/faetures/телик.png"


function Features() {
    return (
        <>
            <div className="container" id="features">
                <div className="features">
                    <div className="features__item">
                        <img className="features__icon"
                             src={works1} alt=""/>
                        <h4 className="features__title">
                            Easily Customised
                        </h4>
                        <div className="features__text">Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                            Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla
                        </div>
                    </div>

                    <div className="features__item">
                        <img className="features__icon" src={works2} alt=""/>
                        <h4 className="features__title">
                            Responsive REady
                        </h4>
                        <div className="features__text">Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                            Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla
                        </div>
                    </div>

                    <div className="features__item">
                        <img className="features__icon"
                             src={works3} alt=""/>
                        <h4 className="features__title">
                            Modern Design
                        </h4>
                        <div className="features__text">Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                            Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla
                        </div>
                    </div>

                    <div className="features__item">
                        <img className="features__icon" src={works4} alt=""/>
                        <h4 className="features__title">
                            Clean Code
                        </h4>
                        <div className="features__text">Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                            Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla
                        </div>
                    </div>

                    <div className="features__item">
                        <img className="features__icon" src={works5} alt=""/>
                        <h4 className="features__title">
                            Ready to Ship
                        </h4>
                        <div className="features__text">Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                            Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla
                        </div>
                    </div>

                    <div className="features__item">
                        <img className="features__icon" src={works6}
                             alt=""/>
                        <h4 className="features__title">
                            Download for Free
                        </h4>
                        <div className="features__text">Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                            Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Features;
