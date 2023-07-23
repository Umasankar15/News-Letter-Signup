import React from 'react';
import styles from './Button.module.css';

function Button({ type, onClick, children }) {
  return <button 
            type = {type} 
            onClick = {onClick}
            className = {styles.SubscribeButton}
           >
            {children}
  </button>
}

export default Button;