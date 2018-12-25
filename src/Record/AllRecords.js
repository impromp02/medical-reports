import React from 'react';
import RecordData from './RecordData';
import RecordImg from './RecordImg';
import styles from './AllRecords.module.css';

import { records } from '../data';

const AllRecords = () => {
    return records.map(record => {
      return <div className={styles.Card}>
        <RecordImg photo={record.img} text={record.type}/>
        <RecordData {...record}/>
      </div>;
    });
  };

export default AllRecords;