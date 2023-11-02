import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({shelf}) {
  



  return (
    <ol className={styles.wrapper}>
      {shelf.map((item) => {
        return (
          <li className={styles.toastWrapper}>
            <Toast variant={item.variant}>{item.message}</Toast>
          </li>
        )  
      })}
    </ol>
  );
}

export default ToastShelf;
