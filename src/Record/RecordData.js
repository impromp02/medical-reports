import React, { Component } from 'react';
import Span from '../components/Span/Span.js';
import Editor from '../Editor/Editor.js';
import styles from './RecordData.module.css';

class RecordData extends Component {
  state = {
    type: this.props.type,
    id: this.props.patient.id,
    name: this.props.patient.name,
    age: this.props.patient.age,
    problem: [...this.props.problem],
    doctor: this.props.doctor,
    date: this.props.date,
    isEditor: false
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
    console.log(fieldId, fieldVal)
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

  onAddButtonClick = () => {
    this.setState({
      isEditor: true
    });
  };

  onCloseButtonClick = () => {
    this.setState({
      isEditor: false
    });
  }

  render() {
    let elements = [];
    for(let prop in this.state) {
      if(prop === "isEditor") continue;
      elements.push(<Span key={prop} field={prop} value={this.state[prop]} onBlurHandler={this.onBlurHandler}/>);
    }

    return (
      <div className={styles.RecordData}>
        {elements}
        {this.state.isEditor ? <Editor photo={this.props.img} for={this.state.type} onCloseButtonClick={this.onCloseButtonClick}/> : null }
        <button onClick={this.onAddButtonClick}><i className="fas fa-plus-circle"></i></button>
      </div>
    );
  }
}

export default RecordData;