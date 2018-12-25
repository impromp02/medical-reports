import React, { Component } from 'react';
import Header from './Header/Header';
import AllRecords from './Record/AllRecords';
import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className={styles.Records}>
          <AllRecords/>
        </div>
      </div>
    );
  }
}

export default App;
