import React from 'react';
import styles from './Input.module.css';

const Input = (props) => (
  <div className={styles.Input}>
    <label htmlFor={props.name}>{props.name}</label>
    <input name={props.name} type={props.type}/>
  </div>
);

export default Input;