import React from 'react';
import styles from './Span.module.css';

const icon = {
  id: 'fas fa-user-circle',
  type: 'fas fa-prescription',
  name: 'fas fa-user',
  age: 'fas fa-heart',
  problem: 'fas fa-exclamation-circle',
  doctor: 'fas fa-user-md',
  date: 'fas fa-calendar-alt'
};

const Span = (props) => (
  <div className={styles.SpanContainer}>
    <span className={styles.Span}><i className={icon[props.field]}></i></span>
    <span
      name={props.field} 
      className={`${styles.Span} ${styles[props.field]}`} 
      contentEditable
      onBlur={props.onChangeHandler}>
      {typeof props.value == "object" ? props.value.join(', '): props.value}
    </span>
  </div>
  
);

export default Span;