import React from 'react';
import RecordFilter from '../RecordFilter/RecordFilter';
import logo from '../assets/logo.png';
import styles from './Header.module.css';

const Header = () => (
  <header>
    <div className={styles.Header}>
      <div className={styles.Head}>
        <img className={styles.Logo} src={logo} alt="logo"/>
        <h1 className={styles.Title}>Medical Reports</h1>
      </div>
      <RecordFilter />
    </div>
    <div className={styles.Drop}><i className="fas fa-chevron-down"></i></div>
  </header>
);

export default Header;