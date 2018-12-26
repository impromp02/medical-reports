import React from 'react';
import RecordFilter from '../RecordFilter/RecordFilter';
import logo from '../assets/logo.png';
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <header>
      <div className={styles.Header}>
        <div className={styles.Head}>
          <img className={styles.Logo} src={logo} alt="logo"/>
          <h1 className={styles.Title}>Medical Reports</h1>
        </div>
        {props.isFilter ? <RecordFilter onClickHandler={props.onFilterClickHandler} /> : null}
      </div>
      <div onClick={props.onDropClickHandler} className={styles.Drop}>
        {props.isFilter ? <i className="fas fa-chevron-up"></i> :<i className="fas fa-chevron-down"></i>}
      </div>
    </header>
  );
}

export default Header;