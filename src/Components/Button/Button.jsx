
import React from 'react'
import './Button.scss'

const Button = (props) => {

    const { buttonText, isSecondary } = props;

    let buttonStyle = "button";

    if ( isSecondary ) {
        buttonStyle += " secondary";
    } else {
        buttonStyle += " primary";
    }


    return <button className={buttonStyle}>{buttonText}</button>;
    
}

export default Button ;
