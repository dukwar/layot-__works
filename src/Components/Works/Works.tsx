import React from 'react';
import './Works.scss';
import works1 from "../../img/work-1.png"
import works2 from "../../img/work-2.png"
import works3 from "../../img/work-3.jpg"
import works4 from "../../img/work-4.png"
import works5 from "../../img/work-5.png"
import works6 from "../../img/work-6.png"
import works7 from "../../img/work-7.png"
import works8 from "../../img/work-8.png"




function Works() {
    return (
        <>
            <div className="works" id="works">
                <div className="works__item">
                    <img className="works__photo" src={works1} alt=""/>
                        <div className="works__content">
                            <div className="works__title">Project Name</div>
                            <div className="works__text">User Interface Design</div>
                        </div>
                </div>
                <div className="works__item">
                    <img className="works__photo" src={works2} alt=""/>
                        <div className="works__content">
                            <div className="works__title">Project Name</div>
                            <div className="works__text">User Interface Design</div>
                        </div>
                </div>
                <div className="works__item">
                    <img className="works__photo" src={works3} alt=""/>
                        <div className="works__content">
                            <div className="works__title">Project Name</div>
                            <div className="works__text">User Interface Design</div>
                        </div>
                </div>
                <div className="works__item">
                    <img className="works__photo" src={works4} alt=""/>
                        <div className="works__content">
                            <div className="works__title">Project Name</div>
                            <div className="works__text">User Interface Design</div>
                        </div>
                </div>
                <div className="works__item">
                    <img className="works__photo" src={works5} alt=""/>
                        <div className="works__content">
                            <div className="works__title">Project Name</div>
                            <div className="works__text">User Interface Design</div>
                        </div>
                </div>
                <div className="works__item">
                    <img className="works__photo" src={works6} alt=""/>
                        <div className="works__content">
                            <div className="works__title">Project Name</div>
                            <div className="works__text">User Interface Design</div>
                        </div>
                </div>
                <div className="works__item">
                    <img className="works__photo" src={works7} alt=""/>
                        <div className="works__content">
                            <div className="works__title">Project Name</div>
                            <div className="works__text">User Interface Design</div>
                        </div>
                </div>
                <div className="works__item">
                    <img className="works__photo" src={works8} alt=""/>
                        <div className="works__content">
                            <div className="works__title">Project Name</div>
                            <div className="works__text">User Interface Design</div>
                        </div>
                </div>
            </div>

        </>
    );
}

export default Works;
