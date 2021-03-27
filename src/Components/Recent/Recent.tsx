import React from 'react';
import './Recent.scss';
import Recent__Photo from "../../img/recent/recent-img-1.jpg"
import Recent__Photo2 from "../../img/recent/recent-img-2.png"



function Recent() {
    return (
        <>
            <div className="Recent">
                <div className="recent__inner">
                    <div className="recent__item">
                        <div className="recent__img"><img src={Recent__Photo} alt=""/></div>
                        <div className="recent__content">
                            <div className="main__title">
                                <div className="oct">18 <br/> <span className="oct__style">OCT</span></div>

                                <div className="recent__title">Startup ideas needs to be funded

                                    <h3 className="recent__subtitle"><span
                                        className="subtitle__style">By</span> Khalil <span className="subtitle__style">Uddin in</span> Development
                                    </h3>
                                </div>

                            </div>

                            <div className="recent__text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At
                                vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea
                                takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat,
                                sed diam
                            </div>
                        </div>
                    </div>

                    <div className="stick__content"></div>

                    <div className="recent__item">

                        <div className="recent__img"><img src={Recent__Photo2} alt=""/>
                        </div>

                        <div className="recent__content">

                            <div className="main__title">
                                <div className="oct">18 <br/> <span className="oct__style">OCT</span></div>

                                <div className="recent__title">Startup ideas needs to be funded

                                    <h3 className="recent__subtitle"><span
                                        className="subtitle__style">By</span> Khalil <span className="subtitle__style">Uddin in</span> Development
                                    </h3>
                                </div>
                            </div>


                            <div className="recent__text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At
                                vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea
                                takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat,
                                sed diam
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Recent;
