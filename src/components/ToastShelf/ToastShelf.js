import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({variant, setHidden, message}) {
  const [shelf, setShelf] = React.useState([]);

  React.useEffect(() => {

    const newShelf = {};
    newShelf[variant] =  variant;
    newShelf[message] = message;

    setShelf([...shelf, newShelf])
    
  },[message]);

 console.log(shelf);

  return (
    <ol className={styles.wrapper}>
      <li className={styles.toastWrapper}>
        <Toast variant={variant} setHidden={setHidden}>{message}</Toast>
      </li>
      <li className={styles.toastWrapper}>
        <Toast variant={variant} setHidden={setHidden}>{message}</Toast>
      </li>
    </ol>
  );
}

export default ToastShelf;
