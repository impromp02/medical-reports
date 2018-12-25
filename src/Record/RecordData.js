import React, { Component } from 'react';
import Span from '../components/Span/Span.js';
import styles from './RecordData.module.css';

class RecordData extends Component {
  state = {
    type: this.props.type,
    patient: {
      id: this.props.patient.id,
      name: this.props.patient.name,
      age: this.props.patient.age
    },
    problem: [...this.props.problem],
    doctor: this.props.doctor,
    date: this.props.date
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
    let elements = [];
    for(let prop in this.state) {
      if(prop === "patient") {
        for(let key in this.state.patient) {
          elements.push(<Span field={key} value={this.state[prop][key]}/>);
        }
      } else {
        elements.push(<Span field={prop} value={this.state[prop]}/>);
      }
    }

    return (
      <div className={styles.RecordData}>
        {elements}
      </div>
    );
  }
}

export default RecordData;