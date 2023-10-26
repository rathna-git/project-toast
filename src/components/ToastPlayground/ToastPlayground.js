import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

import Toast from '../Toast/Toast';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];


function ToastPlayground() {
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [message, setMessage] = React.useState('');

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <Toast message={message} variant={variant}/>
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea 
              id="message" 
              className={styles.messageInput} 
              value={message} 
              onChange={(event) => {
                setMessage(event.target.value)
              }}/>
          </div>
        </div>

      <form className = {styles.row} onSubmit = {(event) =>{
        event.preventDefault();
      }}>
          <div className={styles.label}>Variant</div>
          
          { VARIANT_OPTIONS.map((el, index) => (
          <div
            key = {index} className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
              <label htmlFor={`variant-${el}`}>
                <input
                  type="radio"
                  name="variant"
                  id = {`variant-${el}`}
                  checked = {variant === el}
                  value={el}
                  onChange={event => {
                    setVariant(event.target.value)
                  }}
                />
                
                  {el} 
              </label>  
          </div>
          ))}
        
      </form>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
