import React, { Component } from 'react';
import Span from '../components/Span/Span.js';
import styles from './RecordData.module.css';

class RecordData extends Component {
  state = {
    id: null,
    name: null,
    problem: [],
    doctor: null,
    date: Date.now()
  };

  onFocusHandler = (event) => {
    let fieldVal = event.target.innerHTML;
    let fieldId = event.target.getAttribute('name');

    if(fieldId === "problem") {
      this.setState({
        [fieldId]: [...this.state.problem, fieldVal]
      });
    } else {
      this.setState({
        [fieldId]: fieldVal
      });
    }
  }

  render() {
    return (
      <div className={styles.RecordData}>
        <Span type="id" text="Ramesh" onFocusHandler={this.onFocusHandler}/>
        <Span type="name" text="Ramesh" onFocusHandler={this.onFocusHandler}/>
        <Span type="problem" text="Ramesh" onFocusHandler={this.onFocusHandler}/>
        <Span type="doctor" text="Ramesh" onFocusHandler={this.onFocusHandler}/>
        <Span type="date" text="Ramesh" onFocusHandler={this.onFocusHandler}/>
      </div>
    );
  }
}

export default RecordData;