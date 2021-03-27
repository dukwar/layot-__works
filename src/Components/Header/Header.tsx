import React, {useState} from 'react';
import './Header.scss';
import Dropdown2 from "../../helpersSCSS/Dropdown";
import {Link} from "react-scroll";
import {Dropdown} from "react-bootstrap";

function Header() {

    return (
        <>
            <header className="header" id="header">
                <div className="container">
                    <div className="header__inner" id="headerinner">
                        <div className="header__logo">

                        </div>

                        <div className={"DropDown"}>
                            <Dropdown2 />
                        </div>
                        <nav className="nav" id="nav">
                            <a className="nav__link" href="#" > <Link  activeClass="active"
                                                                       to={"features"}
                                                                       spy={true}
                                                                       smooth={true}
                                                                       offset={-70}
                                                                       duration={500}>Features</Link></a>
                            <a className="nav__link" href="#" ><Link  activeClass="active"
                                                                      to={"works"}
                                                                      spy={true}
                                                                      smooth={true}
                                                                      offset={-70}
                                                                      duration={500}>Works</Link></a>
                            <a className="nav__link" href="#" ><Link  activeClass="active"
                                                                      to={"team"}
                                                                      spy={true}
                                                                      smooth={true}
                                                                      offset={-70}
                                                                      duration={500}>Team</Link></a>
                            <a className="nav__link" href="#" ><Link  activeClass="active"
                                                                      to={"reviews"}
                                                                      spy={true}
                                                                      smooth={true}
                                                                      offset={-70}
                                                                      duration={500}>Download</Link></a>
                        </nav>

                        <button className="burger" type="button" id="navToggle">

                            <span className="burger__item">Menu</span>
                        </button>


                    </div>

                </div>
            </header>

        </>
    );
}

export default Header;
