import React from "react";
import styles from './Button.module.scss';
import '../../index.css';

const Button = (props:any) => {

  const [state, setState] = React.useState('');

  const { name, id, item, error, managedCallback, } = props;
  const { action, label } = item || { label: 'Default' };

  const onClick = () => managedCallback(action?.actionURL)
  const disabled = error && Object.keys(error).length > 0 || props?.disabled;


  const className = disabled ? styles['button-disabled'] : styles['button'];

  return (
    <button
      name={name}
      id={id}
      className={className}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>);

};

export default Button;
