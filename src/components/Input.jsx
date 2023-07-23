import React from 'react';
import styles from './Input.module.css';

function Input(props) {
  const { id, label, name, value, placeholder, onChange, isError } = props;
  return <div className={ styles.InputContainer }>
    <div className = { styles.LabelAndErrorContainer }>
      <label htmlFor = {id} className = { styles.InputLabel }> { label } </label>
      { isError && <span className={ styles.ErrorMessage }> Valid email required </span> }
    </div>
    <input
      id={id}
      label={label}
      name={name}
      value={value} placeholder={placeholder}
      onChange={onChange}
      className={styles.EmailInput}
      style={{
        background: `${isError ? '#F7C7C7' : '#fff'}`,
        color: `${isError ? '#EC7474' : '#000'}`
      }}
    />
  </div>
}

export default Input;