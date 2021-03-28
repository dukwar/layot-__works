import React from 'react';
import './Intro.scss';

function Intro() {
    return (
        <>
            <div className="intro" id="intro">
                <div className="container">
                    <div className="intro__inner">
                        <h1 className="intro__title">Top 100 Motivating Quotes from Great People
                        </h1>
                        <h2 className="intro__subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna
                            vel scelerisque nisl consectetur et.
                        </h2>
                        <a className="btn btn--red" href="#">Find Out More</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Intro;
