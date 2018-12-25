import React from 'react';
import img from '../assets/logo.png';
import styles from './RecordImg.module.css';

const RecordImg = (props) => (
  <div className={styles.RecordImg}>
    <img src={props.photo} alt={props.text}/>
  </div>
);

export default RecordImg;