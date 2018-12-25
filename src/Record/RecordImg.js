import React from 'react';
import img from '../assets/logo.png';
import styles from './RecordImg.module.css';

const RecordImg = (props) => (
  <div className={styles.RecordImg}>
    <img src={img} alt="prescription"/>
    <div>Prescription</div>
  </div>
);

export default RecordImg;