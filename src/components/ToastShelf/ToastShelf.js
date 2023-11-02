import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({shelf, handleDelete}) {
  
  return (
    <ol className={styles.wrapper}>
      {shelf.map((item) => {
        return (
          <li className={styles.toastWrapper} key={item.id}>
            <Toast id ={item.id} variant={item.variant} handleDelete={handleDelete}>{item.message} </Toast>
          </li>
        )  
      })}
    </ol>
  );
}

export default ToastShelf;
