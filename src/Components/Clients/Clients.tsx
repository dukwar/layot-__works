import React from 'react';
import './Clients.scss';
import Client1 from "../../img/clients/client-1.png"
import Client2 from "../../img/clients/client-2.png"
import Client3 from "../../img/clients/client-3.png"
import Client4 from "../../img/clients/client-4.png"
import Client5 from "../../img/clients/client-5.png"





function Clients() {
    return (
        <>
            <div className="Clients">
                    <div className="clients__inner">
                        <div className="clients__item">
                            <img src={Client1} alt=""/>
                        </div>
                        <div className="clients__item">

                            <img src={Client2} alt=""/>


                        </div>
                        <div className="clients__item">

                            <img src={Client3} alt=""/>
                        </div>
                        <div className="clients__item">
                            <img src={Client4} alt=""/>
                        </div>
                        <div className="clients__item">
                            <img src={Client5} alt=""/>
                        </div>


                    </div>
                    <div className="clients__text">
                        <div className="clients__text__inner">
                            <p>Hvaing placeat facere possimus, omnis voluptas assumenda est,
                                omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum”

                            </p>
                            <p className="last__cltext">John Doe, Google Inc.</p>
                        </div>
                    </div>
                </div>



        </>
    );
}

export default Clients;
