import React, { Component } from 'react';
import Header from './Header/Header';
import SingleRecord from './Record/SingleRecord';
import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className={styles.Records}>
          <SingleRecord/>
          <SingleRecord/>
        </div>
      </div>
    );
  }
}

export default App;
