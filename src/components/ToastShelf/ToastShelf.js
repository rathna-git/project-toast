import React from 'react';

import { ToastContext } from '../ToastProvider/ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  
  const { shelf } = React.useContext(ToastContext);

  return (
    <ol 
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notifications"
      >
      {shelf.map((item) => {
        return (
          <li className={styles.toastWrapper} key={item.id}>
            <Toast id ={item.id} variant={item.variant}>{item.message} </Toast>
          </li>
        )  
      })}
    </ol>
  );
}

export default ToastShelf;
