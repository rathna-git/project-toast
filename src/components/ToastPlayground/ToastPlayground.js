import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

import Toast from '../Toast/Toast';
import ToastShelf from '../ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];


function ToastPlayground() {
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [message, setMessage] = React.useState('');
  const [shelf, setShelf] = React.useState([]);
  
 
  function handleSubmit(){

    const newShelf = {
      message,
      variant,
      id: crypto.randomUUID(),
    };

    setShelf([...shelf, newShelf]);
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  }

  function handleDelete(id){
    setShelf(shelf.filter((item) => item.id !== id))
  }
 

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf shelf={shelf} handleDelete={handleDelete}/>

      <form onSubmit = {(event) =>{
        event.preventDefault();
        handleSubmit(); 
      }}>

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
                setMessage(event.target.value);
              }}
            />
          </div>
        </div>

         <div className={styles.row}>
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
                  onChange = {(event) => {
                    setVariant(event.target.value)
                  }}
                />
                
                  {el} 
              </label>  
          </div>
          ))}
        
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>
                Pop Toast!
            </Button>
          </div>
        </div>
     </div>
    </form>
  </div>
  );
}

export default ToastPlayground;
