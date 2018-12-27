import React from 'react';
import RecordImg from '../Record/RecordImg';
import Input from '../components/Input/Input';
import styles from './Editor.module.css';

const EDITOR_FIELDS = {
  Prescription: [
    {
      name: "Problem",
      type: "text"
    },
    {
      name: "Medicine",
      type: "text"
    },
    {
      name: "Dosage",
      type: "number"
    },
    {
      name: "Duration",
      type: "text"
    },
    {
      name: "Date",
      type: "date"
    }
  ],
  "Blood Report": [
    {
      name: "RBC",
      type: "text"
    },
    {
      name: "WBC",
      type: "text"
    },
    {
      name: "Hb",
      type: "text"
    }
  ],
  USG: [],
  MRI: [],
  XRay:[]
};

const Editor = (props) => {
  let elements = EDITOR_FIELDS[props.for].map(field => <Input key={field.name} name={field.name} type={field.type}/>);
  return (
    <div className={styles.Editor}>
      <button onClick={props.onCloseButtonClick} className={styles.CloseBtn}><i className="fas fa-times-circle"></i></button>
      <RecordImg photo={props.photo} text={props.for} />
      <form className={styles.Form}>
        <fieldset>
          <legend><strong>Report Details</strong></legend>
          { elements }
        </fieldset>
        <fieldset>
          <legend><strong>Image Quality</strong></legend>
          <div>
            <label htmlFor="readability">Readability</label>
            <select name="readability">
              <option value="clear">Very Clear</option>
              <option value="somewhat">Somewhat</option>
              <option value="not">Not Readable</option>
            </select>
          </div>
          <div>
            <label htmlFor="document">Medical Document?</label>
            <select name="document">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          
        </fieldset>
        <div>
          <button><i className="fas fa-save"></i></button>
        </div>
      </form>
    </div>
  );
};

export default Editor;