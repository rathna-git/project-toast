import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({message, variant, hidden, setHidden}) {
 
 const Icon = ICONS_BY_VARIANT[variant];

 function clickHandler(){
  setHidden(!hidden);
 }

 return(
  <>
  {hidden ?  (
    <div className={`${styles.toast} ${styles.variant}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        {message}
      </p>
      <button className={styles.closeButton} onClick={clickHandler}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  ) : null }
  </>
 );
 
}

export default Toast;
