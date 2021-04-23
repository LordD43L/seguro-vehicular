import React from "react";
import './Button.scss';

const button = props => {
    return (
        <button
            className={props.bsClasses}
            onClick={props.clicked}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

export default button;