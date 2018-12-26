import React from 'react';
import styles from './Editor.module.css';

const Editor = () => (
  <div className={styles.Editor}>
    <form className={styles.Form}>
      <div>
        <label htmlFor="problems">Problem</label>
        <input type="text"/>
      </div>
      <div>
        <label htmlFor="medicines">Medicines</label>
        <input type="text"/>
      </div>
      <div>
        <label htmlFor="duration">Duration</label>
        <input type="text"/>
      </div>
      <div>
        <label htmlFor="doctor">Doctor</label>
        <input type="text"/>
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input type="text"/>
      </div>
    </form>
  </div>
);

export default Editor;