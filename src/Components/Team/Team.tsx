import React from 'react';
import './Team.scss';
import Team1 from "../../img/team/team-1.png"
import Team2 from "../../img/team/team-2.png"
import Team3 from "../../img/team/team-3.png"
import Team4 from "../../img/team/team-4.png"
import {Facebook, Google, LinkedIn, Twitter} from "../../helpersSCSS/imgFiles";


function Team() {
    return (
        <>
            <div className="team" id="team">
                <div className="container">
                    <div className="team__inner">
                        <div className="team__item">
                            <img src={Team1} alt="" className="team__photo"/>
                            <div className="team__name">Ruth Woods</div>
                            <div className="team__prof">Founder, CEO</div>
                            <div className="team__text">
                                <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
                                    massa
                                    justo sit amet risus.</p> <p>Maecenas sed diam eget risus varius blandit sit amet
                                non magna.
                                Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                            </div>
                            <div className="social">
                                <Facebook/>
                                <Google/>
                                <LinkedIn/>
                                <Twitter/>

                            </div>

                        </div>

                        <div className="team__item">
                            <img src={Team2} alt="" className="team__photo"/>
                            <div className="team__name">Ruth Woods</div>
                            <div className="team__prof">Founder, CEO</div>
                            <div className="team__text">
                                <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
                                    massa
                                    justo sit amet risus.</p> <p>Maecenas sed diam eget risus varius blandit sit amet
                                non magna.
                                Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                            </div>
                            <div className="social">
                                <Facebook/>
                                <Google/>
                                <LinkedIn/>
                                <Twitter/>

                            </div>

                        </div>

                        <div className="team__item">
                            <img src={Team3} alt="" className="team__photo"/>
                            <div className="team__name">Ruth Woods</div>
                            <div className="team__prof">Founder, CEO</div>
                            <div className="team__text">
                                <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
                                    massa
                                    justo sit amet risus.</p> <p>Maecenas sed diam eget risus varius blandit sit amet
                                non magna.
                                Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                            </div>
                            <div className="social">
                                <Facebook/>
                                <Google/>
                                <LinkedIn/>
                                <Twitter/>

                            </div>

                        </div>

                        <div className="team__item">
                            <img src={Team4} alt="" className="team__photo"/>
                            <div className="team__name">Ruth Woods</div>
                            <div className="team__prof">Founder, CEO</div>
                            <div className="team__text">
                                <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
                                    massa
                                    justo sit amet risus.</p> <p>Maecenas sed diam eget risus varius blandit sit amet
                                non magna.
                                Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                            </div>
                            <div className="social">
                                <Facebook/>
                                <Google/>
                                <LinkedIn/>
                                <Twitter/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Team;
