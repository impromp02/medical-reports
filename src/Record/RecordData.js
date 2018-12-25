import React, { Component } from 'react';
import Span from '../components/Span/Span.js';
import styles from './RecordData.module.css';

class RecordData extends Component {
  //state is not chnaging if new props required for filter. That's why the image is changing but not the 
  // texts in the RecordData component
  state = {
    type: this.props.type,
    patient: {
      id: this.props.patient.id,
      name: this.props.patient.name,
      age: this.props.patient.age
    },
    problem: [...this.props.problem],
    doctor: this.props.doctor,
    date: this.props.date,
    isEditor: false
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

  onButtonClick = () => {
    this.setState({
      isEditor: true
    });
  };

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
        <button onClick={this.onButtonClick}><i class="fas fa-plus-circle"></i></button>
      </div>
    );
  }
}

export default RecordData;