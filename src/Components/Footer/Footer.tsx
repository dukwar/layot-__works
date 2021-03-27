import React from 'react';
import './Footer.scss';
import {
    FacebookFooter,
    GoogleFoooter,
    LinkedInFooter,
    TwitterFooter
} from "../../helpersSCSS/imgFiles";



function Footer() {
    return (
        <>
            <footer className="footer">

                    <div className="footer__inner">
                        <div className="footer__block">
                            <h4 className="footer__title">Location</h4>
                            <address className="footer__address">
                                <div>3481 Melrose Place</div>
                                <div>Beverly Hills, CA 90210</div>
                            </address>
                        </div>

                        <div className="footer__block">
                            <h4 className="footer__title">Share with Love</h4>
                            <div className="social social--footer">
                                <FacebookFooter/>
                                <GoogleFoooter/>
                                <LinkedInFooter/>
                                <TwitterFooter/>


                            </div>

                        </div>

                        <div className="footer__block">
                            <h4 className="footer__title">About ActiveBox</h4>
                            <div className="footer__text">
                                <div><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper
                                    nulla non metus auctor fringilla.</p></div>

                            </div>
                        </div>

                    </div>

                <div className="copyright">
                    <div className="container">
                        <div className="copyright__text">

                            <div>Copyright © 2020 ActiveBox. All Rights Reserved</div>
                            Made with <span style={{color:"red"}}>Love</span><span> by Kamal Chaneman</span>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
