import React, { Component } from 'react';
import Header from './Header/Header';
import AllRecords from './Record/AllRecords';
import styles from './App.module.css';

class App extends Component {
  state = {
    isFilter: false,
    filter: 'All'
  };
  onDropClickHandler = (event) => {
    this.setState({
      isFilter: !this.state.isFilter
    });
  }

  onFilterClickHandler = (event) => {
    this.setState({
      filter: event.target.innerHTML
    });
  }

  render() {
    return (
      <div>
        <Header 
          isFilter={this.state.isFilter}
          onFilterClickHandler={this.onFilterClickHandler} 
          onDropClickHandler={this.onDropClickHandler} />
        <div className={styles.Records}>
          <AllRecords filter={this.state.filter} />
        </div>
      </div>
    );
  }
}

export default App;
