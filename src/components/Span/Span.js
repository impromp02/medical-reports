import React from 'react';
import styles from './Span.module.css';

const icon = {
  name: 'fas fa-user',
  problem: 'fas fa-diagnoses',
  doctor: 'fas fa-user-md',
  date: 'fas fa-calendar-alt'
};

const Span = (props) => (
  <div className={styles.Container}>
    <span className={styles.Span}><i className={icon[props.type]}></i></span>
    <span
      name={props.type} 
      className={`${styles.Span} ${styles[props.type]}`} 
      contentEditable
      onFocus={props.onFocusHandler}>
      {props.text}{console.log(`${styles.Span} ${props.type}`)}
    </span>
  </div>
  
);

export default Span;