import React from 'react';
import RecordData from './RecordData';
import RecordImg from './RecordImg';
import styles from './SingleRecord.module.css';

const SingleRecord = () => (
  <div className={styles.Card}>
    <RecordImg/>
    <RecordData/>
  </div>
);

export default SingleRecord;