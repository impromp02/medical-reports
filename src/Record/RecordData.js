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

  onBlurHandler = (event) => {
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
        <Span type="id" text="Ramesh" onBlurHandler={this.onBlurHandler}/>
        <Span type="name" text="Ramesh" onBlurHandler={this.onBlurHandler}/>
        <Span type="problem" text="Ramesh" onBlurHandler={this.onBlurHandler}/>
        <Span type="doctor" text="Ramesh" onBlurHandler={this.onBlurHandler}/>
        <Span type="date" text="Ramesh" onBlurHandler={this.onBlurHandler}/>
        <button><i class="fas fa-plus-circle"></i></button>
      </div>
    );
  }
}

export default RecordData;