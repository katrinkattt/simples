import React, {Component} from 'react';


export default function Block(props) {
    return(
        <div className="block_line">
            <div className="block__one">
                <div className="block__foto" style={{background:`url(${props.foto}) no-repeat`}}></div>
                <div key="title"id="blockTitle" className="block__title">
                <p className="block__title">{props.title}</p>
                </div>
                <div key="text" id="blockText" className="block__text">
                <div className="block__text">{props.text}</div>
                </div>
            </div>
        </div>
    )
}



