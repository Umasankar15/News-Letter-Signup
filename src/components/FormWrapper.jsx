import React from 'react';
import styles from './FormWrapper.module.css';

function FormWrapper({ children, style }) {
  return <div className={styles.wrapperContainer}>
    <div className={styles.wrapperSubContainer} style={style}>
      {children}
    </div>
  </div>
}

export default FormWrapper;