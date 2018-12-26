import React, { Component } from 'react';
import Span from '../components/Span/Span.js';
import Editor from '../Editor/Editor.js';
import styles from './RecordData.module.css';

class RecordData extends Component {
  //state is not chnaging if new props required for filter. That's why the image is changing but not the 
  // texts in the RecordData component
  state = {
    type: this.props.type,
    id: this.props.patient.id,
    name: this.props.patient.name,
    age: this.props.patient.age,
    problem: [...this.props.problem],
    doctor: this.props.doctor,
    date: this.props.date,
  };

  static getDerivedStateFromProps(props, state) {
    return {
      type: props.type,
      id: props.patient.id,
      name: props.patient.name,
      age: props.patient.age,
      problem: [...props.problem],
      doctor: props.doctor,
      date: props.date,
    }
  }

  onBlurHandler = (event) => {
    let fieldVal = event.target.innerHTML;
    let fieldId = event.target.getAttribute('ident');

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
      elements.push(<Span key={prop} field={prop} value={this.state[prop]} onBlurHandler={this.onBlurHandler}/>);
    }

    return (
      <div className={styles.RecordData}>
        {elements}
        {this.state.isEditor ? <Editor/> : null}
        <button onClick={this.onButtonClick}><i className="fas fa-plus-circle"></i></button>
      </div>
    );
  }
}

export default RecordData;