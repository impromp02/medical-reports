import React, { Component } from 'react';
import Header from './Header/Header';
import RecordData from './Record/RecordData';
import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <RecordData/>
      </div>
    );
  }
}

export default App;
