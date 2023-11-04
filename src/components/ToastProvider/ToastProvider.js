import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider() {
  return (
  <ToastContext.Provider>

  </ToastContext.Provider>
  );
}

export default ToastProvider;
