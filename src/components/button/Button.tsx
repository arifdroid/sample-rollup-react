import React from "react";
import styles from './Button.module.scss';

const Button = (props:any) => {
    return (
        <button className={styles.button} {...props}></button>
    )
}

export default Button;
