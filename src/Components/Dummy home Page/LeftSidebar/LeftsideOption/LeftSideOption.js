import React from 'react';
import "./LeftSideOption.css" ;

function LeftSideOption({ active, text, Icon }) {
    return (
        <div className={`leftSideOption ${active && "leftSideOption--active"}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    );
}

export default LeftSideOption;