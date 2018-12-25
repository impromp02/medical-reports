import React from 'react';
import styles from './RecordFilter.module.css';

const RecordFilter = (props) => (
  <div className={styles.RecordFilter}>
    <ul>
      <li onClick={props.onClickHandler}>All</li>
      <li onClick={props.onClickHandler}>Prescription</li>
      <li onClick={props.onClickHandler}>MRI</li>
      <li onClick={props.onClickHandler}>X-Ray</li>
      <li onClick={props.onClickHandler}>Blood Report</li>
      <li onClick={props.onClickHandler}>USG</li>
    </ul>
  </div>
);

export default RecordFilter;