import './App.css';
import React from 'react';
import styles from './TextInput.module.css';


function TextInput({id,label,icon,...delegated}) {
  const generatedId = React.useId();
  const appliedId = id || generatedId;
  return (
    <label className={styles.labelWrapper} htmlFor={appliedId}>
      <span className={styles.iconWrapper}>{icon}</span>
        <input style={{border:'none', outline:'none', padding:'8px', width:'100%'}}
            id={appliedId}
            {...delegated}>
        </input>
    </label>
  )
}
export default TextInput;
