import React from 'react';
import './Footer.scss';
import {Facebook, Google, LinkedIn, Twitter} from "../../helpersSCSS/imgFiles";



function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer__inner">
                    <div className="footer__item">
                        <div className="social social--2">
                            <Twitter/>
                            <Google/>
                            <LinkedIn/>
                            <Facebook/>
                        </div>


                        <img className="stick-2" src="img/clients/stick-2.png" alt=""/>

                            <div className="footer__text">
                                © 2020 Startup, Designed by ShapedTheme
                            </div>
                    </div>
                </div>

            </footer>
        </>
    );
}

export default Footer;
