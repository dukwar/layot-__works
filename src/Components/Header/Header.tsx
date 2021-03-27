import React, {useState} from 'react';
import './Header.scss';

function Header() {

    let [display, setDisplay] = useState(false)

    let burgerActive = () => {
        setDisplay(true)
    }

    let burgerDeactive = () => {
        setDisplay(false)
    }



    return (
        <>
            <header className="header" id="header">
                <div className="container">
                    <div className="header__inner" id="headerinner">
                        <div className="header__logo">

                        </div>

                        <nav className="nav" id="nav">
                            <a className="nav__link" href="#" data-scroll="#features">Features</a>
                            <a className="nav__link" href="#" data-scroll="#works">Works</a>
                            <a className="nav__link" href="#" data-scroll="#team">Our Team</a>
                            <a className="nav__link" href="#" data-scroll="#reviews">Testimonials</a>
                            <a className="nav__link" href="#" data-scroll="#download">Download</a>
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
