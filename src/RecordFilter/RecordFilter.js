import React from 'react';
import styles from './RecordFilter.module.css';

const RecordFilter = () => (
  <div className={styles.RecordFilter}>
    <ul>
      <li>Prescription</li>
      <li>MRI</li>
      <li>X-Ray</li>
      <li>Blood Report</li>
      <li>USG</li>
    </ul>
  </div>
);

export default RecordFilter;