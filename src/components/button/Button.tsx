import React from "react";
import './Button.css'

const Button = (props:any) => {
    return (
        <button className="button" {...props}></button>
    )
}

export default Button;
