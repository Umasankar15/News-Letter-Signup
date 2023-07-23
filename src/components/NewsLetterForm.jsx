import React, { useState, useEffect } from 'react';
import styles from './NewsLetterForm.module.css';
import FormWrapper from './FormWrapper';
import Button from './Button';
import SuccessIcon from '../../Assets/icon-success.svg';
import Form from './Form';

function NewsLetterForm() {
  const [subscribe, setSubscribe] = useState(false);
  
  const onClickSubscribe = () => {
    setSubscribe(true);
  }

  const onClickDismiss = () => {
    setSubscribe(false);
    localStorage.clear();
  }

  useEffect(() => {
    localStorage.clear();
  }, [])
  
  return !subscribe 
        ? <NewsLetter onClickSubscribe={onClickSubscribe} />
        : <Success onClickDismiss={onClickDismiss} />
}

function NewsLetter({ onClickSubscribe }) {
  return <FormWrapper>
    <div className={styles.NewsLetterFormContainer}>
      <Form onClickSubscribe={onClickSubscribe} />
    </div>
    <div className={styles.NewsLetterImageContainer}>
      <img src="Assets/illustration-sign-up-desktop.svg" alt="news letter form text" />
    </div>
  </FormWrapper>
}

function Success({ onClickDismiss }) {
  return <FormWrapper style={{ width: '400px', justifyContent: 'flex-start' }}>
    <div className={styles.successContainer}>
      <div className={styles.successImageContainer}>
        <img src={SuccessIcon} alt="success-icon" />
      </div>
      <h1 className={styles.successTitle}>
        Thanks for Subscribing!
      </h1>
      <div className={styles.successText}>
        <span>
          A Confirmation mail has been sent to email. Please open it and click the button inside to confirm your subscription
        </span>
      </div>
      <div className={styles.buttonContainer}>
        <Button type={"button"} onClick={onClickDismiss} > Dismiss Message </Button>
      </div>
    </div>
  </FormWrapper>
}

export default NewsLetterForm;