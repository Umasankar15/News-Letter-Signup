import React, { useState } from 'react';
import styles from './Form.module.css';
import BulletPointImage from '/Assets/icon-success.svg';
import Input from './Input';
import Button from './Button';

const textPoints = [{ point: 1, text: 'Product discovery and building what matters' }, { point: 2, text: 'Mesauring to ensure updates are a success' }, { point: 3, text: 'And much more!' }];

function Form({ onClickSubscribe }) {

  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const onChangeEmail = (event) => {
    error && setError(false); // if error is true, make it false onChange of the email
    setEmail(event.target.value);
  }

  const handleSubscribeButtonClick = () => {
    const validEmailPattern = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if (validEmailPattern.test(email)) {
      setError(false);
      localStorage.setItem('email', email);
      onClickSubscribe();
    } else {
      setError(true);
    }
  }

  return <div className={styles.FormContainer}>
    <div className={styles.FormText}>
      <h1>Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:
      </p>
      <div className={styles.FormTextBulletPoints}>
        {textPoints.map(({ point, text }) => <BulletPoint key={point} text={text} />)}
      </div>
    </div>
    <div className={styles.FormFields}>
      <Input type="text"
        id="email"
        label="Email Address"
        name="email"
        value={email}
        placeholder="email@company.com"
        onChange={onChangeEmail}
        isError={error}
      />
    </div>
    <div className={styles.ButtonContainer}>
      <Button
        type="button"
        onClick={handleSubscribeButtonClick}
      >
        Subscribe to monthly newsletter
      </Button>
    </div>
  </div>
}

function BulletPoint({ text }) {
  return (
    <div className={styles.BulletPoints}>
      <img src={BulletPointImage}
        alt="success points"
        className={styles.BulletPointImg}
      />
      <span className={styles.BulletPointText}>{text}</span>
    </div>
  )
}

export default Form;