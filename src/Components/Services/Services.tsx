import React from 'react';
import './Services.scss';
import {Stick} from "../../helpersSCSS/imgFiles";

type PropsType = {
    title: string,
    text: string
}

function Services(props:PropsType) {
    return (
        <>
            <div className="services">
                <div className="services__inner">
                    <div className="services__title">{props.title}</div>
                    <div className="stick__services">
                        <Stick />
                    </div>
                    <div className="services__text">{props.text}
                    </div>
                </div>
            </div>

        </>
    );
}

export default Services;
